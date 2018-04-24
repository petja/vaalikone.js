import React from 'react'

import classnames from 'classnames'

import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'

import QuestionLayout from '../components/QuestionLayout.jsx'
import CandidatesLayout from '../components/CandidatesLayout.jsx'
import BottomNavigation from '../components/BottomNavigation.jsx'
import LoginView from '../containers/LoginView.jsx'
import Toolbar from '../containers/Toolbar.jsx'

import { Route, Link } from 'react-router-dom'

import {ThemeProvider} from '../themes/DefaultTheme'

const MainLayout = ({classes}) => (
    <ThemeProvider>
        <Toolbar rows={3} />

        <Route path='/questions' component={() => <QuestionLayout />} />
        <Route path='/candidates' component={() => <CandidatesLayout />} />

        <Route path='/login' component={() => <LoginView />} />

        <BottomNavigation />
    </ThemeProvider>
)

export default MainLayout
