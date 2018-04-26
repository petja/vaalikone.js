exports.seed = async (knex, Promise) => {
    // Deletes ALL existing entries
    await knex('elections').del()

    // Inserts seed entries
    await knex('elections').insert([
        {id: 1      , name: 'Ankkalinnan pormestarivaalit 2018'      , slug: 'ankkalinnan-pormestarivaalit-2018'},
        {id: 2      , name: 'Eduskuntavaalit 2019'                   , slug: 'eduskuntavaalit-2019'},
    ])
}
