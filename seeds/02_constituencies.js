exports.seed = async (knex, Promise) => {
    // Deletes ALL existing entries
    await knex('constituencies').del()

    // Inserts seed entries
    await knex('constituencies').insert([
        // Ankkalinnan pormestarivaalit
        {id: 1      , name: 'Itä-Ankkalinna'         , election: 1       , slug: 'east-duckburg'},
        {id: 2      , name: 'Länsi-Ankkalinna'       , election: 1       , slug: 'west-duckburg'},

        // Eduskuntavaalit
        {id: 3      , name: 'Helsinki'               , election: 2       , slug: 'helsinki'},
        {id: 4      , name: 'Uusimaa'                , election: 2       , slug: 'uusimaa'},
        {id: 5      , name: 'Varsinais-Suomi'        , election: 2       , slug: 'varsinais-suomi'},
        {id: 6      , name: 'Satakunta'              , election: 2       , slug: 'satakunta'},
        {id: 7      , name: 'Ahvenanmaa'             , election: 2       , slug: 'ahvenanmaa'},
        {id: 8      , name: 'Häme'                   , election: 2       , slug: 'hame'},
        {id: 9      , name: 'Pirkanmaa'              , election: 2       , slug: 'pirkanmaa'},
        {id: 10     , name: 'Kaakkois-Suomi'         , election: 2       , slug: 'kaakkois-suomi'},
        {id: 11     , name: 'Savo-Karjala'           , election: 2       , slug: 'savo-karjala'},
        {id: 12     , name: 'Vaasa'                  , election: 2       , slug: 'vaasa'},
        {id: 13     , name: 'Keski-Suomi'            , election: 2       , slug: 'keski-suomi'},
        {id: 14     , name: 'Oulu'                   , election: 2       , slug: 'oulu'},
        {id: 15     , name: 'Lappi'                  , election: 2       , slug: 'lappi'},
    ])
}
