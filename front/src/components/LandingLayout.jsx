import React from 'react'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {withStyles} from 'material-ui/styles'

import QuestionLayout from '../components/QuestionLayout.jsx'
import CandidatesLayout from '../components/CandidatesLayout.jsx'
import BottomNavigation from '../components/BottomNavigation.jsx'
import LoginView from '../containers/LoginView.jsx'
import Toolbar from '../containers/Toolbar.jsx'

import {withRouter} from 'react-router-dom'

import {ThemeProvider, primaryColor} from '../themes/DefaultTheme'

const styles = theme => ({
    root            : {
        background          : primaryColor['900'],
        display             : 'inline-block',
        width               : '100%',
        height              : '100%',
        padding             : '5em 1em 1em 1em',
        boxSizing           : 'border-box',
    },
})

const LandingLayout = ({history, classes}) => (
    <ThemeProvider>
        <Toolbar elevation={0} />

        <div className={classes.root}>
            <Typography variant='display1'>Tervetuloa</Typography>
            <Button
                color='secondary'
                variant='raised'
                size='large'
                onClick={() => history.push('/questions')}
            >
                Käynnistä vaalikone
            </Button>
        </div>
    </ThemeProvider>
)

export default withRouter(withStyles(styles)(LandingLayout))
