import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from './Components/Homepage/index.js';
import Products from './Components/Products/index.js';
import ProductInfo from './Components/ProductInfo/index.js';
import Cart from './Components/Cart/index.js';
import News from './Components/News/index.js';
import Article from './Components/Article/index.js';
import Header from "./Components/Utils/Header.js";
import Footer from "./Components/Utils/Footer.js";
import ChangeInfoAccount from "./Components/ChangeInfoAccount";
import ChangeInfoProduct from "./Components/ChangeInfoProduct";
import Order from "./Components/Order";
import OrderCustomer from "./Components/OrderCustomer";
import SignUp from './Components/SignUp/index.js';
import SignIn from './Components/SignIn/index.js';
import Forgot from './Components/Forgot/index.js';
import { Redirect } from 'react-router'
import $ from 'jquery';
import Cookies from 'js-cookie';
import AppProvider from "./context/AppProvider.js";
import ChangeInfoNews from "./Components/ChangeInfoNews/index.js";
import Intro from "./Components/Intro";



var isLogin = Cookies.get('id');
var isAdmin = Cookies.get('isAdmin');

if(isLogin){
  isLogin = true;
}
else{
  isLogin = false;
}

if(isAdmin==="0"){
  isAdmin = false;
}
if(isAdmin==="1"){
  isAdmin = true;
}












function RenderRoute(props){
  if(isAdmin){//ad vào dc mọi trag trừ trang login và signup và forgot và cart
    if(props.path==="/sign-up"){
      return <Redirect to="/"/>
    }
    if(props.path==="/sign-in"){
      return <Redirect to="/"/>
    }
    if(props.path==="/forgot"){
      return <Redirect to="/"/>
    }
    if(props.path==="/cart"){
      return <Redirect to="/"/>
    }
    else{
      return <Route path={props.path} component={props.component}></Route>
    }
  }
  else if(isLogin){//người dùng bth vào được mọi trang trừ trang login và signup và forgot và manager-account
    if(props.path==="/sign-up"){
      return <Redirect to="/"/>
    }
    if(props.path==="/sign-in"){
      return <Redirect to="/"/>
    }
    if(props.path==="/forgot"){
      return <Redirect to="/"/>
    }
    if(props.path==="/manager-account"){
      return <Redirect to="/"/>
    }
    if(props.path==="/manager-product"){
      return <Redirect to="/"/>
    }
    if(props.path==="/manager-order"){
      return <Redirect to="/"/>
    }
    else{
      return <Route path={props.path} component={props.component}></Route>
    }
  }
  else{//chưa đăng nhập thì vào được mọi trang trừ trang manager-account
    if(props.path==="/manager-account"){
      return <Redirect to="/"/>
    }
    if(props.path==="/manager-product"){
      return <Redirect to="/"/>
    }
    if(props.path==="/manager-order"){
      return <Redirect to="/"/>
    }
    else{
      return <Route path={props.path} component={props.component}></Route>
    }
  }
}

export default function App() {
  
  return (<>
  <AppProvider>
    <Header />
    <Router>
      <Switch>
        <RenderRoute path="/products/:manu" component={Products}/>
        <RenderRoute path="/product-info/:productId" component={ProductInfo}/>
        <RenderRoute path="/cart" component={Cart}/>
        <RenderRoute path="/news" component={News}/>
        <RenderRoute path="/article/:id" component={Article}/>
        <RenderRoute path="/manager-account" component={ChangeInfoAccount}/>
        <RenderRoute path="/manager-product" component={ChangeInfoProduct}/>
        <RenderRoute path="/manager-news" component={ChangeInfoNews}/>
        <RenderRoute path="/manager-order" component={Order}/>
        <RenderRoute path="/customer-order" component={OrderCustomer}/>
        <RenderRoute path="/sign-in" component={SignIn}/>
        <RenderRoute path="/sign-up" component={SignUp}/>
        <RenderRoute path="/forgot" component={Forgot}/>
        <RenderRoute path="/intro" component={Intro}/>

        <RenderRoute path="/" component={Homepage}/>
      </Switch>
    </Router>
    <Footer/>
  </AppProvider>
  </>);
}
