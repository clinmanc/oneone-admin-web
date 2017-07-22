// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
import React, { Component } from 'react';
import './App.css';
import {Layout, Menu, Breadcrumb, Icon, Switch} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
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
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['sub2']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="0"><span><Icon type="bar-chart" />概况</span></Menu.Item>
              <SubMenu key="sub2" title={<span><Icon type="file-text" />订单管理</span>}>
               <Menu.Item key="1">批量发货</Menu.Item>
               <Menu.Item key="2">批量退款</Menu.Item>
               <Menu.Item key="3">快速打单</Menu.Item>
               <Menu.Item key="4">维权订单</Menu.Item>
              </SubMenu>
              <Menu.Item key="5"><span><Icon type="shopping-cart" />商品管理</span></Menu.Item>
              <Menu.Item key="6"><span><Icon type="team" />用户管理</span></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
      // <Layout className="container">
      //   <Header className="header">
      //     <div className="logo" >Oneone</div>
      //     <Menu
      //       theme="dark"
      //       mode="horizontal"
      //       defaultSelectedKeys={['1']}
      //       style={{ lineHeight: '60px' }}
      //     >
      //       <Menu.Item className="nav-menu-item" key="1">所有订单</Menu.Item>
      //       <Menu.Item className="nav-menu-item" key="2">待发货</Menu.Item>
      //       <Menu.Item className="nav-menu-item" key="3">已完成</Menu.Item>
      //       <Menu.Item className="nav-menu-item" key="4">退款中</Menu.Item>
      //     </Menu>
      //   </Header>
      //   <Layout>
      //     <Sider width={160}>
      //       <Menu
      //         theme="dark"
      //         mode="inline"
      //         defaultSelectedKeys={['sub1']}
      //         defaultOpenKeys={['sub1', 'sub2']}
      //         style={{ height: '100%', borderRight: 0, marginTop: '32px' }}
      //       >
      //         <Menu.Item className="sider-menu-item" key="sub1"><span><Icon type="bar-chart" />概况</span></Menu.Item>
      //         <SubMenu className="sider-menu-item"
      //                  key="sub2"
      //                  title={<span className="sider-menu-item"><Icon type="file-text" />订单管理</span>}>
      //           <Menu.Item className="sider-sub-menu-item" key="1">批量发货</Menu.Item>
      //           <Menu.Item className="sider-sub-menu-item" key="2">批量退款</Menu.Item>
      //           <Menu.Item className="sider-sub-menu-item" key="3">快速打单</Menu.Item>
      //           <Menu.Item className="sider-sub-menu-item" key="4">维权订单</Menu.Item>
      //         </SubMenu>
      //         <Menu.Item className="sider-menu-item" key="sub7"><span><Icon type="shopping-cart" />商品管理</span></Menu.Item>
      //         <Menu.Item className="sider-menu-item" key="sub8"><span><Icon type="team" />用户管理</span></Menu.Item>
      //       </Menu>
      //     </Sider>
      //     <Layout style={{ padding: '0 24px 24px' }}>
      //       <Breadcrumb style={{ margin: '12px 0' }}>
      //         <Breadcrumb.Item>Home</Breadcrumb.Item>
      //         <Breadcrumb.Item>List</Breadcrumb.Item>
      //         <Breadcrumb.Item>App</Breadcrumb.Item>
      //       </Breadcrumb>
      //       <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
      //         Content
      //       </Content>
      //     </Layout>
      //   </Layout>
      // </Layout>
    );
  }
}

export default App;
