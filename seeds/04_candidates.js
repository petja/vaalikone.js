exports.seed = async (knex, Promise) => {
    // Deletes ALL existing entries
    await knex('candidates').del()

    const candidates = [
        // id   firstname           lastname        party   number  election_constituency
        [1,     'Aku',              'Ankka',        1,      313,    1],
        [2,     'Hannu',            'Hanhi',        1,      2,      2],
        [3,     'Hansu',            'Hanhi',        1,      3,      1],
        [4,     'Heluna',           'Ammu',         1,      4,      2],
        [5,     'Hessu',            'Hopo',         1,      5,      1],
        [6,     'Iines',            'Ankka',        1,      6,      2],
        [7,     'Sisu',             'Komisario',    1,      7,      1],
        [8,     'Mikki',            'Hiiri',        1,      8,      2],
        [9,     'Milla',            'Magia',        1,      9,      1],
        [10,    'Minni',            'Hiiri',        1,      10,     2],
        [11,    'Roope',            'Ankka',        1,      11,     1],
    ]

    // Inserts seed entries
    await knex('candidates').insert(
        candidates.map(candidate => ({
            id                      : candidate[0],
            firstname               : candidate[1],
            lastname                : candidate[2],
            party                   : candidate[3],
            number                  : candidate[4],
            election_constituency   : candidate[5],
        }))
    )
}
