import React from 'react'

import classnames from 'classnames'

import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import Question from '../containers/Question.jsx'
import ResultsCard from '../components/ResultsCard.jsx'






import { createMuiTheme, MuiThemeProvider, withStyles } from 'material-ui/styles'
import primary from 'material-ui/colors/indigo'
import secondary from 'material-ui/colors/yellow'

const theme = createMuiTheme({
    palette         : {
        type            : 'dark',
        primary         : {main: primary['800']}, //
        secondary       : {main: secondary['700']},
    },
    zIndex          : {
        floatingBody    : 1150,
    },
})




const styles = theme => ({
    root            : {
        position        : 'relative',
        zIndex          : theme.zIndex.appBar + 1,
        marginTop       : '64px !important',
    },
    fixedWidth      : {
        margin          : '0 auto',
        maxWidth        : '70em',
    },
    picture         : {
        maxWidth        : '100em',
        width           : '100%',
    },
})





function MainLayout(props) {
    const {classes} = props

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position='fixed'>
                    <Toolbar>
                        <Typography variant="title" color="inherit">Petjan vaalikone</Typography>
                    </Toolbar>
                    <Toolbar />
                    <Toolbar />
            </AppBar>

            <Grid container className={classnames(classes.root, classes.fixedWidth)} spacing={8}>
                <Grid item sm={12} md={9} children={<Question />} />
                <Grid item sm={12} md={3} children={<ResultsCard />} />
            </Grid>
        </MuiThemeProvider>
    )
}

export default withStyles(styles)(MainLayout)
