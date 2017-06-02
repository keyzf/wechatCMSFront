
/**
 * Created by wangjiang on 17/5/27.
 */
import React, { Component } from 'react';
import './UserList.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {  } from '../actions/loginAction'
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
    dataIndex: 'gender',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: '邮箱',
    dataIndex: 'email',
}];

class UserList extends Component {

    state = {
        data: [],
        pagination: {},
        loading: false,
    }

    componentDidMount() {
        console.log('开始获取远程数据...')
        //this.fetch();
    }

    onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    render() {
        return (
            <Table columns={columns}
                   rowKey={record => record.registered}
                   dataSource={this.state.data}
                   pagination={this.state.pagination}
                   loading={this.state.loading}
                   onChange={this.handleTableChange}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
