/**
 * Created by wangjiang on 17/5/29.
 */

/**
 * Created by wangjiang on 17/5/18.
 */
import { combineReducers } from 'redux';
import { testActionType, argTestActionType, aysncTestActionType }  from '../constants/test';

//reducer
const initialState = {
    text: 'Hello'
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case testActionType:
            // 不修改原来的state对象返回一个新的state对象
            return Object.assign({}, state, {text: "NO TEST"})
            // 如果state是数组则采用下一写法
            //return [...state, newItem];
        case argTestActionType:
            return Object.assign({}, state, action.playload)
        case aysncTestActionType:

            return Object.assign({}, state, {text: "ASYNC TEST"})
        default:
            return initialState
    }
}

export default testReducer;
