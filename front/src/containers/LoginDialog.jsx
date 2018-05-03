import { connect } from 'react-redux'
import { FETCH_ROLES, SET_ROLE } from '../actions/roles.js'
import LoginDialog from '../components/LoginDialog.jsx'

const mapStateToProps = (state, ownProps) => ({
    auth: state.root.auth,
    isOpen: !!state.root.auth && state.roles.currentRole === null,
    fetched: state.roles.fetched,
    roles: state.roles.list,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchRoles: () => dispatch(FETCH_ROLES()),
    setRole: roleIndex => dispatch(SET_ROLE(roleIndex)),
    //onLogin             : (authCode) => dispatch(INIT_SESSION(authCode)),
    //onLogout            : () => dispatch(LOGOUT()),
})

const container = connect(mapStateToProps, mapDispatchToProps)(LoginDialog)

export default container
