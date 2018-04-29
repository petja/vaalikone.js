import knex from '../db'

import * as User from '../User'
import * as Candidate from '../Candidate'
import * as Question from '../Question'

export const GetByConstituency = async (req, res, next) => {
    const constituencyId = req.params.constituency

    const candidates = await Candidate.getAllByConstituency(constituencyId)

    res.json(candidates)
}

export const GetAnswers = async (req, res, next) => {
    const candidateId = req.user.sub

    const answers = await Candidate.getAnswers(candidateId)

    res.json(answers)
}

export const GetParties = async (req, res, next) => {
    const parties = await Candidate.getParties()

    res.json(parties)
}
