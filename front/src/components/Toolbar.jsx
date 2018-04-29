import React from 'react'

import {withRouter} from 'react-router-dom'

import MuiToolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AppBar from 'material-ui/AppBar'
import {withStyles} from 'material-ui/styles'

import {Refresh} from '@material-ui/icons'

import {primaryColor} from '../themes/DefaultTheme'

const styles = theme => ({
    toolbar             : {
        width               : '100%',
        maxWidth            : '70em',
        margin              : '0 auto',
    },
    flex                : {
        flex                : 1,
    },
    appBar              : {
        background          : primaryColor['900'],
        color               : '#FFF',
    },
})

const Toolbar = ({election, auth, match, history, classes, rows, getElectionInfo, onLogout, ...rest}) => {
    if(!election.name) getElectionInfo(match.params.election)

    const constituency = election.constituencies && election.constituencies[match.params.constituency]

    const titleParts = []
    if(election.name) titleParts.push(election.name)
    if(constituency) titleParts.push(constituency.name)
    if(constituency) titleParts.push(constituency.id)

    return (
        <AppBar
            position='fixed'
            className={classes.appBar}
            {...rest}
        >
            <MuiToolbar className={classes.toolbar} style={{paddingBottom: `${(rows - 1) * 64}px`}}>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    {titleParts.length > 0 ? titleParts.join(' / ') : 'Vaalikone'}
                </Typography>

                <Button
                    variant='raised'
                    onClick={() => {
                        history.push('/')
                        onLogout()
                    }}
                >
                    <Refresh />
                    Aloita alusta
                </Button>
            </MuiToolbar>
        </AppBar>
    )
}

export default withRouter(withStyles(styles)(Toolbar))
