exports.up = async (knex, Promise) => {

    await knex.schema.createTable('elections', (table) => {
        table.increments('id').primary()
        table.string('name')
    })

    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('email')
        table.string('password') // bcrypt with 12 rounds
        table.timestamp('registered_at').defaultTo(knex.fn.now())
        table.boolean('is_admin')
    })

    await knex.schema.table('candidates', (table) => {
        table.integer('user').unsigned().references('users.id')
        table.integer('election').unsigned().references('elections.id')
    })

    return Promise.resolve()
  
}

exports.down = function(knex, Promise) {
  
}
