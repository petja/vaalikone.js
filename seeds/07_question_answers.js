exports.seed = async (knex, Promise) => {
    const answers = [
        // candidate    question    option
        [1,             1,          3],
        [2,             1,          2],
        [11,            1,          1],
        [1,             3,          4],
        [11,            5,          1],
        [11,            2,          4],
        [1,             2,          1],
        [6,             1,          4],
    ]

    // Inserts seed entries
    await knex('candidate_answers').insert(
        answers.map(answer => ({
            candidate               : answer[0],
            question                : answer[1],
            option                  : answer[2],
        }))
    )
}
