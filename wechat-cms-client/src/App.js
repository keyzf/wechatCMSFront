import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { onTestAction } from './actions/testAction'

import Home from './pages/Home'
import User from './pages/User'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import {Layout, Menu, Breadcrumb, Icon} from 'antd';
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


    render() {
        return (
            <Router>
                <Layout className="container">
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span className="nav-text">
                                User</span></span>}
                            >
                                <Menu.Item key="1"><Link to="/">home</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/user">user</Link></Menu.Item>
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

                        </Header>
                        <Content style={{ margin: '0 16px' }}>

                            <Route name="home" breadcrumbName="Home" exact path="/" component={Home}></Route>
                            <Route path="/user" component={User}></Route>

                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return { text: state.testReducer.text }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onTestAction:onTestAction,
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App)


