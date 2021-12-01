import React, {useState} from 'react';
import * as Icon from 'react-bootstrap-icons';
import {Button,FormControl} from 'react-bootstrap';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { numberWithCommas } from '../Utils/utils';

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

  const totalPrice = cart ? cart.reduce((a,c) => a + c.product.price*c.quantity, 0) : 0;
  
  const handleOrder = () => {
    if (isLogin) {
      var array={
        "note":document.getElementById('note').value,
        "list":[]
      }
      cart.forEach(item => {
        array.list.push({
          productId: item.product.id,
          quantity: item.quantity
        })
      })
      var json = JSON.stringify(array);
      //ajax post
      $.ajax({
        url: "/Controller/OrderController.php",
        type: "POST",
        data: {rq: "make", data: json},
        success: function (data) {
          if(data==="OK"){
            alert("Đặt hàng thành công");
            localStorage.setItem('cart','');
            window.location.href = "/customer-order";
          }
            
          else
            alert("Sản phẩm " + data + " không đủ số lượng");
        }
      }).fail(function (data) {
        alert("Đặt hàng thất bại!");
      });
    }

    else
      window.location.href = "/sign-in";
  }

  return (
    // <div class="container" style={{"minHeight":"700px"}}>
    <div class="container my-4"> 
      <h3 class="text-center text-primary mb-4">Giỏ hàng</h3>
      <div class="row border-bottom border-3 justify-content-center text-primary fw-bold">
        <div class="col-md-2 col-sm-2 col-2">
          <p class="text-center">Hình ảnh</p>
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
          <p class="text-center"></p>
        </div>
      </div>

      {/* Cart Item */}
      <div class="row justify-content-center mb-4 d-flex align-items-center">
            {cart.map((item) => {
                let product = item.product;
                return (
                    <div class="row border-bottom border-3">
                        <div class="col-md-2 col-sm-2 col-2">
                            <img src={product.img} alt={product.name} class="img-fluid"/>
                        </div>
                        <div class="col-md-3 align-self-center col-3 col-sm-3">
                          <a href={`/product-info/${product.id}`} style={{textDecoration: 'none'}}>
                            <p class="text-center text-primary"> {product.name}</p>
                          </a>
                        </div>
                        <div class="col-md-2 align-self-center col-2 col-sm-2">
                            <p class="text-center fw-bold my-0">{numberWithCommas(product.price) + ' VNĐ'}</p>
                        </div>
                        <div class="col-md-2 align-self-center col-2 col-sm-2">
                            <div class="input-group col d-flex justify-content-center">
                                <button class="btn btn-primary rounded fw-bold my-0 me-1" onClick={() => handleDecrement(product.id)}>-</button>
                                <div class="form-control text-center rounded me-1">{item.quantity}</div>
                                <button class="btn btn-primary rounded fw-bold" onClick={() => handleIncrement(product.id)}>+</button>
                            </div>
                        </div>
                        <div class="col-md-2 align-self-center col-2 col-sm-2">
                            <p class="text-center fw-bold my-0">{numberWithCommas(product.price * item.quantity)}</p>
                        </div>
                        <div class="col-md-1 align-self-c     enter col-1 col-sm-1">
                        <Button variant="dark" onClick={()=> removeItem(product.id)}>
                          <Icon.Trash></Icon.Trash>
                        </Button> 
                        </div>
                    </div>
                );
            })}
            
        </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div>
            <div class="col justify-content mb-1">
              <FormControl as="textarea" placeholder="Ghi chú" id="note" />
            </div>
            <div class="col justify-content-end">
              <Button variant="primary" onClick={handleOrder}>Đặt hàng</Button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="col d-flex justify-content-evenly">
            <h5>Tổng tiền: </h5>
            <h5 class="text-center text-primary">{numberWithCommas(totalPrice)} VNĐ</h5>
          </div>
        </div>
      </div>
      
    </div>
  )
}