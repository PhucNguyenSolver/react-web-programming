import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from './Components/Homepage/index.js';
import Products from './Components/Products/index.js';
import ProductInfo from './Components/ProductInfo/index.js';
import Cart from './Components/Cart/index.js';
import News from './Components/News/index.js';
import Article from './Components/Article/index';
import Header from "./Components/Utils/Header.js";
import Footer from "./Components/Utils/Footer.js";
import ChangeInfoAccount from "./Components/ChangeInfoAccount";
import ChangeInfoProduct from "./Components/ChangeInfoProduct";
import SignUp from './Components/SignUp/index.js';
import SignIn from './Components/SignIn/index.js';
import Forgot from './Components/Forgot/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router'
import $ from 'jquery';
import Cookies from 'js-cookie';



var emailCk = Cookies.get('email');
var isAdminCk = Cookies.get('isAdmin');

$(function(){
  emailCk = Cookies.get('email');
  isAdminCk = Cookies.get('isAdmin');
})



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
    <Header />
    <Router>
      <Switch>
        <RenderRoute path="/products" component={Products}/>
        <RenderRoute path="/product-info" component={ProductInfo}/>
        <RenderRoute path="/cart" component={Cart}/>
        <RenderRoute path="/news" component={News}/>
        <RenderRoute path="/article" component={Article}/>
        <RenderRoute path="/admin0" component={ChangeInfoAccount}/>
        <RenderRoute path="/admin1" component={ChangeInfoProduct}/>
        <RenderRoute path="/sign-in" component={SignIn}/>
        <RenderRoute path="/sign-up" component={SignUp}/>
        <RenderRoute path="/forgot" component={Forgot}/>

        <RenderRoute path="/" component={Homepage}/>
      </Switch>
    </Router>
    <Footer/>
  </>);
}
