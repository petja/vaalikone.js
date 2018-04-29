// Define regenerator-runtime globally
require("regenerator-runtime/runtime")

import React from 'react'
import {render} from 'react-dom'

// Own utils
import store from './store'
import localForage from './models/db'

// Redux & Routing
import history from './history'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter, push} from 'react-router-redux'

// Action creators
import {REHYDRATE} from './actions'

// Own components
import MainLayout from './containers/MainLayout.jsx'
import LandingLayout from './containers/LandingLayout.jsx'
import LoginView from './containers/LoginView.jsx'

import {ThemeProvider} from './themes/DefaultTheme'

store.dispatch(REHYDRATE())
 
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
