import { connect } from 'react-redux'
import { setQuestionAnswer, getNextQuestion } from '../actions'
import Question from '../components/Question.jsx'

const mapStateToProps = (state, ownProps) => {
    if(!state.question) return {}

    return {
        id                      : state.question.id,
        text                    : state.question.text,
        options                 : state.question.options,

        allOptions              : state.options,
        currentAnswer           : state.answers[state.question.id],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer                : (questionId, answerId) => dispatch(setQuestionAnswer(questionId, answerId)),
    onStart                 : () => dispatch(getNextQuestion()),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)

export default container
