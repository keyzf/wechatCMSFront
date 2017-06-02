
/**
 * Created by wangjiang on 17/5/27.
 */
import React, { Component } from 'react';
import './UserList.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { doFetchUserList, changePagination } from '../actions/userAction'
import {Table, Icon, Input, Button, } from 'antd';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    //sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
    filters: [{
        text: 'SS',
        value: 'SS',
    }],
    sorter: (a, b) => {
        var x = a.name.first.length - b.name.first.length;
        return x;
    },
    onFilter: (value, record) => record.name.first.indexOf(value) === 0,
}, {
    title: '年龄',
    dataIndex: 'age',
    width: '20%',
    sorter: (a, b) => a.age - b.age,
}, {
    title: '地址',
    dataIndex: 'address',
    filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
          <a href="#">Action 一 {record.name.first}</a>
          <span className="ant-divider" />
          <a href="#">Delete</a>
          <span className="ant-divider" />
          <a href="#" className="ant-dropdown-link">
              More actions <Icon type="down" />
          </a>
        </span>
    ),
}];

function isEmpty(obj)
{
    for (var name in obj)
    {
        return false;
    }
    return true;
};

class UserList extends Component {

    state = {
        selectedRowKeys: [],
    }

    componentDidMount() {
        console.log('开始获取远程数据...')
        this.props.doFetchUserList({

        })
    }

    handleTableChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
        console.log(pagination.current);

        //console.log(isEmpty(filters));
        const pager = { ...this.props.pagination };
        pager.current = pagination.current;
        this.props.changePagination(pager)

        //// 判断是否current是否发生变化,如果发生变化
        let willPageIndex = pagination.current;
        if(this.props.pagination.current!= willPageIndex  ){
            // 跳转到其他页面 ajax进行回调
            this.props.doFetchUserList({
                page: pagination.current,
                sortField: sorter.field,
                sortOrder: sorter.order,
                ...filters,
            });
        }
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render() {
        const rowSelection = {
            selectedRowKeys:this.state.selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <Table
                rowSelection={rowSelection}
                columns={columns}
                   rowKey={record => record.key}
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
        doFetchUserList:doFetchUserList,
        changePagination
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
