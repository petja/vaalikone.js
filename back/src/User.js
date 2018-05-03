import knex from './db'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'VAALIKONE_NOT_FOR_PRODUCTION'

export async function loginWithEmailPassword(
    email: String,
    password: String,
    sessionLength: String = '5min'
): Promise {
    // Fetch user from the database
    const userRow = await knex
        .select('id', 'password')
        .from('users')
        .where({
            email,
        })
        .first()

    // Validate password
    const passwordOk = await bcrypt.compare(password, userRow.password)
    if (!passwordOk) throw new Error('Invalid password')

    // Find all candidates of this user
    const roles = await getRoles(userRow.id)

    // Create new JWT
    const token = jwt.sign(
        {
            sub: userRow.id,
            email,
            candidate: roles.map(candidate => candidate.id),

            is_admin: userRow.is_admin,
        },
        JWT_SECRET,
        {
            expiresIn: sessionLength,
        }
    )

    return {
        uid: userRow.id,
        token,
    }
}

export async function getByUID(userId: number): Promise<object> {
    return await knex
        .select('*')
        .from('users')
        .where({
            id: userId,
        })
        .first()
}

export async function getRoles(
    userId: number,
    fields: string[] = ['candidates.id']
): Promise<array> {
    return await knex
        .select(...fields)
        .from('candidates')
        .join('users', 'candidates.user', 'users.id')
        .where({
            user: userId,
        })
}

export function getFullRoles(userId: number) {
    return Promise.all([
        getEditorRoles(userId),
        getCandidateRoles(userId),
    ]).then(roles => [...roles[0], ...roles[1]])
}

export async function getEditorRoles(userId: number) {
    const editorRoles = await knex
        .select('elections.name AS electionName', 'elections.id AS electionId')
        .from('election_editors')
        .join('elections', 'elections.id', 'election_editors.election')
        .where({
            user: userId,
        })

    return editorRoles.map(role => ({
        editor: true,
        election: {
            id: role.electionId,
            name: role.electionName,
        },
    }))
}

export async function getCandidateRoles(userId: number) {
    const candidateRoles = await knex
        .select(
            'candidates.id AS candidateId',
            'candidates.number AS number',
            'constituencies.id AS constituencyId',
            'constituencies.name AS constituencyName',
            'constituencies.slug AS constituencySlug',
            'elections.id AS electionId',
            'elections.name AS electionName',
            'parties.id AS partyId',
            'parties.name AS partyName'
        )
        .from('candidates')
        //.join('users', 'candidates.user', 'users.id')
        .join('parties', 'candidates.party', 'parties.id')
        .join(
            'constituencies',
            'candidates.election_constituency',
            'constituencies.id'
        )
        .join('elections', 'constituencies.election', 'elections.id')
        .where({
            user: userId,
        })

    return candidateRoles.map(role => ({
        candidate: {
            id: role.candidateId,
            number: role.number,
        },
        constituency: {
            id: role.constituencyId,
            name: role.constituencyName,
            slug: role.constituencySlug,
        },
        party: {
            id: role.partyId,
            name: role.partyName,
        },
        election: {
            id: role.electionId,
            name: role.electionName,
        },
    }))
}
