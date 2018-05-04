import { connect } from 'react-redux'
import { FETCH_ELECTION_INFO } from '../actions'
import LandingLayout from '../components/LandingLayout.jsx'

const mapStateToProps = (state, ownProps) => ({
    election: state.root.election,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchElectionInfo: (election, constituency) =>
        dispatch(FETCH_ELECTION_INFO(election, constituency)),
})

const container = connect(mapStateToProps, mapDispatchToProps)(LandingLayout)

export default container
