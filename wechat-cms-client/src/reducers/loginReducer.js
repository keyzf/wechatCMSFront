/**
 * Created by wangjiang on 17/5/31.
 */

import { loginSuccessActionType, loginFailActionType, loginErrorActionType,loginingActionType, logoutActionType }  from '../constants/types';

//reducer
const initialState = {
    // 登录 默认false
    isLogin: false,
    islogging:false,
    user:null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginingActionType:
            return Object.assign({}, state, {islogging: true})
        case loginSuccessActionType:
            // 不修改原来的state对象返回一个新的state对象
            return Object.assign({}, state, {isLogin: true, islogging: false, user:action.payload.user})
        case loginFailActionType:
            return Object.assign({}, state, {islogging: false})
        case loginErrorActionType:
            return Object.assign({}, state, {islogging: false})
        case logoutActionType:
            // 退出
            return initialState
        default:
            return initialState
    }
}

export default {initialState, loginReducer}
