
/**
 * Created by wangjiang on 17/5/27.
 */
import React, { Component } from 'react';
import './UserList.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { doFetchUserList } from '../actions/userAction'
import {Table, Icon, Input, Button, } from 'antd';

const { Column, ColumnGroup } = Table;

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: '性别',
    dataIndex: 'age',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: '邮箱',
    dataIndex: 'address',
}];

class UserList extends Component {

    componentDidMount() {
        console.log('开始获取远程数据...')
        this.props.doFetchUserList()
    }

    handleTableChange = () => {
        console.log("触发了table的 onChange..")
    }


    render() {
        return (
            <Table columns={columns}
                   rowKey={record => record.registered}
                   dataSource={this.props.userdata}
                   pagination={this.props.pagination}
                   loading={this.props.loading}
                   onChange={this.handleTableChange}
            />
        );
    }
}

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {
        userdata: state.user.data,
        pagination: state.user.pagination,
        loading: state.user.loading,
    }
}
//text: state.login.text

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        doFetchUserList:doFetchUserList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
