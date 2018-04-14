exports.up = async (knex, Promise) => {

    await knex.schema.table('candidates', (table) => {
        table.string('picture')
        table.integer('number')
    })

    return Promise.resolve()
  
}

exports.down = function(knex, Promise) {
  
}
