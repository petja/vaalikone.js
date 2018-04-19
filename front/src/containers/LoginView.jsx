import {connect} from 'react-redux'
import {LOGIN} from '../actions'
import LoginView from '../components/LoginView.jsx'

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        //invalidLogin        : state.login.invalidLogin,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogin             : (email, password) => dispatch(LOGIN(email, password)),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView)

export default container
