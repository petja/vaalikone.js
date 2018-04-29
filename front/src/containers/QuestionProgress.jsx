import { connect } from 'react-redux'
import { GO_QUESTION_ID } from '../actions'
import QuestionProgress from '../components/QuestionProgress.jsx'

const mapStateToProps = (state, ownProps) => ({
    questions               : Object.keys(state.root.questions),
    completed               : Object.keys(state.root.answers),
    activeQuestion          : state.root.activeQuestion,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeQuestion        : (questionId) => dispatch(GO_QUESTION_ID(questionId))
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionProgress)

export default container
