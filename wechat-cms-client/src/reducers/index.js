/**
 * Created by wangjiang on 17/5/29.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import testReducer from './testReducer'
const rootReducer = combineReducers({
    testReducer, //导航相关
    router:routerReducer
});

export default rootReducer;