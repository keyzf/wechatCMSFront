/**
 * Created by wangjiang on 17/5/29.
 */

import { testActionType }  from '../constants/test';


export const onTestAction = ()=> ({"type":testActionType});

// 测试的异步action
export const AsyncTestAction =() => {
    return dispatch => {
        fetch('/api/data')
            .then(res => res.json())
            .then(json => dispatch({"type":testActionType}));
    };
};
