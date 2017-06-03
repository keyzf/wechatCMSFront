/**
 * Created by wangjiang on 17/5/31.
 */


import { loginSuccessActionType, loginFailActionType, loginErrorActionType, loginingActionType, logoutActionType, logoutingActionType, changeMenuActionType }  from '../constants/types';

import {login, logout} from '../ajax'
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
                store.dispatch(push('/admin/index'))

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


export const doLogout = ()=> {
    return dispatch => {
        dispatch({type: logoutingActionType})
        // 发送ajax请求
        logout().then(function (response) {
            console.log(response)
            if(response.data.success===true) {
                // 退出成功之后
                dispatch({type: logoutActionType})
                message.success('退出成功')
                // 清空localstorge
                localStorage.removeItem("user")
                localStorage.removeItem("token")
                // 退出成功之后跳转到进入页面
                store.dispatch(push('/login'))
            }else{

            }
        }).catch(function (error) {
            // 请求失败
            console.log(error);
        });
    }
}

export const changeMenu = (args)=> ({"type":changeMenuActionType, payload:{openKeys:args.openKeys,selectMenuKey:args.selectMenuKey}});

