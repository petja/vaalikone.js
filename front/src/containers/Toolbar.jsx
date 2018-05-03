import { connect } from 'react-redux'
import { LOGOUT } from '../actions'
import { TOGGLE_AUTH_DIALOG } from '../actions/roles'
import Toolbar from '../components/Toolbar.jsx'

const mapStateToProps = (state, ownProps) => ({
    auth: state.root.auth,
    election: state.root.election,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogout: () => dispatch(LOGOUT()),
    openAuthDialog: () => dispatch(TOGGLE_AUTH_DIALOG(true)),
})

const container = connect(mapStateToProps, mapDispatchToProps)(Toolbar)

export default container
