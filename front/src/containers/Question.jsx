import { connect } from 'react-redux'
import { setQuestionAnswer } from '../actions'
import Question from '../components/Question.jsx'

const mapStateToProps = (state, ownProps) => ({
    currentAnswer           : state.answers[state.activeQuestion],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer                : (questionId, answerId) => dispatch(setQuestionAnswer(questionId, answerId)),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)

export default container
