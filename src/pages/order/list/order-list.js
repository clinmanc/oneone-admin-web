import './order-list.css';

import React, { Component } from 'react';
import {Button, Card, Col, DatePicker, Form, Icon, Input, Row, Select, Table} from "antd";
import moment from 'moment';
import yay from "../../../assets/yay.jpg";

const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const columns = [{
  title: '商品',
  dataIndex: 'goods',
  key: 'goods',
  render: (text, record) => (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <img src={record.cover} alt="商品图片" width={80} height={80}/>
      <a href="#">{text}</a>
    </span>
  ),
}, {
  title: '单价',
  dataIndex: 'price',
  key: 'price',
}, {
  title: '数量',
  dataIndex: 'quantity',
  key: 'quantity',
}, {
  title: '实付金额',
  dataIndex: 'payAmount',
  key: 'payAmount',
}, {
  title: '买家',
  dataIndex: 'buyer',
  key: 'buyer',
  render: text => <a href="#">{text}</a>,
}, {
  title: '颜色分类',
  dataIndex: 'colorClassification',
  key: 'colorClassification',
}, {
  title: '备注',
  dataIndex: 'remark',
  key: 'remark',
}, {
  title: '订单状态',
  dataIndex: 'orderStatus',
  key: 'orderStatus',
  render: text => <a href="#">{text}</a>,
}, {
  title: '发货备注',
  dataIndex: 'sendGoodsRemark',
  key: 'sendGoodsRemark',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">操作 一 {record.goods}</a>
      <span className="ant-divider" />
      <a href="#">删除</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  cover: yay,
  goods: '墨绿色马里奥长裤',
  price: 32,
  quantity: 32,
  payAmount: 32,
  buyer: 'KOMA',
  colorClassification: '白色   M码（偏大）',
  remark: '',
  orderStatus: '待发货',
  sendGoodsRemark: '备注',
}, {
  key: '2',
  cover: yay,
  goods: '墨绿色马里奥长裤',
  price: 42,
  quantity: 32,
  payAmount: 32,
  buyer: 'Jim Green',
  colorClassification: '白色   M码（偏大）',
  remark: '',
  orderStatus: '待发货',
  sendGoodsRemark: '备注',
}, {
  key: '3',
  cover: yay,
  goods: '墨绿色马里奥长裤',
  price: 32,
  quantity: 32,
  payAmount: 32,
  buyer: 'Joe Black',
  colorClassification: '白色   M码（偏大）',
  remark: '',
  orderStatus: '待发货',
  sendGoodsRemark: '备注',
}];

class OrderListForm extends Component {
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
        <Card>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', minWidth: '800px' }}>
              <Form onSubmit={this.handleSearch} style={{ width: '100%' }}>
                <Row>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="查询类型"
                    >
                      {getFieldDecorator('queryType')(
                        <InputGroup compact>
                          <Select defaultValue="ORDER_NUMBER" style={{ width: 80 }}>
                            <Option value="ORDER_NUMBER">订单号</Option>
                          </Select>
                          <Input style={{ width: 153, textAlign: 'center' }} />
                        </InputGroup>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="下单时间"
                    >
                      {getFieldDecorator('orderTime')(
                        <RangePicker
                          ranges={{ '今天': [moment(), moment()], '这个月': [moment().startOf('month'), moment()] }}
                          onChange={onChange}
                        />
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="订单状态"
                    >
                      {getFieldDecorator('orderStatus', {
                        initialValue: 'ALL'
                      })(
                        <Select>
                          <Option value="ALL">全部</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="订单类型"
                    >
                      {getFieldDecorator('orderType', {
                        initialValue: 'ALL'
                      })(
                        <Select>
                          <Option value="ALL">全部</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit" style={{ color: '#fff', backgroundColor: '#4bc5c3', borderColor: '#4bc5c3' }}>筛选</Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                      清空
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Card>
        <Card style={{ marginTop: '8px' }}>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    )
  }
}

const OrderList = Form.create()(OrderListForm);

export default OrderList;
