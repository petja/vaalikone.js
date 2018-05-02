exports.up = async (knex, Promise) => {
    await knex.schema.createTable('question_constituencies', table => {
        table
            .integer('question')
            .unsigned()
            .references('questions.id')
        table
            .integer('constituency')
            .unsigned()
            .references('constituencies.id')

        table.primary(['question', 'constituency'])
    })

    return Promise.resolve()
}

exports.down = async function(knex, Promise) {
    await knex.schema.dropTable('question_constituencies')

    return Promise.resolve()
}
