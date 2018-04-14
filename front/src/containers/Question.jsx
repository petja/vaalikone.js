import { connect } from 'react-redux'
import { SET_ANSWER_AND_UPDATE_SCORES, getNextQuestion } from '../actions'
import Question from '../components/Question.jsx'

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[state.activeQuestion]
    if(!question) return {}

    return {
        questionId          : state.activeQuestion,
        ...question,
        options             : Object.values(question.options).map(optionId => (
            {id: optionId, text: state.options[optionId]}
        )),
        currentAnswer       : state.answers[state.activeQuestion],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer                : (questionId, answerId) => dispatch(SET_ANSWER_AND_UPDATE_SCORES(questionId, answerId)),
    onStart                 : () => dispatch(getNextQuestion()),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)

export default container
