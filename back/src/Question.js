import knex from './db'

export async function getAll(): Promise {
    const questions = await knex
        .select('questions.id', 'questions.content', 'question_options.option')
        .from('questions')
        .join('question_options', 'question_options.question', 'questions.id')

    return questions.reduce((acc, question) => {

        // If question doesn't already exist in the reduced object
        if (!acc[question.id]) {
            acc[question.id] = {
                text                : question.content,
                options             : [],
            }
        }

        acc[question.id].options.push(question.option)

        return acc
    }, {})
}

export async function getOptions(): Promise {
    const options = await knex
        .select('*')
        .from('options')

    return options.reduce((acc, option) => {
        acc[option.id] = option.text

        /*acc[option.id] = {
            text            : option.text,
            value           : option.value,
        }*/

        return acc
    }, {})
}

// Whenever candidate answers the question,
// push the change to the database
export async function setResponse(candidateId: number, questionId: number, optionId: number, reasoning: String): Promise {
    return knex.raw(`
        INSERT INTO \`candidate_answers\`
            (candidate, question, option, reasoning)
        VALUES
            (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            option = ?,
            reasoning = ?
    `, [
        candidateId,
        questionId,
        optionId,
        reasoning,
        optionId,
        reasoning,
    ])
}
