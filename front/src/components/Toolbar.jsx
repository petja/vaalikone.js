import React from 'react'

import { withRouter } from 'react-router-dom'

import MuiToolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import deepOrange from 'material-ui/colors/deepOrange'
import { withStyles } from 'material-ui/styles'

import { Refresh, Person } from '@material-ui/icons'

import { primaryColor } from '../themes/DefaultTheme'
import * as Session from '../models/Session'

const styles = theme => ({
    toolbar: {
        width: '100%',
        maxWidth: '70em',
        margin: '0 auto',
    },
    flex: {
        flex: 1,
    },
    appBar: {
        background: primaryColor['900'],
        color: '#FFF',
    },
    avatar: {
        background: deepOrange[500],
        color: '#FFF',
    },
})

const Toolbar = ({
    auth,
    classes,
    election,
    history,
    match,
    onLogout,
    openAuthDialog,
    rows,
}) => {
    const constituency =
        election.constituencies &&
        election.constituencies[match.params.constituency]

    const loginButton = (
        <Button onClick={openAuthDialog}>Kirjaudu sisään</Button>
    )

    const clearButton = (
        <Button
            onClick={() => {
                history.push('/' + election.slug)
                onLogout()
            }}
        >
            <Refresh />
            &nbsp;Aloita alusta
        </Button>
    )

    const avatar = classes => (
        <Avatar onClick={openAuthDialog} className={classes.avatar}>
            <Person />
        </Avatar>
    )

    const rightSide = Session.get()
        ? avatar(classes)
        : constituency
            ? clearButton
            : loginButton

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <MuiToolbar
                className={classes.toolbar}
                style={{ paddingBottom: `${(rows - 1) * 64}px` }}
            >
                <div className={classes.flex}>
                    <Typography variant="title" color="inherit">
                        {election.name || 'Vaalikone'}
                    </Typography>

                    <Typography variant="caption">
                        {constituency
                            ? constituency.name
                            : 'Valitse vaalipiiri'}
                    </Typography>
                </div>

                {rightSide}
            </MuiToolbar>
        </AppBar>
    )
}

export default withRouter(withStyles(styles)(Toolbar))
