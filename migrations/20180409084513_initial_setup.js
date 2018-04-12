exports.up = async (knex, Promise) => {

    await knex.schema.createTable('parties', (table) => {
        table.increments('id').primary()
        table.string('name', 20)
    })

    await knex.schema.createTable('candidates', (table) => {
        table.increments('id').primary()
        table.string('firstname', 20)
        table.string('lastname', 20)
        table.integer('party').unsigned().references('parties.id')
        table.text('description')
    })

    await knex.schema.createTable('questions', (table) => {
        table.increments('id').primary()
        table.text('content')
    })

    await knex.schema.createTable('options', (table) => {
        table.increments('id').primary()
        table.string('text', 50)
        table.integer('value')
    })

    await knex.schema.createTable('question_options', (table) => {
        table.integer('question').unsigned().references('questions.id')
        table.integer('option').unsigned().references('options.id')

        table.primary(['question', 'option'])
    })

    await knex.schema.createTable('candidate_answers', (table) => {
        table.integer('candidate').unsigned().references('candidates.id')
        table.integer('question').unsigned().references('questions.id')
        table.integer('option').unsigned().references('options.id')
        table.text('reasoning')

        table.primary(['candidate', 'question'])
    })

    return Promise.resolve()
  
}

exports.down = function(knex, Promise) {
  
}
