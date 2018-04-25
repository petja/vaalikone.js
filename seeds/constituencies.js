exports.seed = async (knex, Promise) => {
    // Deletes ALL existing entries
    await knex('constituencies').del()

    // Inserts seed entries
    await knex('constituencies').insert([
        {name: 'Lappi'              , election: 1,      slug: 'lappi'},
        {name: 'Pohjois-Pohjanmaa'  , election: 1,      slug: 'pohjois-pohjanmaa'},
        {name: 'Kainuu'             , election: 1,      slug: 'kainuu'},
        {name: 'Pohjois-Savo'       , election: 1,      slug: 'pohjois-savo'},
        {name: 'Pohjois-Karjala'    , election: 1,      slug: 'pohjois-karjala'},
        {name: 'Keski-Pohjanmaa'    , election: 1,      slug: 'keski-pohjanmaa'},
        {name: 'Pohjanmaa'          , election: 1,      slug: 'pohjanmaa'},
        {name: 'Keski-Suomi'        , election: 1,      slug: 'keski-suomi'},
        {name: 'Etelä-Karjala'      , election: 1,      slug: 'etela-karjala'},
        {name: 'Etelä-Pohjanmaa'    , election: 1,      slug: 'etela-pohjanmaa'},
        {name: 'Pirkanmaa'          , election: 1,      slug: 'pirkanmaa'},
        {name: 'Satakunta'          , election: 1,      slug: 'satakunta'},
        {name: 'Etelä-Savo'         , election: 1,      slug: 'etela-savo'},
        {name: 'Kanta-Häme'         , election: 1,      slug: 'kanta-hame'},
        {name: 'Päijät-Häme'        , election: 1,      slug: 'paijat-hame'},
        {name: 'Kymenlaakso'        , election: 1,      slug: 'kymenlaakso'},
        {name: 'Varsinais-Suomi'    , election: 1,      slug: 'varsinais-suomi'},
        {name: 'Uusimaa'            , election: 1,      slug: 'uusimaa'},
    ])
}
