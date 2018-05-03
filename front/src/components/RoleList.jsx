import React from 'react'

import List, { ListItem, ListItemText } from 'material-ui/List'
import { DialogTitle } from 'material-ui/Dialog'

import RoleListItem from './RoleListItem.jsx'

const RoleList = ({ auth, fetched, fetchRoles, roles, setRole, logout }) => {
    if (auth && !fetched) fetchRoles()

    return (
        <React.Fragment>
            <DialogTitle>Valitse rooli</DialogTitle>
            <List>
                {roles.map((role, roleIndex) => (
                    <RoleListItem
                        role={role}
                        key={role.candidateId}
                        setRole={() => setRole(roleIndex)}
                    />
                ))}

                <ListItem button onClick={logout}>
                    <ListItemText primary="Kirjaudu ulos" />
                </ListItem>
            </List>
        </React.Fragment>
    )
}

export default RoleList
