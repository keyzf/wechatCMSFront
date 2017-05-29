/**
 * Created by wangjiang on 17/5/29.
 */
import { combineReducers } from 'redux';
import testReducer from './testReducer'
const rootReducer = combineReducers({
    testReducer, //导航相关
});

export default rootReducer;