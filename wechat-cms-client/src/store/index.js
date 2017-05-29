/**
 * Created by wangjiang on 17/5/26.
 */

import { createStore } from 'redux';
import rootReducer from '../reducers'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'


const history = createHistory()

const middleware = routerMiddleware(history)


initialState = {};


const store = createStore(rootReducer, initialState);

export default store