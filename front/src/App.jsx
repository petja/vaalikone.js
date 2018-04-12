import React from 'react'
import { render } from 'react-dom'

import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MainLayout from './components/MainLayout.jsx'

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
