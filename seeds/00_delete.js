exports.seed = async (knex, Promise) => {
    await knex('candidate_answers').truncate()
    await knex('question_constituencies').truncate()
    await knex('election_editors').truncate()
    await knex('question_options').truncate()
    await knex('questions').truncate()
    await knex('options').truncate()
    await knex('candidates').truncate()
    await knex('users').truncate()
    await knex('parties').truncate()
    await knex('constituencies').truncate()
    await knex('elections').truncate()
}
