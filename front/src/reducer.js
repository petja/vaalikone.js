export default ((state = initialState, action) => {
    const output = {...state}

    switch(action.type) {
        case 'SET_ANSWER':
            output.answers[action.questionId] = action.answerId

            return output

            break

        case 'SCOREBOARD_UPDATE_OK':
            const maxScore = Object.values(action.scoreboard).reduce((a, b) => Math.max(a, b), 0)

            output.scoreboard = Object.keys(output.candidates).reduce((acc, candidateId) => {
                acc[candidateId] = (1 - action.scoreboard[candidateId] / maxScore)
                return acc
            }, {})

            return output

            break

        case 'RECEIVED_QUESTIONS_RESPONSE':
            output.questions = action.questions
            output.options = action.options
            output.candidates = action.candidates
            output.parties = action.parties

            return output

            break

        case 'NEXT_QUESTION':
            output.activeQuestionIndex++
            output.activeQuestion = Object.keys(state.questions)[output.activeQuestionIndex]

            return output

            break

        case 'REMOVE_ANSWER':
            delete output.answers[action.questionId]

            return output

            break

        case 'GO_QUESTION_ID':
            output.activeQuestion = action.questionId

            return output

            break

        default:
            return state
    }
})
