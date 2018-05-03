import React from 'react'

import List, { ListItem, ListItemText } from 'material-ui/List'
import { DialogTitle } from 'material-ui/Dialog'

import RoleListItem from './RoleListItem.jsx'

const RoleList = ({
    auth,
    currentRole,
    fetchRoles,
    fetched,
    logout,
    roles,
    setRole,
}) => {
    if (auth && !fetched) fetchRoles()

    return (
        <React.Fragment>
            <DialogTitle>Valitse rooli</DialogTitle>
            <List>
                {roles.map((role, roleIndex) => (
                    <RoleListItem
                        role={role}
                        selected={roleIndex === currentRole}
                        key={roleIndex}
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
