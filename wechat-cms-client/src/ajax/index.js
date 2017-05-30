/**
 * Created by wangjiang on 17/5/30.
 */

import axios from 'axios'

//export login = () => {
//
//}
axios({
    url: LOGIN_URL,
    method: 'post',
    data: loginParam,
    headers: {
        'Content-Type': 'application/json'
    }
}).then(function (response) {

}).catch(function (error) {
    // 请求失败
    console.log(error);
    _that.logining = false;
});

