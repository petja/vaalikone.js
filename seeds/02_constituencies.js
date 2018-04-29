exports.seed = async (knex, Promise) => {
    const constituencies  = [
        // Ankkalinnan pormestarivaalit
        // id   name                                slug                election
        [1,     'Itä-Ankkalinnan vaalipiiri',       'east-duckburg',    1],
        [2,     'Länsi-Ankkalinnan vaalipiiri',     'west-duckburg',    1],

        // Eduskuntavaalit
        // id   name                                slug                election
        [3,     'Helsingin vaalipiiri',             'helsinki',         2],
        [4,     'Uudenmaan vaalipiiri',             'uusimaa',          2],
        [5,     'Varsinais-Suomen vaalipiiri',      'varsinais-suomi',  2],
        [6,     'Satakunnan vaalipiiri',            'satakunta',        2],
        [7,     'Ahvenanmaan vaalipiiri',           'ahvenanmaa',       2],
        [8,     'Hämeen vaalipiiri',                'hame',             2],
        [9,     'Pirkanmaan vaalipiiri',            'pirkanmaa',        2],
        [10,    'Kaakkois-Suomen vaalipiiri',       'kaakkois-suomi',   2],
        [11,    'Savo-Karjalan vaalipiiri',         'savo-karjala',     2],
        [12,    'Vaasan vaalipiiri',                'vaasa',            2],
        [13,    'Keski-Suomen vaalipiiri',          'keski-suomi',      2],
        [14,    'Oulun vaalipiiri',                 'oulu',             2],
        [15,    'Lapin vaalipiiri',                 'lappi',            2],
    ]

    // Insert seed entries
    await knex('constituencies').insert(
        constituencies.map(constituency => ({
            id                      : constituency[0],
            name                    : constituency[1],
            slug                    : constituency[2],
            election                : constituency[3],
        }))
    )
}
