const initialState = {
    activeQuestion      : 'foobar',
    answers             : {},
    questions           : [],
    options             : [],
}

export default ((state = initialState, action) => {
    const output = {...state}

    switch(action.type) {
        case 'SET_QUESTION_ANSWER':
            output.answers[action.questionId] = action.answerId

            return output

            break

        case 'RECEIVED_QUESTIONS_RESPONSE':
            output.questions = action.questions
            output.options = action.options

            return output

            break

        case 'NEXT_QUESTION':
            const nextId = Object.keys(state.questions)[0]

            output.question = {
                id              : nextId,
                ...state.questions[nextId],
            }

            return output

            break

        default:
            return state
    }
})
