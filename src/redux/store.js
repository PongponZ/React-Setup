import {createStore, applyMiddleware} from 'redux'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middlewares = [thunk]
if (process.env.REACT_APP_STAGE === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

