/**
 * Created by wangjiang on 17/5/29.
 */

/**
 * Created by wangjiang on 17/5/27.
 */
import React, { Component } from 'react';
import {Breadcrumb} from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {  } from '../actions/loginAction'


class Home extends Component {


    componentDidMount(){


    }

    render() {
        return (
            <div>
                这是控制台总览
            </div>
        );
    }
}

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {

    }
}
//text: state.login.text

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
