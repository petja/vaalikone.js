import knex from './db'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'VAALIKONE_NOT_FOR_PRODUCTION'

export async function loginWithEmailPassword(
    email: String,
    password: String
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
            expiresIn: '5min',
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

export async function getFullRoles(userId: number) {
    return await knex
        .select(
            //'elections.id AS electionId',
            //'constituencies.id AS constituencyId',
            'constituencies.name AS constituency',
            'candidates.id AS candidateId',
            'elections.name AS electionName',
            'candidates.number AS number'
        )
        .from('candidates')
        .join('users', 'candidates.user', 'users.id')
        .join(
            'constituencies',
            'candidates.election_constituency',
            'constituencies.id'
        )
        .join('elections', 'constituencies.election', 'elections.id')
        .where({
            user: userId,
        })
}
