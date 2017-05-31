/**
 * Created by wangjiang on 17/5/31.
 */


import { loginSuccessActionType, loginFailActionType, loginErrorActionType }  from '../constants/types';

import {login} from '../ajax'

export const doLogin = ()=> {
    return dispatch => {
        // 发送ajax请求
        login().then(function (response) {
            console.log(response)
            dispatch({type: loginSuccessActionType})
        }).catch(function (error) {
            // 请求失败
            console.log(error);
            dispatch({type: loginErrorActionType})
        });
    }
}
