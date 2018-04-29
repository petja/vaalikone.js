import store from './store'
import * as User from './models/User'
import localForage from './models/db'
import history from './history'

import { throttle } from 'lodash'
import jwtDecode from 'jwt-decode'

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

export const INIT_SESSION = (token) => async dispatch => {
    const decoded = jwtDecode(token)

    await dispatch({
        type                : 'INIT_SESSION',
        token,
        decoded,
    })

    await localForage.setItem('auth', token)
}

export const LOGOUT = () => async dispatch => {
    await dispatch({
        type                : 'LOGOUT',
    })
    await localForage.clear()
}

export const ELECTION_INFO = (slug) => async dispatch => {
    const elections = await localForage.getItem('elections') || {}

    if(!elections[slug]) {
        elections[slug] = await fetch(`/api/election/${slug}`).then(resp => resp.json())
        await localForage.setItem('elections', elections)
    }

    await dispatch({
        type                : 'ELECTION_INFO',
        election            : elections[slug]
    })
}

export const FETCH_CANDIDATES = (slug) => async dispatch => {
    const state = store.getState()

    const questions = await fetch(`/api/constituency/${state.root.election.id}/questions`)
        .then(resp => resp.json())

    await dispatch({
        type                : 'FETCH_QUESTIONS',
        questions           : questions,
    })
}

export const NEXT_QUESTION = () => ({
    type                : 'NEXT_QUESTION',
})

export const REMOVE_ANSWER = (questionId) => async dispatch => {
    await dispatch({
        type                : 'REMOVE_ANSWER',
        questionId,
    })

    await dispatch(PUSH_QUESTION_ANSWER(questionId))
}

export const UPDATE_LOCALFORAGE = () => async dispatch => {
    const state = store.getState()
    await localForage.setItem('answers', state.answers)
}

export const REHYDRATE = () => async dispatch => {
    const rehydrated = {
        answers         : await localForage.getItem('answers') || {},
    }

    await dispatch({
        type                : 'REHYDRATE',
        payload             : rehydrated,
    })

    await dispatch(INIT_SESSION(await localForage.getItem('auth')))
}

export const SET_ANSWER = (questionId, answerId) => ({
    type                : 'SET_ANSWER',
    questionId,
    answerId,
})

export const SET_ANSWER_AND_UPDATE_SCORES = (questionId, answerId) => async dispatch => {
    await dispatch(SET_ANSWER(questionId, answerId))
    await dispatch(PUSH_QUESTION_ANSWER(questionId))
    await dispatch(UPDATE_LOCALFORAGE())
    await dispatch(SCOREBOARD_UPDATE())
}

const pusher = throttle(async (dispatch, questionId) => {
    await dispatch({
        type                : 'PUSH_QUESTION_ANSWER',
        questionId,
    })

    const state = store.getState()
    const authToken = state.auth.token

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
}, 2000, {leading: false})

const PUSH_QUESTION_ANSWER = (questionId) => async dispatch => pusher(dispatch, questionId)

export const SET_REASONING = (questionId, text) => async dispatch => {
    await dispatch({
        type            : 'SET_REASONING',
        questionId,
        text,
    })

    await dispatch(PUSH_QUESTION_ANSWER(questionId))
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

    await dispatch({
        type                : 'SCOREBOARD_UPDATE',
        scoreboard,
    })
}

export const GO_QUESTION_ID = questionId => ({
    type                : 'GO_QUESTION_ID',
    questionId,
})
