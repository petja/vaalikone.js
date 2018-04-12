const initialState = {
    activeQuestion      : 'foobar',
    answers             : {},
}

export default ((state = initialState, action) => {
    switch(action.type) {
        case 'SET_QUESTION_ANSWER':
            const output = {...state}

            output.answers[action.questionId] = action.answerId

            return output

            break
        default:
            return state
    }
})
