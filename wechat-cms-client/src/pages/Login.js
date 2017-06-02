/**
 * Created by wangjiang on 17/5/27.
 */
import React, { Component } from 'react';
import "./Login.css"
import bg from "../asserts/bg.jpeg"

import {
    Redirect,
} from 'react-router-dom'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { doLogin } from '../actions/loginAction'

import { loginTitle} from '../config'

import { Spin } from 'antd'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item;

class NormalLoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                // 发送请求到服务器登录,这里采用redux
                this.props.doLogin();

                //this.props.argTestAction("abcde");
                //this.props.AsyncTestAction();

                //login().then(function (response) {
                //    console.log("success...")
                //    console.log(response)
                //}).catch(function (error) {
                //    // 请求失败
                //    console.log(error);
                //});
            }
        });
    }


    componentDidMount(){
        // console.log(this)
    }

    render() {
        //this.props.isLogin
        //if (this.props.isLogin) {
        //    this.props.
        //}

        const { getFieldDecorator } = this.props.form
        let formContent = (<div>
            <h2>
                {loginTitle}
            </h2>
            <br/>
            <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>记住我</Checkbox>
                )}
                <a className="login-form-forgot" href="">忘记密码</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                <a href="">马上注册!</a>
            </FormItem>
        </div>);

        if (this.props.islogging) {
            formContent =  (<Spin tip="正在登录, 请稍后...">
                {formContent}
            </Spin>)
        }else{

        }

        return (
            <div className="warpcontainer" style={{ backgroundImage: `url(${bg})`  }}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    { formContent }
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {
        isLogin: state.login.isLogin,
        islogging: state.login.islogging
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        doLogin: doLogin,
    }, dispatch);
}


//export default WrappedNormalLoginForm

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)