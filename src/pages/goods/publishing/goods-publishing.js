import './goods-publishing.css';

import React, {Component} from 'react';
import {Button, Card, Checkbox, Col, Form, Input, InputNumber, Radio, Row, Select, Tabs} from "antd";
import yay from "../../../assets/yay.jpg";

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;


function callback(key) {
}


class GoodsPublishingForm extends Component {
    state = {
        redirectToReferrer: false
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };

        return (
            <div>
                <Form onSubmit={this.handleSearch} style={{width: '100%'}}>
                    <Tabs animated={false} defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="基本信息" key="1">
                            <Card title="基本信息">
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="产品名称"
                                        >
                                            {getFieldDecorator('goodsName')(
                                                <Input/>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="产品价格"
                                        >
                                            {getFieldDecorator('goodsPrice')(
                                                <InputGroup compact>
                                                    <Col span={12}>
                                                        <Input/>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Input placeholder="原价"/>
                                                    </Col>
                                                </InputGroup>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="发布人"
                                        >
                                            {getFieldDecorator('publisher', {
                                                initialValue: '1'
                                            })(
                                                <Select>
                                                    <Option value="1">KOMA1</Option>
                                                    <Option value="2">KOMA2</Option>
                                                    <Option value="3">KOMA3</Option>
                                                    <Option value="4">KOMA4</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="品牌名称"
                                        >
                                            {getFieldDecorator('brandName', {
                                                initialValue: '0'
                                            })(
                                                <Select>
                                                    <Option value="0">全部</Option>
                                                    <Option value="1">KOMA1</Option>
                                                    <Option value="2">KOMA2</Option>
                                                    <Option value="3">KOMA3</Option>
                                                    <Option value="4">KOMA4</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="商品类目"
                                        >
                                            {getFieldDecorator('goodsCategory', {
                                                initialValue: '0'
                                            })(
                                                <Select>
                                                    <Option value="0">全部</Option>
                                                    <Option value="1">KOMA1</Option>
                                                    <Option value="2">KOMA2</Option>
                                                    <Option value="3">KOMA3</Option>
                                                    <Option value="4">KOMA4</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="商品有效期"
                                            extra="（发布后不能修改）"
                                        >
                                            {getFieldDecorator('orderStatus')(
                                                <RadioGroup>
                                                    <Radio value={1}>长期有效</Radio>
                                                    <Radio value={2}>自定义期限</Radio>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="发货时间"
                                        >
                                            {getFieldDecorator('sendGoodsTime')(
                                                <Checkbox>预售商品</Checkbox>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Card>
                            <Card title="库存/规格" style={{marginTop: 8}}>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="尺码"
                                        >
                                            {getFieldDecorator('size')(
                                                <CheckboxGroup>
                                                    <Checkbox>S</Checkbox>
                                                    <Checkbox>M</Checkbox>
                                                    <Checkbox>L</Checkbox>
                                                </CheckboxGroup>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="颜色"
                                        >
                                            {getFieldDecorator('color')(
                                                <CheckboxGroup>
                                                    <Checkbox>白色</Checkbox>
                                                    <Checkbox>黑色</Checkbox>
                                                </CheckboxGroup>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="库存"
                                        >
                                            {getFieldDecorator('stock', {initialValue: 100})(
                                                <InputNumber min={0} max={99999} step={100}/>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Card>
                        </TabPane>
                        <TabPane tab="产品详情" key="2">
                            <Card title="产品详情">
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="商品首图"
                                            extra="建议尺寸: 640 × 640 像素"
                                        >
                                            {getFieldDecorator('goodsCover')(
                                                <Input/>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="产品描述"
                                        >
                                            {getFieldDecorator('goodsName')(
                                                <Input/>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Card>
                        </TabPane>
                    </Tabs>
                    <Card style={{marginTop: 8}}>
                        <Row>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type="primary" htmlType="submit" style={{
                                    color: '#fff',
                                    backgroundColor: '#4bc5c3',
                                    borderColor: '#4bc5c3'
                                }}>发布</Button>
                                <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                                    清空
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Form>
            </div>
        )
    }
}

const GoodsPublishing = Form.create()(GoodsPublishingForm);

export default GoodsPublishing;
