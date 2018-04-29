import React from 'react'

import classnames from 'classnames'
import {isEmpty} from 'lodash'

import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'

import store from '../store'
import QuestionLayout from '../components/QuestionLayout.jsx'
import CandidatesLayout from '../components/CandidatesLayout.jsx'
import BottomNavigation from '../components/BottomNavigation.jsx'
import Toolbar from '../containers/Toolbar.jsx'

import {Route, Switch} from 'react-router-dom'

import {ThemeProvider} from '../themes/DefaultTheme'

const MainLayout = ({match, fetchElectionInfo, fetchOptions}) => {
    const state = store.getState()

    if (isEmpty(state.root.election)) {
        fetchElectionInfo(match.params.election, match.params.constituency)
        fetchOptions()
    }

    return (
        <ThemeProvider>
            <Toolbar rows={3} />

            <Switch>
                <Route path={`${match.url}/questions`} component={QuestionLayout} />
                <Route path={`${match.url}/candidates`} component={CandidatesLayout} />
            </Switch>

            <BottomNavigation />
        </ThemeProvider>
    )
}

export default MainLayout
