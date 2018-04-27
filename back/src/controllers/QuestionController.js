import knex from '../db'

import * as Question from '../Question'

export const GetAnswers = async (req, res, next) => {
    throw new Error('Not implemented')
}

export const GetByConstituency = async (req, res, next) => {
    const constituencyId = req.params.constituency

    const questions = await Question.getByConstituency(constituencyId)

    res.json(questions)
}
