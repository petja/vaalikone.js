import React from 'react'
import { render } from 'react-dom'

import store from './store'
import { Provider } from 'react-redux'

import Question from './containers/Question.jsx'

// Models
import * as QuestionModel from './models/Question'
 
QuestionModel.getAll()
 
render(
    <Provider store={store}>
        <Question />
    </Provider>,
    document.getElementById('root')
)
