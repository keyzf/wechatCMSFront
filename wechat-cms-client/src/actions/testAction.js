/**
 * Created by wangjiang on 17/5/29.
 */

import { testActionType, argTestActionType, aysncTestActionType }  from '../constants/test';


export const onTestAction = ()=> ({"type":testActionType});

export const argTestAction = (arg)=> ({"type":argTestActionType, playload:{text:arg}});

// 测试的异步action
export const AsyncTestAction =() => {
    return dispatch => {


        setTimeout(() => {
            dispatch({type: aysncTestActionType})
        }, 3000)

        //fetch('/api/data')
        //    .then(res => res.json())
        //    .then(json => dispatch({"type":aysncTestActionType}));
    };
};
