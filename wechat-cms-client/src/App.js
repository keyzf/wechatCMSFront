import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { doLogout } from './actions/loginAction'
import { ConnectedRouter } from 'react-router-redux'
import {history} from './store'

import Home from './pages/Home'
import User from './pages/User'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import {Layout, Menu, Breadcrumb, Icon, Dropdown, Button, Row, Col, Spin} from 'antd';
const { SubMenu } = Menu;
const {Header, Content, Sider, Footer} = Layout;


class App extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    logout = () => {
        console.log("退出登录");
        this.props.doLogout();

    }

    componentDidMount(){
        console.log(this)
    }

    render() {
        // 渲染的时候进行判断, 如果处于未登录状态, 则跳转到/login界面
        // 如何判断是否登录? 一是localstorge里是否存有用户信息及 token
        // 二是各种接口返回401错误, 说明是未登录状态, 需要重新读取
        // 如果已经登录,则
        const { from } = this.props.location.state || { from: { pathname: '/login' } }
        if(localStorage.user===null || localStorage.user===undefined){
            return (
                <Redirect to={from}/>
            )
        }

        const userMenu = (
            <Menu>
                <Menu.Item>
                    <Icon type="info-circle" />&nbsp;&nbsp;<span>栏目一</span>
                </Menu.Item>
                <Menu.Item>
                    <Icon type="info-circle" />&nbsp;&nbsp;<span>栏目二</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item >
                    <Icon type="logout" />&nbsp;&nbsp;<span onClick={this.logout}>注销</span>
                </Menu.Item>

            </Menu>
        )

        const mainLayout = (<Layout className="container">
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>

                    <SubMenu
                        key="su1"
                        title={<span><Icon type="user" /><span className="nav-text">
                                User</span></span>}
                    >
                    </SubMenu>

                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span className="nav-text">
                                User</span></span>}
                    >
                        <Menu.Item key="1"><Link to="/admin">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/admin/user">user</Link></Menu.Item>
                        <Menu.Item key="3">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
                    >
                        <Menu.Item key="4">Team 1</Menu.Item>
                        <Menu.Item key="5">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                              <span>
                                <Icon type="file" />
                                <span className="nav-text">File</span>
                              </span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Row>
                        <Col span={22}>
                        </Col>
                        <Col span={2}>
                            <Dropdown overlay={userMenu} placement="bottomCenter">
                                <Button shape="circle" icon="user" />
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Route path="/admin/index"   component={Home} />
                    <Route path="/admin/user"   component={User} />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    辰枫科技©2017 Created by Code V
                </Footer>
            </Layout>
        </Layout>)


        if(this.props.islogouting){
            return (
                <Spin tip="正在退出,请稍候...">
                    {mainLayout}
                </Spin>
                );
        }else{
            return mainLayout
        }

    }
}

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {
        islogouting: state.user.islogouting
    }
}
//text: state.login.text

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        doLogout:doLogout,
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App)


