exports.seed = async (knex, Promise) => {
    // Deletes ALL existing entries
    await knex('options').del()

    // Inserts seed entries
    await knex('options').insert([
        {id: 1      , text: 'Täysin eri mieltä',            value: -2},
        {id: 2      , text: 'Jokseenkin eri mieltä',        value: -1},
        {id: 3      , text: 'Jokseenkin samaa mieltä',      value: 1},
        {id: 4      , text: 'Täysin samaa mieltä',          value: 2},
    ])
}
