import React from 'react'
import { render } from 'react-dom'

import store from './store'
import { Provider } from 'react-redux'

import MainLayout from './components/MainLayout.jsx'

// Models
import * as QuestionModel from './models/Question'
 
QuestionModel.getAll()
 
render(
    <Provider store={store}>
        <MainLayout />
    </Provider>,
    document.getElementById('root')
)
