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
import Order from "./Components/Order";
import AppProvider from "./context/AppProvider.js";

export default function App() {
  return (<>
    <AppProvider>
      <Header/>
        <MyRouter/>
      <Footer/>
    </AppProvider>
  </>);
}

const MyRouter = () => {
  return <Router>
    <Switch>
      <Route path="/products" component={Products}>
      </Route>
      <Route path="/product-info" component={ProductInfo}>
      </Route>
      <Route path="/cart" component={Cart}>
      </Route>
      <Route path="/news" component={News}>
      </Route>
      <Route path="/article" component={Article}>
      </Route>
      <Route path="/admin0" component={ChangeInfoAccount}>
      </Route>
      <Route path="/admin1" component={ChangeInfoProduct}>
      </Route>
      <Route path="/admin2" component={Order}>
      </Route>
      <Route path="/sign-up" component={SignUp}>
      </Route>
      <Route path="/sign-in" component={SignIn}>
      </Route>
      <Route exact path="/" component={Homepage}>
      </Route>
    </Switch>
  </Router>;
}