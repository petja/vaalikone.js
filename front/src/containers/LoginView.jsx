import {connect} from 'react-redux'
import {INIT_SESSION, LOGOUT} from '../actions'
import LoginView from '../components/LoginView.jsx'

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        loggedIn            : state.auth,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogin             : (authCode) => dispatch(INIT_SESSION(authCode)),
    onLogout            : () => dispatch(LOGOUT()),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView)

export default container
