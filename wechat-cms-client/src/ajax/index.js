/**
 * Created by wangjiang on 17/5/30.
 */

import axios from 'axios'
import '../mock/userdata'


export const login = () => {
    return axios({
        url: '/login/',
        method: 'get',
        data: '',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const logout = () => {
    return axios({
        url: '/logout/',
        method: 'get',
        data: '',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getUserList02 = () => {
    return axios({
        url: '/get_user_list/2/',
        method: 'get',
        data: '',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getUserList03 = () => {
    return axios({
        url: '/get_user_list/3/',
        method: 'get',
        data: '',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}