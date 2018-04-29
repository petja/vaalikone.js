import {connect} from 'react-redux'
import {LOGOUT, ELECTION_INFO} from '../actions'
import Toolbar from '../components/Toolbar.jsx'

const mapStateToProps = (state, ownProps) => ({
    auth                    : state.root.auth,
    election                : state.root.election,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getElectionInfo         : (slug) => dispatch(ELECTION_INFO(slug)),
    onLogout                : () => dispatch(LOGOUT()),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar)

export default container
