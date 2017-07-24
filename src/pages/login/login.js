import './login.css';
import fakeAuth from "../../auth";

import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import {Button, Card, Checkbox, Form, Icon, Input} from "antd";
const FormItem = Form.Item;

class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login();
      }
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    const { getFieldDecorator } = this.props.form;

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div className="login-container">
        <Card style={{ width: 400, backgroundColor: '#f5f5f5' }}>
          <div className="logo">Oneone</div>
          <h6 style={{ marginTop: '56px' }}>如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            <br/>
            <small>-- 阿尔伯特·爱因斯坦</small>
          </h6>
          <br/>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入你的用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入你的密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
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
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
          <p>若想访问 {from.pathname} ，你需要先登录</p>
        </Card>
      </div>
    )
  }
}

const LoginForm = Form.create()(Login);

export default LoginForm;
