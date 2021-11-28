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
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router'
import $ from 'jquery';
import Cookies from 'js-cookie';



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













function DefaultRouter() {
  return (
    <nav>
      <ul>
        <li><Link to="/homepage">Homepage</Link>
        </li>
        <li><Link to="/products">Products</Link>
        </li>
        <li><Link to="/product-info/">Product Info</Link>
        </li>
        <li><Link to="/cart/">Cart</Link>
        </li>
        <li><Link to="/news/">News</Link>
        </li>
        <li><Link to="/article/">Article</Link>
        </li>
        <li><Link to="/sign-up/">Sign Up</Link>
        </li>
        <li><Link to="/sign-in/">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

//return <Redirect path="/"/>
//return <Route path={props.path} component={props.component}></Route>

function RenderRoute(props){
  if(isAdmin){//ad vào dc mọi trag trừ trang login và signup và forgot
    if(props.path==="/sign-up"){
      return <Redirect to="/"/>
    }
    if(props.path==="/sign-in"){
      return <Redirect to="/"/>
    }
    if(props.path==="/forgot"){
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
    else{
      return <Route path={props.path} component={props.component}></Route>
    }
  }
  else{//chưa đăng nhập thì vào được mọi trang trừ trang manager-account
    if(props.path==="/manager-account"){
      return <Redirect to="/"/>
    }
    else{
      return <Route path={props.path} component={props.component}></Route>
    }
  }
}

export default function App() {
  
  return (<>
    <Header />
    <Router>
      <Switch>
        <RenderRoute path="/products" component={Products}/>
        <RenderRoute path="/product-info" component={ProductInfo}/>
        <RenderRoute path="/cart" component={Cart}/>
        <RenderRoute path="/news" component={News}/>
        <RenderRoute path="/article" component={Article}/>
        <RenderRoute path="/manager-account" component={ChangeInfoAccount}/>
        <RenderRoute path="/admin1" component={ChangeInfoProduct}/>
        <RenderRoute path="/admin2" component={Order}/>
        <RenderRoute path="/sign-in" component={SignIn}/>
        <RenderRoute path="/sign-up" component={SignUp}/>
        <RenderRoute path="/forgot" component={Forgot}/>

        <RenderRoute path="/" component={Homepage}/>
      </Switch>
    </Router>
    <Footer/>
  </>);
}
