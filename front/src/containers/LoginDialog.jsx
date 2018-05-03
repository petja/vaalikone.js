import { connect } from 'react-redux'
import { TOGGLE_AUTH_DIALOG } from '../actions/roles.js'
import LoginDialog from '../components/LoginDialog.jsx'

const mapStateToProps = (state, ownProps) => ({
    auth: state.root.auth,
    isOpen:
        (!!state.root.auth && state.roles.currentRole === null) ||
        state.roles.dialogOpen,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClose: () => dispatch(TOGGLE_AUTH_DIALOG(false)),
})

const container = connect(mapStateToProps, mapDispatchToProps)(LoginDialog)

export default container
