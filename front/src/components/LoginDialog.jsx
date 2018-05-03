import React from 'react'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import List from 'material-ui/List'
import Slide from 'material-ui/transitions/Slide'

import RoleListItem from './RoleListItem.jsx'

function Transition(props) {
    return <Slide direction="up" {...props} />
}

const LoginDialog = ({
    auth,
    classes,
    currentRole,
    fetchRoles,
    fetched,
    isOpen,
    logout,
    onClose,
    roles,
    setRole,
}) => {
    if (auth && !fetched) fetchRoles()

    return (
        <Dialog open={isOpen} transition={Transition} onClose={onClose}>
            <DialogTitle>Valitse rooli</DialogTitle>
            <div>
                <List>
                    {roles.map((role, roleIndex) => (
                        <RoleListItem
                            role={role}
                            key={role.candidateId}
                            changeRole={() => setRole(roleIndex)}
                        />
                    ))}
                </List>
            </div>
        </Dialog>
    )
}

export default LoginDialog
