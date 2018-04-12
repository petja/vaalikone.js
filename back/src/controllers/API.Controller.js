import knex from '../db'

import * as Candidate from '../Candidate'

export async function GetCandidates(req, res, next) {
    const query = await knex
        .select('id', 'firstname', 'lastname', 'party', 'description')
        .from('candidates')

    res.json(query)
}

export async function GetParties(req, res, next) {
    const query = await knex
        .select('*')
        .from('parties')

    res.json(query)
}

export async function GetResults(req, res, next) {

    const responses = await Candidate.scoreCandidates(JSON.parse(req.query.payload))
    res.json(responses)

    //const candidates: number[] = Candidate.getAll()
    //const responses: {[number]: Object[]} = Candidate.getAllResponses()

    // Must return an object with questionId as a key
    // Each property has array in in, describing all responses to specific question
    
    // Finding best candidate
    
}
