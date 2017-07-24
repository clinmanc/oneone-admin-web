import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import auth from "./auth";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";

////////////////////////////////////////////////////////////
// 流程简介：
// 1. 点击「public 页面」
// 2. 点击 「protected 页面」
// 3. 登入
// 4. 点击后退，并且在每一步过程中观察URL的变化

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route component={NotFound}/>
    </div>
  </Router>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default App
