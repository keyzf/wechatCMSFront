/**
 * Created by wangjiang on 17/5/29.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import testReducer from './testReducer'
import login from './loginReducer'

const rootReducer = combineReducers({
    testReducer, //导航相关
    login: login.loginReducer,
    router:routerReducer
});

export default rootReducer;