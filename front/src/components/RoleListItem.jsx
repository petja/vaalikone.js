import React from 'react'

import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import blue from 'material-ui/colors/blue'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'

import { Person, Check } from '@material-ui/icons'

function createSecondaryText(role) {
    if (role.candidate) {
        return `Ehdokas ${role.candidate.number}, ${role.party.name}`
    }

    if (role.editor) {
        return `Toimittaja`
    }
}

const styles = theme => ({
    selectedAvatar: {
        background: blue[500],
    },
})

const notSelectedAvatar = (
    <ListItemAvatar>
        <Avatar>
            <Person />
        </Avatar>
    </ListItemAvatar>
)

const selectedAvatar = classes => (
    <ListItemAvatar>
        <Avatar className={classes.selectedAvatar}>
            <Check />
        </Avatar>
    </ListItemAvatar>
)

const RoleListItem = ({ role, setRole, selected, classes }) => (
    <ListItem button onClick={setRole} key={role}>
        {selected ? selectedAvatar(classes) : notSelectedAvatar}
        <ListItemText
            primary={role.election.name}
            secondary={createSecondaryText(role)}
        />
    </ListItem>
)

export default withStyles(styles)(RoleListItem)
