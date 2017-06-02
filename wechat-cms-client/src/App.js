import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { doLogout} from './actions/loginAction'
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

import {Layout, Menu, Breadcrumb, Icon, Dropdown, Button, Row, Col, Spin, Badge} from 'antd';
const { SubMenu } = Menu;
const {Header, Content, Sider, Footer} = Layout;


class App extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        //openKeys:'1'
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
        console.log("APP componentDidMount..")
        //console.log(this)
        //setTimeout(
        //    () => {
        //        this.setState({openKeys:"user_message"});
        //        console.log('修改openkeys..');
        //    },
        //    3000
        //);
    }

    render() {
        console.log("render App..." )
        //console.log(this)
        //console.log(this.state.openKeys )
        //console.log(this.props.openKeys )
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
                    <div className="logo"/>
                    <Menu theme="dark" mode={this.state.mode}  defaultOpenKeys={[this.state.openKeys]} defaultSelectedKeys={['1']}>

                        <Menu.Item key="1"   >
                            <Link to="/admin/index" style={{}}>
                              <span>
                                <Icon type="windows" />
                                <span className="nav-text">控制台</span>
                              </span>
                            </Link>
                        </Menu.Item>

                        <SubMenu
                            key="user_message"
                            title={<span><Icon type="user" /><span className="nav-text">
                                    用户管理</span></span>}
                        >
                            <Menu.Item key="2"><Link to="/admin/user">粉丝管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span className="nav-text">设置</span></span>}
                        >
                            <Menu.Item key="3"><Link to="/admin/setting">系统设置</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/admin/setting">权限设置</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/admin/setting">个人设置</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{ background: 'rgb(236,236,236)', padding: 0 }}>
                        <Row>
                            <Col span={22}>
                            </Col>
                            <Col span={2}>
                                <Dropdown overlay={userMenu} placement="bottomCenter">
                                    <Badge count={5}>
                                        <Button shape="circle" icon="user" />
                                    </Badge>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{ background: '#fff', margin: '0 0px' }}>
                        <Route path="/admin/index"   component={Home} />
                        <Route path="/admin/user"   component={User} d="123" />

                    </Content>

                </Layout>
        </Layout>)

        //    <Footer style={{ background: 'rgb(236,236,236)',textAlign: 'center' }}>
        //辰枫科技©2017 Created by Code V
        //</Footer>

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
        islogouting: state.login.islogouting,
        openKeys:state.login.openKeys
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


