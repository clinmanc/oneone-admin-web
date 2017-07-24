import './goods-list.css';

import React, { Component } from 'react';
import { Button, Card, Col, Form, Input, Row, Table } from "antd";
import yay from "../../../assets/yay.jpg";

const Search = Input.Search;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const columns = [{
  title: '商品图片',
  dataIndex: 'cover',
  key: 'cover',
  render: text => <img src={text} alt="商品图片" width={80} height={80}/>,
}, {
  title: '商品',
  dataIndex: 'goods',
  key: 'goods',
  render: (text, record) => (
    <span>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <p>{text}</p>
        <br/>
        <a href="#">{record.price}</a>
      </div>
    </span>
  ),
}, {
  title: '品牌',
  dataIndex: 'brand',
  key: 'brand',
  render: text => <a href="#">{text}</a>,
}, {
  title: '尺码',
  dataIndex: 'size',
  key: 'size',
}, {
  title: '库存',
  dataIndex: 'stock',
  key: 'stock',
}, {
  title: '状态',
  dataIndex: 'status',
  key: 'status',
}, {
  title: '发布人',
  dataIndex: 'publisher',
  key: 'publisher',
}, {
  title: '发布时间',
  dataIndex: 'publishingTime',
  key: 'publishingTime',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">操作 一 {record.goods}</a>
      <span className="ant-divider" />
      <a href="#">编辑</a>
      <span className="ant-divider" />
      <a href="#">下架</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  goods: '深色超薄短袖T恤',
  cover: yay,
  price: 78,
  brand: 'Oneone',
  size: 'S、M、L',
  stock: '50(件)',
  status: '热卖中',
  publisher: 'KOMA',
  publishingTime: '2017-07-24 00:47:49',
}, {
  key: '2',
  goods: '深色超薄短袖T恤',
  cover: yay,
  price: 78,
  brand: 'Oneone',
  size: 'S、M、L',
  stock: '50(件)',
  status: '热卖中',
  publisher: 'KOMA',
  publishingTime: '2017-07-24 00:47:49',
}, {
  key: '3',
  goods: '深色超薄短袖T恤',
  cover: yay,
  price: 78,
  brand: 'Oneone',
  size: 'S、M、L',
  stock: '50(件)',
  status: '热卖中',
  publisher: 'KOMA',
  publishingTime: '2017-07-24 00:47:49',
}];

class GoodsListForm extends Component {
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
    // const { count, dataSource } = this.state;
    // const newData = {
    //   key: count,
    //   name: `Edward King ${count}`,
    //   age: 32,
    //   address: `London, Park Lane no. ${count}`,
    // };
    // this.setState({
    //   dataSource: [...dataSource, newData],
    //   count: count + 1,
    // });
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
      <div>
        <Card style={{ marginTop: '8px' }}>
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
      </div>
    )
  }
}

const GoodsList = Form.create()(GoodsListForm);

export default GoodsList;
