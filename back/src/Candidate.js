import knex from './db'

export async function getScoreboard() {
    const candidates = await knex
        .select('id')
        .from('candidates')

    /* Create object where key is ID of candidate
     * and value is zero, this way:
     *
     * {
     *   "candidateId": 0
     * }
     */
    return candidates.map(candidate => {
        return candidate.id
    }).reduce((acc, candidateId) => {
        acc[candidateId] = 0
    }, {})
}

export function compareAnswers(a, b) {
    return Math.max(a, b) - Math.min(a, b)
}

export async function getAllByConstituency(constituencyId: Number) {
    const candidates = await knex
        .select('*')
        .from('candidates')
        .where({
            election_constituency   : constituencyId,
        })
    
    return candidates.reduce((acc, candidate) => {
        acc[candidate.id] = {
            name            : `${candidate.firstname} ${candidate.lastname}`,
            party           : candidate.party,
            description     : candidate.description,
            picture         : candidate.picture,
        }

        return acc
    }, {})
}

// Return object containing questionId as a key and
// array containing candidate responses as a value
export async function getResponsesByQuestion(): object {
    const responses = await knex
        .select(
            'options.value AS value',
            'candidate_answers.question AS question',
            'candidate_answers.candidate'
        )
        .from('candidate_answers')
        .innerJoin('options', 'candidate_answers.option', 'options.id')

    return responses.reduce((acc, response) => {
        const {candidate, question, value} = response

        // If question doesn't yet have entry, create it
        if(!acc[question]) acc[question] = []

        // Inner object
        acc[question].push({
            candidate,
            value,
        })

        return acc
    }, {})
}

export async function scoreCandidates(userResponses: object): object {
    const questionResponses = await getResponsesByQuestion()

    // Loop thru every question user has responsed to ...
    return Object.keys(userResponses).map(questionId => {

        const userResponse: number = userResponses[questionId]

        // If user is trying to give answer to question which
        // doesn't exists, handle this case properly
        if(!questionResponses[questionId]) return {}

        // Calculate difference between user and candidate response
        // and put the result to the object representing difference
        // between all candidates and the user
        return questionResponses[questionId].reduce((acc, candidateResponse) => {
            const diff: number = compareAnswers(candidateResponse.value, userResponse)

            acc[candidateResponse.candidate] = diff

            return acc
        }, {})

    }).reduce((acc, questionDiff) => {

        // Sum all response differences grouped by candidate
        Object.keys(questionDiff).forEach(candidateId => {

            // If candidate doesn't yet have entry, create it
            if(!acc[candidateId]) acc[candidateId] = 0

            acc[candidateId] += questionDiff[candidateId]

        })

        return acc

    }, {})
}

export async function getById(candidateId: Number): Promise<object> {
    return await knex
        .select('*')
        .from('candidates')
        .where({
            id          : candidateId,
        })
        .first()
}

export async function getByUID(userId: Number): Promise<object> {
    return await knex
        .select('*')
        .from('candidates')
        .where({
            user       : userId,
        })
        .first()
}

export async function getAnswers(candidateId: Number): object[] {
    return await knex
        .select('question', 'option', 'reasoning')
        .from('candidate_answers')
        .where({
            candidate           : candidateId,
        })
}

export async function getAnswer(candidateId: Number, questionId: Number): object {
    const answer = await knex
        .select('option', 'reasoning')
        .from('candidate_answers')
        .where({
            question        : questionId,
            candidate       : candidateId,
        })
        .first()

    return answer
}

export async function getParties() {
    const parties = await knex
        .select('id', 'name')
        .from('parties')

    return parties.reduce((acc, party) => {
        acc[party.id] = party.name
        return acc
    }, {})
}
