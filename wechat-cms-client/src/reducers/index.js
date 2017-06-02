/**
 * Created by wangjiang on 17/5/29.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import testReducer from './testReducer'
import login from './loginReducer'
import user from './userReducer'

const rootReducer = combineReducers({
    testReducer, //导航相关
    router:routerReducer,
    login: login.loginReducer,
    user: user.userReducer,
});

export default rootReducer;