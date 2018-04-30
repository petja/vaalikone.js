import React from 'react'

import {ListItem, ListItemAvatar, ListItemText} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

const RoleListItem = ({role, changeRole}) => (
    <ListItem
        button
        onClick={changeRole}
        key={role}
    >
        <ListItemAvatar>
            <Avatar src='http://gravatar.com/avatar/3fe5cfc5d9eaeea3d15c8b5605c93514?s=128' />
        </ListItemAvatar>

        <ListItemText primary={role} secondary='Alaotsikko' />
    </ListItem>
)

export default RoleListItem
