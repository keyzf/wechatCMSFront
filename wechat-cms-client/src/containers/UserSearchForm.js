/**
 * Created by wangjiang on 17/6/1.
 */
/**
 * Created by wangjiang on 17/5/29.
 */

/**
 * Created by wangjiang on 17/5/27.
 */
import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon,AutoComplete, Cascader,DatePicker,InputNumber,Select } from 'antd';
const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;

function onSelect(value) {
    console.log('onSelect', value);
}


const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
            value: 'xihu',
            label: '西湖',
        }, {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua men',
        }],
    }],
}];

function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
}

function inputNumberOnChange(value) {
    console.log('changed', value);
}

function handleSelectChange(value) {
    console.log(`selected ${value}`);
}

class UserSearchForm extends Component {

    state = {
        dataSource: [],
    }

    loadingSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }


    handleSearch = (e) => {
        // 搜索
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset = () => {
        // 重置
        this.props.form.resetFields();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
        };
        const { dataSource } = this.state;

        return (
            <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
            >
                <Row gutter={40}>
                    <Col span={8} key='search_item_01'>
                        <FormItem {...formItemLayout} label='粉丝名称'>
                            {getFieldDecorator('item01')(
                                <Input placeholder="请输入粉丝名称"/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={8} key='search_item_02'>
                        <FormItem {...formItemLayout} label='自动补全'>
                            {getFieldDecorator('item02')(
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{ width: 200 }}
                                    onSelect={onSelect}
                                    onSearch={this.loadingSearch}
                                    placeholder="input here"
                                />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={8} key='search_item_03'>
                        <FormItem {...formItemLayout} label='城市'>
                            {getFieldDecorator(`item03`)(
                                <Cascader
                                    options={options}
                                    onChange={onChange}
                                    placeholder="选择城市"
                                    showSearch
                                />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={8} key='search_item_04'>
                        <FormItem {...formItemLayout} label='时间选择'>
                            {getFieldDecorator(`item04`)(
                                <RangePicker  />
                            )}
                        </FormItem>
                    </Col>

                    <Col span={8} key='search_item_05'>
                        <FormItem {...formItemLayout} label='输入框'>
                            {getFieldDecorator(`item05`)(
                                <Input placeholder="Basic usage" />
                            )}
                        </FormItem>
                    </Col>

                    <Col span={8} key='search_item_06'>
                        <FormItem {...formItemLayout} label='数字框'>
                            {getFieldDecorator(`item06`)(
                                <InputNumber min={1} max={10}  onChange={inputNumberOnChange} />
                            )}
                        </FormItem>
                    </Col>

                    <Col span={8} key='search_item_07'>
                        <FormItem {...formItemLayout} label='多项列表'>
                            {getFieldDecorator(`item07`)(
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={handleSelectChange}
                                    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>

                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">搜索</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            重置
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }

}

export default UserSearchForm
