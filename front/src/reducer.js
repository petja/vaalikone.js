export default ((state = initialState, action) => {
    const output = {...state}

    switch(action.type) {
        case 'SET_ANSWER':
            output.answers[action.questionId] = action.answerId

            return output

            break

        case 'SET_REASONING':
            output.reasonings[action.questionId] = action.text

            return output

            break

        case 'SCOREBOARD_UPDATE':
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

        case 'INIT_SESSION':
            output.auth = {
                token           : action.token,
                expires         : action.decoded.exp * 1000,
                user            : {
                    ...action.decoded,
                },
            }

            return output

            break

        case 'NEXT_QUESTION':
            const all = Object.keys(output.questions)
            const answered = Object.keys(output.answers)
            const unanswered = all.filter(question => !answered.includes(question))

            if (
                !output.activeQuestion ||
                !output.answers[output.activeQuestion]
            ) {
                output.activeQuestionIndex++
            }

            console.log(output.activeQuestionIndex % unanswered.length)
            output.activeQuestion = unanswered[output.activeQuestionIndex % unanswered.length]

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

        case 'REHYDRATE':
            return {
                ...state,
                ...action.payload,
            }

            break

        case 'LOGOUT':
            output.auth = null
            output.answers = {}
            output.activeQuestion = null
            output.activeQuestionIndex = -1
            output.reasonings = {}

            return output

            break

        default:
            return state
    }
})
