// Define regenerator-runtime globally
require("regenerator-runtime/runtime")

import React from 'react'
import {render} from 'react-dom'

import store from './store'
import localForage from './models/db'

import {Provider} from 'react-redux'

import history from './history'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter, push} from 'react-router-redux'

import MainLayout from './components/MainLayout.jsx'
import LandingLayout from './containers/LandingLayout.jsx'
import LoginView from './containers/LoginView.jsx'

import {ThemeProvider} from './themes/DefaultTheme'

// Models
import * as QuestionModel from './models/Question'
QuestionModel.getAll()
 
render((

    <ThemeProvider>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/' component={() => 'Please use election specific URL'} />

                    <Route exact path='/login' component={LoginView} />
                    <Route exact path='/:election' component={LandingLayout} />
                    <Route path='/:election/:constituency' component={MainLayout} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    </ThemeProvider>

), document.getElementById('root'))
