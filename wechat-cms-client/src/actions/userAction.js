/**
 * Created by wangjiang on 17/5/31.
 */


import { getUserListSuccessActionType, getUserListFailActionType, getUserListErrorActionType, gettingUserListActionType }  from '../constants/types';

import {login, logout} from '../ajax'
import {store} from '../store'
import { push } from 'react-router-redux'
import { message } from 'antd';

export const doFetchUserList = ()=> {
    return dispatch => {
        dispatch({type: gettingUserListActionType})
        // 发送ajax请求
        login().then(function (response) {
            console.log(response)
            if(response.data.success===true) {
                // 登录成功之后
                dispatch({type: getUserListSuccessActionType, payload: {data:response.data.user}})
            }else{
                dispatch({type: getUserListFailActionType})
            }
        }).catch(function (error) {
            // 请求失败
            console.log(error);
            dispatch({type: getUserListErrorActionType})
        });
    }
}

