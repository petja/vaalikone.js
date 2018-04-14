import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from './reducer'
import thunk from 'redux-thunk'

const initialState = {
    answers             : {},
    questions           : {},
    options             : {},
    candidates          : {},
    scoreboard          : {},
}

export default createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
