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

export const GetById = async (req, res, next) => {
    const candidateId = req.params.candidate

    const answers = await Candidate.getById(candidateId)

    res.json(answers)
}

export const GetParties = async (req, res, next) => {
    const parties = await Candidate.getParties()

    res.json(parties)
}

export const CheckTokenPermission = (req, res, next) => {
    const candidate = req.params.candidate
    const { candidates } = req.user

    if (candidates.includes(candidate)) return next()

    res.status(403).json({
        error: `Modifying or reading information of the requested candidate isn't permitted with the supplied JWT token`,
    })
}
