import { connect } from 'react-redux'
//import { setQuestionAnswer, getNextQuestion } from '../actions'
import CandidateList from '../components/CandidateList.jsx'

const mapStateToProps = (state, ownProps) => {
    return {
        candidates              : state.root.candidates,
        scoreboard              : state.root.scoreboard,
        parties                 : state.root.parties,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    //
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(CandidateList)

export default container
