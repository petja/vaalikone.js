import { connect } from 'react-redux'
import { SET_ANSWER_AND_UPDATE_SCORES, REMOVE_ANSWER, NEXT_QUESTION } from '../actions'
import Question from '../components/Question.jsx'

const mapStateToProps = (state, ownProps) => {
    const question = state.root.questions[state.root.activeQuestion]

    if(!question) return {}

    return {
        ...question,

        questionId          : state.root.activeQuestion,

        options             : Object.values(question.options).map(optionId => (
            {id: optionId, text: state.root.options[optionId]}
        )),

        currentAnswer       : state.root.answers[state.activeQuestion],

        userRole            : (state.root.auth ? state.root.auth.user.role : null),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer                : (questionId, answerId) => dispatch(SET_ANSWER_AND_UPDATE_SCORES(questionId, answerId)),
    onNextQuestion          : () => {
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        dispatch(NEXT_QUESTION())
    },
    onRemoveAnswer          : (questionId) => dispatch(REMOVE_ANSWER(questionId)),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)

export default container
