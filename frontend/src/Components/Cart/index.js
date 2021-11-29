import React, {useState} from 'react';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import CartItem from './CartItem';
import data from './data.json';
import { remove } from 'js-cookie';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Cart() {
  // const [cart2, setCart] = useState(data.products);
  // const handleDecrement = (item_id) => {
  //     setCart(cart2 =>
  //         cart2.map((item) =>
  //             item_id === item.id ? {...item, quantity:item.quantity - (item.quantity > 1 ? 1: 0)} : item
  //         )
  //     )
  // }
  // const handleIncrement = (item_id) => {
  //     setCart(cart2 =>
  //         cart2.map((item) =>
  //             item_id === item.id ? {...item, quantity:item.quantity+1} : item
  //         )
  //     )
  // }
  // const removeItem = (item_id) => {
  //     setCart(cart2 => cart2.filter(item => item.id != item_id)
  // )}

  // const totalPrice = cart2.reduce((a, c) => a + c.price * c.quantity, 0);

  // // // cart in local storage
  // // let cart = [];
  // // const addToCart = async (id) => {
  // //   let storage = localStorage.getItem('cart');
  // //   if(storage) {
  // //     cart = JSON.parse(storage);
  // //   }
  // //   let product = [];
  // //   let item = cart.find(c => c.product.id === id);
  // //   if(item) {
  // //     item.quantity += 1;
  // //   }
  // //   else {
  // //     cart.push({product, quantity: 1});
  // //   }
  // //   localStorage.setItem('cart', JSON.stringify(cart)); 
  // // }

  let storage = localStorage.getItem('cart');
  const [cart, setCart] = useState(JSON.parse(storage));
  //console.log(cart);

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.product.id != id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const handleIncrement = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex(item => item.product.id === id);
    newCart[index].quantity++;
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const handleDecrement = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex(item => item.product.id === id);
    if(newCart[index].quantity > 1) {
        newCart[index].quantity--;
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const totalPrice = cart.reduce((a,c) => a + c.product.price*c.quantity, 0);

  return (
    <div class="container">
      <h3 class="text-center">Giỏ hàng</h3>
      <div class="row border-bottom border-3 justify-content-center">
        <div class="col-md-2 col-sm-2 col-2">
          <p class="text-center">Sản phẩm</p>
        </div>
        <div class="col-md-3 col-sm-3 col-3">
          <p class="text-center">Tên sản phẩm</p>
        </div>
        <div class="col-md-2 col-sm-2 col-2">
          <p class="text-center">Đơn giá</p>
        </div>
        <div class="col-md-2 col-sm-1 col-1">
          <p class="text-center">Số lượng</p>
        </div>
        <div class="col-md-2 col-sm-2 col-2">
          <p class="text-center">Thành tiền</p>
        </div>
        <div class="col-md-1 col-sm-1 col-1">
          <p class="text-center">Xóa</p>
        </div>
      </div>

      {/* Cart Item */}
      <div class="row justify-content-center">
            {cart.map((item) => {
                let product = item.product;
                return (
                    <div class="row border-bottom border-3">
                        <div class="col-md-2 col-sm-2 col-2">
                            <img src={product.img} alt={product.name} class="img-fluid"/>
                        </div>
                        <div class="col-md-3 align-self-center col-3 col-sm-3">
                            <p class="text-center"> {product.name}</p>
                        </div>
                        <div class="col-md-2 align-self-center col-2 col-sm-2">
                            <p class="text-center">{numberWithCommas(product.price)}</p>
                        </div>
                        <div class="col-md-2 align-self-center col-2 col-sm-2">
                            <div class="input-group col">
                                <button class="btn btn-primary" onClick={() => handleDecrement(product.id)}>-</button>
                                <div class="form-control text-center">{item.quantity}</div>
                                <button class="btn btn-primary" onClick={() => handleIncrement(product.id)}>+</button>
                            </div>
                        </div>
                        <div class="col-md-2 align-self-center col-2 col-sm-2">
                            <p class="text-center">{numberWithCommas(product.price * item.quantity)}</p>
                        </div>
                        <div class="col-md-1 align-self-center col-1 col-sm-1 border">
                        <button onClick={()=> removeItem(product.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        </button>
                        </div>
                    </div>
                );
            })}
            
        </div>
      <h5 class="text-center">Tổng tiền {numberWithCommas(totalPrice)} VNĐ</h5>
    </div>
  )
}