/**
 * Created by wangjiang on 17/5/31.
 */


import { loginSuccessActionType, loginFailActionType, loginErrorActionType, loginingActionType }  from '../constants/types';

import {login} from '../ajax'
import {history, store} from '../store'
import { push } from 'react-router-redux'
import { message } from 'antd';

export const doLogin = ()=> {
    return dispatch => {
        dispatch({type: loginingActionType})
        // 发送ajax请求
        login().then(function (response) {
            console.log(response)
            if(response.data.success===true) {
                dispatch({type: loginSuccessActionType})
                message.success('登录成功')
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
