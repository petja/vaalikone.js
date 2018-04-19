// Define regenerator-runtime globally
require("regenerator-runtime/runtime")

import React from 'react'
import { render } from 'react-dom'

import store from './store'
import localForage from './models/db'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MainLayout from './components/MainLayout.jsx'
import AdminLayout from './components/AdminLayout.jsx'

// Models
import * as QuestionModel from './models/Question'
QuestionModel.getAll()
 
render(
    <Provider store={store}>
        <Router>
            <div>
                <MainLayout />
            </div>
        </Router>
    </Provider>,

    document.getElementById('root')
)
