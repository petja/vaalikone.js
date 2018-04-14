import { connect } from 'react-redux'
//import { SET_ANSWER_AND_UPDATE_SCORES, getNextQuestion } from '../actions'
import ResultsCard from '../components/ResultsCard.jsx'

const mapStateToProps = (state, ownProps) => {
    return {
        candidates              : state.candidates,
        scoreboard              : state.scoreboard,
        parties                 : state.parties,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    //
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsCard)

export default container
