/**
 * Created by wangjiang on 17/5/27.
 */
import React, { Component } from 'react';
import "./Login.css"
import bg from "../asserts/bg.jpeg"

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { onTestAction, argTestAction } from '../actions/testAction'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // 发送请求到服务器登录
                this.props.argTestAction("abcde");
            }
        });
    }


    componentDidMount(){
        console.log(this)
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="warpcontainer" style={{ backgroundImage: `url(${bg})`  }}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <h2>
                        {this.props.text}
                    </h2>
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
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


//映射Redux state到组件的属性
function mapStateToProps(state) {
    return { text: state.testReducer.text }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onTestAction:onTestAction,
        argTestAction:argTestAction,
    }, dispatch);
}


//export default WrappedNormalLoginForm

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)