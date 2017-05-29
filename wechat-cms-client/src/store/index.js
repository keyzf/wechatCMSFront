/**
 * Created by wangjiang on 17/5/26.
 */

import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { routerMiddleware } from 'react-router-redux'


const history = createHistory()

const middleware = routerMiddleware(history)


const initialState = {};

const store = createStore(rootReducer, initialState,   applyMiddleware(middleware));

export { history, store }
