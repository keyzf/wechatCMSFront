/**
 * Created by wangjiang on 17/5/29.
 */

/**
 * Created by wangjiang on 17/5/18.
 */
import { combineReducers } from 'redux';
import { testActionType }  from '../constants/test';

//reducer
const initialState = {
    text: 'Hello'
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case testActionType:
            return {
                text: "NO TEST"
            }
        default:
            return initialState;
    }
}

export default testReducer;
