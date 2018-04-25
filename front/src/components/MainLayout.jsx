import React from 'react'

import classnames from 'classnames'

import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'

import QuestionLayout from '../components/QuestionLayout.jsx'
import CandidatesLayout from '../components/CandidatesLayout.jsx'
import BottomNavigation from '../components/BottomNavigation.jsx'
import Toolbar from '../containers/Toolbar.jsx'

import { Route, Link } from 'react-router-dom'

import {ThemeProvider} from '../themes/DefaultTheme'

const MainLayout = ({match, classes}) => (
    <ThemeProvider>
        <Toolbar rows={3} />

        <Route path={`${match.url}/questions`} component={() => <QuestionLayout />} />
        <Route path={`${match.url}/candidates`} component={() => <CandidatesLayout />} />

        <BottomNavigation />
    </ThemeProvider>
)

export default MainLayout
