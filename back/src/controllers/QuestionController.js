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

export const Edit = async (req, res, next) => {
    const { id } = req.params
    const { content, options, constituencies } = req.body

    await Question.edit(id, content, options, constituencies)

    res.status(201).end()
}

export const Create = async (req, res, next) => {
    const id = await Question.create()

    res.status(201).json({
        id,
    })
}
