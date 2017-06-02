/**
 * Created by wangjiang on 17/5/31.
 */

import { getUserListSuccessActionType, getUserListFailActionType, getUserListErrorActionType, gettingUserListActionType,  changePaginationActionType}  from '../constants/types';

//reducer
const initialState = {
    // 获取用户列表相关
    data: [],
    pagination: {},
    loading: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case getUserListSuccessActionType:
            return Object.assign({}, state, {data: action.payload.data, pagination:action.payload.pagination, loading:false})
        case getUserListFailActionType:
            // 不修改原来的state对象返回一个新的state对象
            return Object.assign({}, state, {loading:false})
        case getUserListErrorActionType:
            return Object.assign({}, state, {loading: false})
        case gettingUserListActionType:
            return Object.assign({}, state, {loading: true})
        case changePaginationActionType:
            return Object.assign({}, state, {pagination:action.payload.pagination})
        default:
            return initialState
    }
}

export default {initialState, userReducer}
