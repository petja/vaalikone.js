exports.seed = async (knex, Promise) => {
    const promises = [[1, 2], [2, 2]].map(async row => {
        return await knex('election_editors').insert({
            election: row[0],
            user: row[1],
        })
    })

    return await Promise.all(promises)
}
