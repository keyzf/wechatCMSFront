/**
 * Created by wangjiang on 17/5/31.
 */
/**
 * Created by wangjiang on 17/5/29.
 */

/**
 * Created by wangjiang on 17/5/18.
 */

import { loginSuccessActionType, loginFailActionType, loginErrorActionType }  from '../constants/types';

//reducer
const initialState = {
    // 登录 默认false
    isLogin: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginSuccessActionType:
            // 不修改原来的state对象返回一个新的state对象
            return Object.assign({}, state, {isLogin: true})
        case loginFailActionType:
            return initialState
        case loginErrorActionType:
            return initialState
        default:
            return initialState
    }
}

export default {initialState, loginReducer}
