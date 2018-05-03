exports.up = async (knex, Promise) => {
    await knex.schema.createTable('election_editors', table => {
        table
            .integer('election')
            .unsigned()
            .references('elections.id')
        table
            .integer('user')
            .unsigned()
            .references('users.id')

        table.primary(['election', 'user'])
    })

    return Promise.resolve()
}

exports.down = async function(knex, Promise) {
    await knex.schema.dropForeign(['election', 'user'])
    await knex.schema.dropTable('election_editors')

    return Promise.resolve()
}
