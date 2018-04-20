import React from 'react'

import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

const Reasoning = ({candidate, reasoning, optionId, optionName}) => {
    const primary = (
        <span>
            <strong>{optionName}</strong>&nbsp;
            {reasoning}
        </span>
    )

    return (
        <ListItem>
            <Avatar src='https://gravatar.com/avatar/3fe5cfc5d9eaeea3d15c8b5605c93514?s=80' alt={candidate.name} />
            <ListItemText primary={primary} secondary={candidate.name} />
        </ListItem>
    )
}

export default Reasoning
