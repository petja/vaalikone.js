import knex from '../db'

import * as User from '../User'
import * as Candidate from '../Candidate'
import * as Question from '../Question'

// This is required for async/await functions
const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

export const GetOptions = asyncMiddleware(async (req, res, next) => {
    const options = await Question.getOptions()
    res.json(options)
})

export const GetQuestions = asyncMiddleware(async (req, res, next) => {
    const questions = await Question.getAll()
    res.json(questions)
})

export const GetCandidates = asyncMiddleware(async (req, res, next) => {
    const candidates = await Candidate.getAll()
    res.json(candidates)
})

export const GetParties = asyncMiddleware(async (req, res, next) => {
    const query = await knex
        .select('*')
        .from('parties')

    res.json(query)
})

export const GetResults = asyncMiddleware(async (req, res, next) => {
    const responses = await Candidate.scoreCandidates(req.body)
    res.json(responses)
})

export const Login = asyncMiddleware(async (req, res, next) => {
    const jwt = await User.loginWithEmailPassword(req.body.email, req.body.password)

    res.json(jwt)
})

export const GetAnswer = asyncMiddleware(async (req, res, next) => {
    const {questionId} = req.params
    const userId = req.user.sub
    const candidateId = await Candidate.getByUID(userId)

    const answer = await Candidate.getAnswer(candidateId, questionId)

    res.json(answer)
})

export const SetAnswer = asyncMiddleware(async (req, res, next) => {
    res.json({hello: 'world'})
})
