import knex from '../db'

import * as User from '../User'
import * as Candidate from '../Candidate'
import * as Question from '../Question'

export const GetAnswers = async (req, res, next) => {
    const candidateId = req.user.sub

    const answers = await Candidate.getAnswers(candidateId)

    res.json(answers)
}
