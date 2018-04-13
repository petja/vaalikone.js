import React from 'react'

import classnames from 'classnames'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import QuestionLayout from '../components/QuestionLayout.jsx'
import BottomNavigation from '../components/BottomNavigation.jsx'

import { Route, Link } from 'react-router-dom'




import { createMuiTheme, MuiThemeProvider, withStyles } from 'material-ui/styles'
import primary from 'material-ui/colors/cyan'
import secondary from 'material-ui/colors/green'

const theme = createMuiTheme({
    palette             : {
        type                : 'dark',
        primary             : {main: primary['900']},
        secondary           : secondary,
    },
    zIndex              : {
        floatingBody        : 1150,
        bottomNavigation    : 1175,
    },
})



function MainLayout(props) {
    const {classes} = props

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Petjan vaalikone
                    </Typography>
                </Toolbar>
                <Toolbar />
                <Toolbar />
            </AppBar>

            <Route exact path='/' component={() => <QuestionLayout />} />
            <Route path='/candidates' component={() => 'Ehdokkaat'} />

            <BottomNavigation />
        </MuiThemeProvider>
    )
}

export default MainLayout
