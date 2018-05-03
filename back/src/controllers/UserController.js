import * as User from '../User'
import * as Candidate from '../Candidate'
import * as Question from '../Question'

export const GetById = async (req, res, next) => {
    const candidateId = req.params.candidate

    const answers = await Candidate.getById(candidateId)

    res.json(answers)
}

export const GetRoles = async (req, res, next) => {
    const userId = req.user.sub

    const roles = await User.getFullRoles(userId)

    res.json(roles)
}
