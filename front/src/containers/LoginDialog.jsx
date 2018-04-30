import {connect} from 'react-redux'
//import {INIT_SESSION, LOGOUT} from '../actions'
import LoginDialog from '../components/LoginDialog.jsx'

const mapStateToProps = (state, ownProps) => ({
    auth                : state.root.auth,
    isOpen              : state.root.auth,
    roles               : state.root.auth ? state.root.auth.user.candidate : [],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    //onLogin             : (authCode) => dispatch(INIT_SESSION(authCode)),
    //onLogout            : () => dispatch(LOGOUT()),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginDialog)

export default container
