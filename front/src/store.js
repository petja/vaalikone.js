import {createStore, applyMiddleware, combineReducers} from 'redux'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers/index'
import history from './history'

export default createStore(
    combineReducers({
        ...reducers,
        router      : routerReducer,
    }),

    composeWithDevTools(
        applyMiddleware(thunk, routerMiddleware(history))
    )
)
