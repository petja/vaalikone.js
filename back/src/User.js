import knex from './db'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'VAALIKONE_NOT_FOR_PRODUCTION'

export async function loginWithEmailPassword(email: String, password: String): Promise {
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

    // Create new JWT
    const token = jwt.sign({
        sub             : userRow.id,
        email,
    }, JWT_SECRET, {
        expiresIn       : '1h',
    })

    return {
        uid             : userRow.id,
        token,
    }
}
