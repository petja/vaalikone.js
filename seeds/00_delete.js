exports.seed = async (knex, Promise) => {
    await knex('candidate_answers').del()
    await knex('question_options').del()
    await knex('questions').del()
    await knex('options').del()
    await knex('candidates').del()
    await knex('parties').del()
    await knex('constituencies').del()
    await knex('elections').del()
}
