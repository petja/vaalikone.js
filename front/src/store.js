import {createStore, applyMiddleware, combineReducers} from 'redux'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducer from './reducer'
import history from './history'

console.log(routerMiddleware(history))
export default createStore(
    combineReducers({
        root        : reducer,
        router      : routerReducer,
    }),

    composeWithDevTools(
        applyMiddleware(thunk, routerMiddleware(history))
    )
)
