import React from 'react'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Dialog, {DialogTitle} from 'material-ui/Dialog'
import List from 'material-ui/List'
import Slide from 'material-ui/transitions/Slide'

import RoleListItem from './RoleListItem.jsx'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const LoginDialog = ({isOpen, roles, currentRole, classes, logout, changeRole, onClose}) => (
    <Dialog
        open={isOpen}
        transition={Transition}
        onClose={onClose}
    >
        <DialogTitle>Valitse rooli</DialogTitle>
        <div>
            <List>
                {roles.map(role => RoleListItem({role, changeRole}))}
            </List>
        </div>
    </Dialog>
)

export default LoginDialog
