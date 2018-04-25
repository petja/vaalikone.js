exports.up = async (knex, Promise) => {

    await knex.schema.table('questions', (table) => {
        table.integer('election').unsigned().references('elections.id')
    })

    await knex.schema.table('elections', (table) => {
        table.string('slug').unique()
    })

    await knex.schema.createTable('constituencies', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('slug').unique()
        table.integer('election').unsigned().references('elections.id')
    })

    return Promise.resolve()
  
}

exports.down = function(knex, Promise) {
  
}
