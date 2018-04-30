const bcrypt = require('bcrypt')

exports.seed = async (knex, Promise) => {
    const userPromises = [
        [1,      'donald@hostname.local',        'helloworld'],
        [2,      'scrooge@hostname.local',       'helloworld'],
        [3,      'hello@petja.me',               'admin'],
    ].map(async user => {
        const password = await bcrypt.hash(user[2], 12)

        return await knex('users').insert({
            id              : user[0],
            email           : user[1],
            password,
        })
    })

    return await Promise.all(userPromises)
}
