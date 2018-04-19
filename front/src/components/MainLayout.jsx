import React from 'react'

import classnames from 'classnames'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import QuestionLayout from '../components/QuestionLayout.jsx'
import CandidatesLayout from '../components/CandidatesLayout.jsx'
import BottomNavigation from '../components/BottomNavigation.jsx'
import LoginView from '../containers/LoginView.jsx'

import { Route, Link } from 'react-router-dom'




import { createMuiTheme, MuiThemeProvider, withStyles } from 'material-ui/styles'
import primary from 'material-ui/colors/cyan'
import secondary from 'material-ui/colors/green'

const theme = createMuiTheme({
    palette             : {
        type                : 'dark',
        primary             : primary,
        secondary           : secondary,
        background          : {
            paper               : '#373737',
        },
    },
    zIndex              : {
        floatingBody        : 1150,
        bottomNavigation    : 1175,
    },
})



const styles = theme => ({
    toolbar             : {
        width               : '100%',
        maxWidth            : '70em',
        margin              : '0 auto',
    },
    appBar              : {
        background          : primary['900'],
        color               : '#FFF',
    },
})



function MainLayout(props) {
    const {classes} = props

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="title" color="inherit">
                        Petjan vaalikone
                    </Typography>
                </Toolbar>
                <Toolbar />
                <Toolbar />
            </AppBar>

            <Route exact path='/' component={() => <QuestionLayout />} />
            <Route path='/candidates' component={() => <CandidatesLayout />} />

            <Route path='/login' component={() => <LoginView />} />

            <BottomNavigation />
        </MuiThemeProvider>
    )
}

export default withStyles(styles)(MainLayout)
