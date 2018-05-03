exports.seed = async (knex, Promise) => {
    const promises = [
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],

        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
    ].map(async row => {
        return await knex('question_constituencies').insert({
            question: row[0],
            constituency: row[1],
        })
    })

    return await Promise.all(promises)
}
