/**
 * Created by wangjiang on 17/5/29.
 */

/**
 * Created by wangjiang on 17/5/27.
 */
import React, { Component } from 'react';
import {Breadcrumb} from 'antd';


class Home extends Component {

    componentDidMount(){
        console.log("HOME...")
        console.log(this)
    }

    render() {
        return (
            <div>
                这是控制台总览
            </div>
        );
    }
}

export default Home;
