import {connect} from 'react-redux'
import {ELECTION_INFO} from '../actions'
import LandingLayout from '../components/LandingLayout.jsx'

const mapStateToProps = (state, ownProps) => ({
    election                : state.election,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getElectionInfo         : (slug) => dispatch(ELECTION_INFO(slug)),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingLayout)

export default container
