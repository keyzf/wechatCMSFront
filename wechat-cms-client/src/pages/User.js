/**
 * Created by wangjiang on 17/5/29.
 */

import React, { Component } from 'react';
import {Breadcrumb,Row,Col,Icon,Form} from 'antd';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import UserSearchForm from '../containers/UserSearchForm'
import UserList from '../containers/UserList'
import {changeMenu} from '../actions/loginAction'
import { doFetchUserList, changePagination } from '../actions/userAction'


class User extends Component {

    componentDidMount(){
        console.log("User componentDidMount",this)
        console.log('开始获取远程数据...')
        this.props.doFetchUserList({

        })
        //this.props.changeMenu(
        //    {
        //        openKeys:'user_message'
        //    }
        //)
    }

    componentWillUpdate(){
        console.log("User componentWillUpdate",this)
    }

    render() {
        console.log("render user....")
        const WrappedUserSearchForm = Form.create()(UserSearchForm);

        return (
            <Row>
                <Row style={{marginTop:'10px'}}>
                    <Col span={10}>
                        <Breadcrumb  style={{marginLeft:'15px'}}>
                            <Breadcrumb.Item >
                                    <Icon type="home" />
                                    <span>首页{this.props.menuItemKey}</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <Icon type="user" />
                                <span>用户管理</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <Icon type="usergroup-add" />
                                <span>粉丝管理</span>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row style={{marginTop:'10px', padding:'0 20px'}}>
                    <WrappedUserSearchForm />
                </Row>

                <Row style={{marginTop:'10px', padding:'0 20px'}}>
                    <h2>粉丝列表</h2>
                </Row>

                <Row style={{marginTop:'10px', padding:'0 20px'}}>
                    <UserList />
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
        changeMenu:changeMenu,
        doFetchUserList,
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(User)

