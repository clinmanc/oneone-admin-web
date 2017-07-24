import './goods-list.css';

import React, { Component } from 'react';
import { Button, Card, Col, Form, Input, Row, Table } from "antd";
const Search = Input.Search;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

class UserInfoForm extends Component {
  state = {
    redirectToReferrer: false
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    return (
      <Card style={{ marginTop: '8px' }}>
        <h2>基本信息</h2>
        <Button type="primary" className="editable-add-btn" onClick={this.handleAdd}>发布产品</Button>
        <Form onSubmit={this.handleSearch} style={{ float: 'right' }}>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Search
                placeholder="输入搜索关键字"
                style={{ width: 200 }}
                onSearch={value => console.log(value)}
              />
            </Col>
          </Row>
        </Form>
        <Table columns={columns} dataSource={data} scroll={{ x: 800 }} />
      </Card>
    )
  }
}

const UserInfo = Form.create()(UserInfoForm);

export default UserInfo;
