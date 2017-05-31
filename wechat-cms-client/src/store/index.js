/**
 * Created by wangjiang on 17/5/26.
 */

import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers'
import login from '../reducers/loginReducer'

import createHistory from 'history/createBrowserHistory'

import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import DevTools from '../containers/DevTools'

const history = createHistory()

const routingMiddleware = routerMiddleware(history)

const enhancer = compose(
    //你要使用的中间件，放在前面
    applyMiddleware(routingMiddleware, thunkMiddleware),
    //必须的！启用带有monitors（监视显示）的DevTools
    DevTools.instrument()
)

const initialState = {
    user: login.initialState,
};

const store = createStore(rootReducer, initialState, enhancer);

export { history, store }
