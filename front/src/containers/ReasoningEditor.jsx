import {connect} from 'react-redux'
import {SET_REASONING} from '../actions'
import ReasoningEditor from '../components/ReasoningEditor.jsx'

const mapStateToProps = (state, ownProps) => ({
    questionId              : state.root.activeQuestion,
    text                    : state.root.reasonings[state.activeQuestion] || '',
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange                : (questionId, text) => dispatch(SET_REASONING(questionId, text)),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReasoningEditor)

export default container
