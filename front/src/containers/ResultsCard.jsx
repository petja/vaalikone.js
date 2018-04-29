import { connect } from 'react-redux'
//import { SET_ANSWER_AND_UPDATE_SCORES, getNextQuestion } from '../actions'
import ResultsCard from '../components/ResultsCard.jsx'

const mapStateToProps = (state, ownProps) => ({
    candidates              : state.root.candidates,
    scoreboard              : state.root.scoreboard,
    parties                 : state.root.parties,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    //
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsCard)

export default container
