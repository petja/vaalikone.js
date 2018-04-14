require("regenerator-runtime/runtime")
import store from './store'

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

export function getNextQuestion() {
    return {
        type                : 'NEXT_QUESTION',
    }
}

export const SET_ANSWER = (questionId, answerId) => ({
    type                : 'SET_ANSWER',
    questionId,
    answerId,
})

export const SET_ANSWER_AND_UPDATE_SCORES = (questionId, answerId) => async dispatch => {
    await dispatch(SET_ANSWER(questionId, answerId))
    await dispatch(SCOREBOARD_UPDATE())
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

/*export function scoreCandidates() {
    return {
        type                : 'API',
        payload             : {
            url                 : '/results',
            PENDING             : 'SCORE_CANDIDATES_PENDING',
            SUCCESS             : 'SCORE_CANDIDATES_SUCCESS',
            FAILURE             : 'SCORE_CANDIDATES_FAILURE',
        },
    }
}*/

window.appActions = exports
