import React from 'react'

import Button from 'material-ui/Button'
import Dialog from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import Typography from 'material-ui/Typography'

import * as Session from '../models/Session'

import RoleList from '../containers/RoleList.jsx'
import LoginView from '../containers/LoginView.jsx'

function Transition(props) {
    return <Slide direction="up" {...props} />
}

const LoginDialog = ({ auth, classes, isOpen, onClose }) => (
    <Dialog open={isOpen} transition={Transition} onClose={onClose}>
        {Session.get() ? <RoleList /> : <LoginView />}
    </Dialog>
)

export default LoginDialog
