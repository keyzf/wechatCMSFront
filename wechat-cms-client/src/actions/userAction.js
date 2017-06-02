/**
 * Created by wangjiang on 17/5/31.
 */

import { getUserListSuccessActionType, getUserListFailActionType, getUserListErrorActionType, gettingUserListActionType, changePaginationActionType }  from '../constants/types';

import {getUserList02,getUserList03} from '../ajax'


export const doFetchUserList = (args)=> {
    if (args.page !== undefined){
        console.log("当前传的pageIndex是:" + args.page);
        return dispatch => {
            dispatch({type: gettingUserListActionType})
            // 发送ajax请求
            getUserList03().then(function (response) {
                console.log(response)
                if(response.data.success===true) {
                    // 登录成功之后
                    dispatch(
                        {type: getUserListSuccessActionType,
                            payload: {
                                data:response.data.results,
                                pagination:{
                                    pageSize: response.data.pageSize,
                                    current: response.data.current,
                                    total: response.data.total,
                                }
                            }
                        })
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

    return dispatch => {
        dispatch({type: gettingUserListActionType})
        // 发送ajax请求
        getUserList02().then(function (response) {
            console.log(response)
            if(response.data.success===true) {
                // 登录成功之后
                dispatch(
                    {type: getUserListSuccessActionType,
                        payload: {
                            data:response.data.results,
                            pagination:{
                                pageSize: response.data.pageSize,
                                current: response.data.current,
                                total: response.data.total,
                            }
                        }
                    })
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

export const changePagination = (args)=> ({"type":changePaginationActionType, payload:{pagination:args}});
