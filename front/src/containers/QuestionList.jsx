import { connect } from 'react-redux'
import { FETCH_QUESTIONS } from '../actions.js'
import { CREATE_QUESTION } from '../actions/question.js'
import QuestionList from '../components/QuestionList.jsx'

const mapStateToProps = (state, ownProps) => ({
    userRole: state.roles.list[state.roles.currentRole] || {},
    questions: state.root.questions,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createQuestion: () => dispatch(CREATE_QUESTION),
    fetchQuestions: () => dispatch(FETCH_QUESTIONS()),
})

const container = connect(mapStateToProps, mapDispatchToProps)(QuestionList)

export default container
