exports.seed = async (knex, Promise) => {
    // Deletes ALL existing entries
    await knex('parties').del()

    const parties = [
        // id   name
        [1,     'Perusankkalinnalaiset'],
        [2,     'Ankkalinnan ruotsalaispuolue'],
        [3,     'Ankkalinnan keskusta'],
        [4,     'Ankkalinnan kommunistinen työväenpuolue'],
        [5,     'Ankkalinnan vihreät'],
        [6,     'Ankkalinnan kokoomus'],
        [7,     'Ankkalinnan piraatit'],
    ]

    // Inserts seed entries
    await knex('parties').insert(
        parties.map(party => ({
            id                      : party[0],
            name                    : party[1],
        }))
    )
}
