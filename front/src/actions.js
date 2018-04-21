import store from './store'
import * as User from './models/User'
import localForage from './models/db'

import { throttle } from 'lodash'

export const ACTIONS = {
    SCORE_CANDIDATES            : {
        SUCCESS                     : 'SCORE_CANDIDATES_SUCCESS',
    },
}

export function questionsReceived(questions, options, candidates, parties) {
    return {
        type                : 'RECEIVED_QUESTIONS_RESPONSE',
        questions,
        options,
        candidates,
        parties,
    }
}

export const NEXT_QUESTION = () => ({
    type                : 'NEXT_QUESTION',
})

export const REMOVE_ANSWER = (questionId) => ({
    type                : 'REMOVE_ANSWER',
    questionId,
})

export const UPDATE_LOCALFORAGE = () => async dispatch => {
    const state = store.getState()
    await localForage.setItem('answers', state.answers)
}

export const REHYDRATE_BEGIN = () => async dispatch => {
    const rehydrated = {
        answers         : await localForage.getItem('answers') || {},
    }

    await dispatch(REHYDRATE_OK(rehydrated))
}

export const REHYDRATE_OK = (rehydrated) => ({
    type                : 'REHYDRATE_OK',
    payload             : rehydrated,
})

export const SET_ANSWER = (questionId, answerId) => ({
    type                : 'SET_ANSWER',
    questionId,
    answerId,
})

export const SET_ANSWER_AND_UPDATE_SCORES = (questionId, answerId) => async dispatch => {
    await dispatch(SET_ANSWER(questionId, answerId))
    await dispatch(UPDATE_LOCALFORAGE())
    await dispatch(SCOREBOARD_UPDATE())
}

const PUSH_QUESTION_ANSWER = throttle(async (dispatch, questionId) => {
    await dispatch({
        type                : 'PUSH_QUESTION_ANSWER',
        questionId,
    })

    const state = store.getState()
    const authToken = await User.getToken()

    await fetch(`/api/answer/${questionId}`, {
        method              : 'POST',
        headers             : {
            'Content-Type'      : 'application/json',
            Authorization       : `Bearer ${authToken}`,
        },
        body                : JSON.stringify({
            option              : state.answers[questionId],
            reasoning           : state.reasonings[questionId],
        }),
    })
}, 2000)

export const SET_REASONING = (questionId, text) => async dispatch => {
    await dispatch({
        type            : 'SET_REASONING',
        questionId,
        text,
    })

    await PUSH_QUESTION_ANSWER(dispatch, questionId)
}

export const SCOREBOARD_UPDATE = () => async dispatch => {
    const url = '/api/results'
    const {answers} = store.getState()

    const scoreboard = await (
        await fetch(url, {
            method      : 'POST',
            headers     : {
                'Content-Type'      : 'application/json',
            },
            body        : JSON.stringify(answers),
        })
    ).json()

    await dispatch(SCOREBOARD_UPDATE_OK(scoreboard))
}

export const SCOREBOARD_UPDATE_OK = scoreboard => ({
    type                : 'SCOREBOARD_UPDATE_OK',
    scoreboard,
})

export const GO_QUESTION_ID = questionId => ({
    type                : 'GO_QUESTION_ID',
    questionId,
})
