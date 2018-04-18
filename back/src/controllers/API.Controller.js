import knex from '../db'

import * as User from '../User'
import * as Candidate from '../Candidate'
import * as Question from '../Question'

export async function GetOptions(req, res, next) {
    const options = await Question.getOptions()
    res.json(options)
}

export async function GetQuestions(req, res, next) {
    const questions = await Question.getAll()
    res.json(questions)
}

export async function GetCandidates(req, res, next) {
    const candidates = await Candidate.getAll()
    res.json(candidates)
}

export async function GetParties(req, res, next) {
    const query = await knex
        .select('*')
        .from('parties')

    res.json(query)
}

export async function GetResults(req, res, next) {
    const responses = await Candidate.scoreCandidates(req.body)
    res.json(responses)
}

export async function Login(req, res, next) {
    const jwt = await User.loginWithEmailPassword(req.body.email, req.body.password)

    res.json(jwt)
}
