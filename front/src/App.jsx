import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducer'
import Question from './containers/Question.jsx'
 
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 
render(
    <Provider store={store}>
        <Question
            id='foobar'
            text='Parantumattomasti sairailla tulee olla oikeus avustettuun kuolemaan'
        />
    </Provider>,
    document.getElementById('root')
)
