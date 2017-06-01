/**
 * Created by wangjiang on 17/5/29.
 */

import React, { Component } from 'react';
import {Breadcrumb,Row,Col,Icon} from 'antd';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { changeItem } from '../actions/loginAction'


class User extends Component {

    componentDidMount(){

    }

    render() {

        return (
            <Row>
                <Row style={{marginTop:'10px'}}>
                    <Col span={10}>
                        <Breadcrumb  style={{marginLeft:'15px'}}>
                            <Breadcrumb.Item href="/admin/index" >
                                    <Icon type="home" />
                                    <span>首页{this.props.menuItemKey}</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <Icon type="user" />
                                <span>用户管理</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item  href="/admin/user" >
                                <Icon type="usergroup-add" />
                                <span>粉丝管理</span>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row>
                    this is user...
                </Row>

            </Row>
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


export default connect(mapStateToProps, mapDispatchToProps)(User)

