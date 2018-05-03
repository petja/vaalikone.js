import React from 'react'

import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

import { Person } from '@material-ui/icons'

const RoleListItem = ({ role, setRole }) => (
    <ListItem button onClick={setRole} key={role}>
        <ListItemAvatar>
            <Avatar>
                <Person />
            </Avatar>
        </ListItemAvatar>

        <ListItemText
            primary={role.electionName}
            secondary={'Ehdokas ' + role.number}
        />
    </ListItem>
)

export default RoleListItem
