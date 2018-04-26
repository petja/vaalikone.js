exports.up = async (knex, Promise) => {

    await knex.schema.table('candidates', (table) => {
        //table.dropForeign('election')
        //table.dropColumn('election')
        table.integer('election_constituency').unsigned().references('constituencies.id')
    })

    return Promise.resolve()
  
}

exports.down = async function(knex, Promise) {

    await knex.schema.table('candidates', (table) => {
        table.dropForeign('election_constituency')
        table.dropColumn('election_constituency')
    })

    return Promise.resolve()

}
