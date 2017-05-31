/**
 * Created by wangjiang on 17/5/31.
 */


import { loginSuccessActionType, loginFailActionType, loginErrorActionType, loginingActionType }  from '../constants/types';

import {login} from '../ajax'
import {store} from '../store'
import { push } from 'react-router-redux'
import { message } from 'antd';

export const doLogin = ()=> {
    return dispatch => {
        dispatch({type: loginingActionType})
        // 发送ajax请求
        login().then(function (response) {
            console.log(response)
            if(response.data.success===true) {
                // 登录成功之后
                dispatch({type: loginSuccessActionType, payload: response.data.user})
                message.success('登录成功')
                // 将用户信息及加密的token写入localstorge
                localStorage.user = JSON.stringify(response.data.user)
                localStorage.token = response.data.token
                // 成功之后跳转到进入页面
                store.dispatch(push('/'))

            }else{
                message.error('用户名或密码错误, 登录失败')
                dispatch({type: loginFailActionType})
            }
        }).catch(function (error) {
            // 请求失败
            console.log(error);
            dispatch({type: loginErrorActionType})
        });
    }
}
