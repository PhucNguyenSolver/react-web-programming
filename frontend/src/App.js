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
import SignUp from './Components/SignUp/index.js';
import SignIn from './Components/SignIn/index.js';
import Forgot from './Components/Forgot/index.js';
import { Redirect } from 'react-router'
import $ from 'jquery';
import Cookies from 'js-cookie';
import AppProvider from "./context/AppProvider.js";
import ChangeInfoNews from "./Components/ChangeInfoNews/index.js";



var emailCk = Cookies.get('email');
var isAdminCk = Cookies.get('isAdmin');

$(function(){
  emailCk = Cookies.get('email');
  isAdminCk = Cookies.get('isAdmin');
})


function RenderRoute(props){
  if(emailCk){
    if (props.path==="/sign-in"){
      return <Redirect path="/"/>//đưa về home hết nếu đã login
    }
    if (props.path==="/sign-up"){
      return <Redirect path="/"/>
    }
    if (props.path==="/forgot"){
      return <Redirect path="/"/>
    }
    //
    else{
      return <Route path={props.path} component={props.component}></Route>
    }
  }

  else{
    return <Route path={props.path} component={props.component}></Route>
  }
}

export default function App() {
  
  return (<>
  <AppProvider>
    <Header />
    <Router>
      <Switch>
        <RenderRoute path="/products" component={Products}/>
        <RenderRoute path="/product-info" component={ProductInfo}/>
        <RenderRoute path="/cart" component={Cart}/>
        <RenderRoute path="/news" component={News}/>
        <RenderRoute path="/article/:id" exact component={Article}/>
        <RenderRoute path="/admin0" component={ChangeInfoAccount}/>
        <RenderRoute path="/admin1" component={ChangeInfoProduct}/>
        <RenderRoute path="/admin2" component={Order}/>
        <RenderRoute path="/admin" component={ChangeInfoNews}/>
        <RenderRoute path="/sign-in" component={SignIn}/>
        <RenderRoute path="/sign-up" component={SignUp}/>
        <RenderRoute path="/forgot" component={Forgot}/>

        <RenderRoute path="/" component={Homepage}/>
      </Switch>
    </Router>
    <Footer/>
  </AppProvider>
  </>);
}
