import {connect} from 'react-redux'
import {FETCH_CANDIDATES} from '../actions'
import CandidateList from '../components/CandidateList.jsx'

const mapStateToProps = (state, ownProps) => ({
    candidates              : state.root.candidates,
    scoreboard              : state.root.scoreboard,
    parties                 : state.root.parties,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchCandidates         : () => dispatch(FETCH_CANDIDATES()),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(CandidateList)

export default container
