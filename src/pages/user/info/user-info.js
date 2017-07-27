import yay from "../../../assets/yay.jpg";
import React, {Component} from 'react';
import {Badge, Button, Card, Col, Form, Icon, Input, Row, Table, Tag, Tooltip} from "antd";

class UserInfo extends Component {
    state = {
        tags: ['小清新', '便宜实惠', '萝莉控'],
        inputVisible: false,
        inputValue: '',
    };

    prop = {
        colors: ['green', 'orange', 'red', 'pink', 'cyan', 'blue', 'purple']
    };

    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({tags});
    };

    showInput = () => {
        this.setState({inputVisible: true}, () => this.input.focus());
    };

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    };

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = input => this.input = input;

    render() {
        const {tags, inputVisible, inputValue} = this.state;
        const {colors} = this.prop;
        return (
            <Card title="基本信息" style={{paddingBottom: '160px'}}>
                <table width={'100%'}>
                    <tbody>
                    <tr>
                        <td rowSpan={5}
                            style={{width: '170px', height: '170px', padding: '8px', border: '1px solid #ccc'}}>
                            <img width={160} height={160} src={yay} style={{borderWidth: 0, padding: 0, margin: 0}}/>
                        </td>
                        <td rowSpan={4} width={32}/>
                        <td colSpan={5}>
                            <h2>卖火材的大灰狼<sup><Tag color="#ffa726">VIP1</Tag></sup></h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="label"><Icon type="contacts"/> 姓名：</td>
                        <td>XXX</td>
                        <td className="label"><Icon type="gift"/> 生日：</td>
                        <td>1991-01-01</td>
                    </tr>
                    <tr>
                        <td className="label"><Icon type="mobile"/> 电话：</td>
                        <td>11111111111</td>
                        <td className="label"><Icon type="flag"/> 所在地：</td>
                        <td>浙江省-杭州市-江干区</td>
                    </tr>
                    <tr>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td>注册日期：2017-06-06</td>
                    </tr>
                    <tr>
                        <td colSpan={6}>
                            <hr/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h3>会员标签</h3>
                <div style={{marginLeft: '80px'}}>
                    {tags.map((tag, index) => {
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag key={tag} color={colors[index % colors.length]} closable={index !== 0}
                                 afterClose={() => this.handleClose(tag)}>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </Tag>
                        );
                        return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
                    })}
                    {inputVisible && (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            style={{width: 78}}
                            value={inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputConfirm}
                            onPressEnter={this.handleInputConfirm}
                        />
                    )}
                    {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+</Button>}
                </div>
            </Card>
        );
    }
}

export default UserInfo;
