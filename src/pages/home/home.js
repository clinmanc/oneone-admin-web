import React, { Component } from 'react';
import './home.css';
import { Layout, Menu, Breadcrumb, Icon, Avatar, Dropdown } from 'antd';
import { HashRouter as Router, Link, Route, withRouter } from "react-router-dom";
import auth from "../../auth";
import OrderList from "../order/list/order-list";
import RightsOrderList from "../order/rights/rights-order-list";
import GoodsList from "../goods/list/goods-list";
import UserInfo from "../user/info/user-info";
import GoodsPublishing from "../goods/publishing/goods-publishing";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const AuthButton = withRouter(({ history }) => (
  <a onClick={() => {
    auth.signout(() => history.push('/'))
  }}>{auth.isAuthenticated ? '登出' : '登录'}</a>
));

const userMenu = (
  <Menu>
    <Menu.Item>
      <AuthButton/>
    </Menu.Item>
  </Menu>
);

const Home = () => {
  return (
    <Router>
      <Layout className="container">
        <Header className="header">
          <div className="logo" >Oneone</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">所有订单</Menu.Item>
            <Menu.Item key="2">待发货</Menu.Item>
            <Menu.Item key="3">已完成</Menu.Item>
            <Menu.Item key="4">退款中</Menu.Item>
            <Dropdown overlay={userMenu}>
              <a className="ant-dropdown-link" style={{ float: 'right' }}>
                <div style={{ height: '64px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginRight: '24px' }}>
                  <Avatar size="large" style={{}} icon="user" />
                </div>
                KOMA <Icon type="down" />
              </a>
            </Dropdown>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['dashboard']}
              defaultOpenKeys={['sub2']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="dashboard"><Link to="/dashboard"><span><Icon type="bar-chart" />概况</span></Link></Menu.Item>
              <SubMenu key="sub2" title={<span><Icon type="file-text" />订单管理</span>}>
                <Menu.Item key="orderList"><Link to="/order-list">订单列表</Link></Menu.Item>
                <Menu.Item key="batchShipment"><Link to="/batch-shipment">批量发货</Link></Menu.Item>
                <Menu.Item key="batchRefund"><Link to="/batch-refund">批量退款</Link></Menu.Item>
                <Menu.Item key="printBill"><Link to="/print-bill">快速打单</Link></Menu.Item>
                <Menu.Item key="rightsOrderList"><Link to="/rights-order-list">维权订单</Link></Menu.Item>
              </SubMenu>
              <Menu.Item key="goodsList"><Link to="/goods-list"><span><Icon type="shopping-cart" />商品管理</span></Link></Menu.Item>
              <Menu.Item key="userList"><Link to="/user-list"><span><Icon type="team" />用户管理</span></Link></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>订单管理</Breadcrumb.Item>
              <Breadcrumb.Item>所有订单</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ padding: 0, margin: 0, minHeight: 280 }}>
              <Route path="/order-list" component={OrderList}/>
              <Route path="/rights-order-list" component={RightsOrderList}/>
              <Route path="/goods-list" component={GoodsList}/>
              <Route path="/user-list" component={GoodsList}/>
              <Route path="/user-info" component={UserInfo}/>
              <Route path="/goods-publishing" component={GoodsPublishing}/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Oneone web admin ©2017 Created by KOMA
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Home;
