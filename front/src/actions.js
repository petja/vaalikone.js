import store from './store'
//import * as User from './models/User'
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

export const FETCH_ELECTION_INFO = (electionSlug, constituencySlug) => async dispatch => {
    const election = await fetch(`/api/election/${electionSlug}`).then(resp => resp.json())

    await dispatch({
        type                : 'FETCH_ELECTION_INFO',
        constituency        : election.constituencies[constituencySlug].id,
        election,
    })
}

export const FETCH_CANDIDATES = () => async dispatch => {
    const state = store.getState()

    const candidates = await fetch(`/api/constituency/${state.root.constituency}/candidates`)
        .then(resp => resp.json())

    await dispatch({
        type                : 'FETCH_CANDIDATES',
        candidates,
    })
}

export const FETCH_PARTIES = () => async dispatch => {
    const state = store.getState()

    const parties = await fetch(`/api/parties`)
        .then(resp => resp.json())

    await dispatch({
        type                : 'FETCH_PARTIES',
        parties,
    })
}

export const FETCH_QUESTIONS = () => async dispatch => {
    const state = store.getState()

    const questions = await fetch(`/api/constituency/${state.root.constituency}/questions`)
        .then(resp => resp.json())

    await dispatch({
        type                : 'FETCH_QUESTIONS',
        questions,
    })

    await dispatch(NEXT_QUESTION())
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
    await localForage.setItem('answers', state.root.answers)
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

export const FETCH_OPTIONS = () => async dispatch => {
    const options = await fetch('/api/options')
        .then(resp => resp.json())

    dispatch({
        type            : 'FETCH_OPTIONS',
        options,
    })
}
