exports.seed = async (knex, Promise) => {
    // Deletes ALL existing entries
    await knex('questions').del()

    // Inserts seed entries
    const questions = [
        [1,     'Valtion tulee sosialisoida Roope Ankan rahasäiliö',                [1, 2, 3, 4]],
        [2,     'Ankkalinna ja Hanhivaara tulee liittää toisiinsa',                 [1, 2, 3, 4]],
        [3,     'Hanhivaaran rajalle tulee rakentaa muuri',                         [1, 2, 3, 4]],
        [4,     'Ankkalinnassa tulee ottaa käyttöön progressiivinen verotus',       [1, 2, 3, 4]],
        [5,     'Ankkalinnan poliisilla on liian suuri toimivalta',                 [1, 2, 3, 4]],
    ]

    const questionPromises = questions.map(async question => {
        return Promise.all([
            await addQuestion(knex, question[0], question[1]),
            await addOptions(knex, question[0], question[2])
        ])
    })

    return await Promise.all(questionPromises)
}

async function addQuestion(knex, questionId, text) {
    return await knex('questions').insert({
        id              : questionId,
        content         : text,
    })
}

async function addOptions(knex, questionId, options) {
    return await knex('question_options').insert(
        options.map(optionId => ({
            question        : questionId,
            option          : optionId,
        }))
    )
}
