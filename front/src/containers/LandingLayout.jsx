import {connect} from 'react-redux'
//import {ELECTION_INFO} from '../actions'
import LandingLayout from '../components/LandingLayout.jsx'

const mapStateToProps = (state, ownProps) => ({
    election                : state.root.election,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    //
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingLayout)

export default container
