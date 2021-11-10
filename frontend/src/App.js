import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from './Components/Homepage/index.js';
import Products from './Components/Products/index.js';
import ProductInfo from './Components/ProductInfo/index.js';
import Cart from './Components/Cart/index.js';
import News from './Components/News/index.js';
import Article from './Components/News/Article/index';

function DefaultRouter() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/product-info/">Product Info</Link>
        </li>
        <li>
          <Link to="/cart/">Cart</Link>
        </li>
        <li>
          <Link to="/news/">News</Link>
        </li>
        <li>
          <Link to="/article/">Article</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (<>
    <Router>
      <Switch>
        <Route exact path="/">
          <DefaultRouter />
        </Route>
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-info">
          <ProductInfo />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/article">
          <Article />
        </Route>
      </Switch>
    </Router>
  </>);
}
