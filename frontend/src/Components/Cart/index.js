import React, {useState} from 'react';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import CartItem from './CartItem';
import data from './data.json';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Cart() {
  const [cart, setCart] = useState(data.products);
  const handleDecrement = (item_id) => {
      setCart(cart =>
          cart.map((item) =>
              item_id === item.id ? {...item, quantity:item.quantity - (item.quantity > 1 ? 1: 0)} : item
          )
      )
  }
  const handleIncrement = (item_id) => {
      setCart(cart =>
          cart.map((item) =>
              item_id === item.id ? {...item, quantity:item.quantity+1} : item
          )
      )
  }
  const removeItem = (item_id) => {
      setCart(cart => cart.filter(item => item.id != item_id)
  )}

  const totalPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <div class="container">
      <h3 class="text-center">Giỏ hàng</h3>
      <div class="row border-bottom border-3 justify-content-center">
        <div class="col-md-2 col-sm-2 col-2">
          <p class="text-center">Sản phẩm</p>
        </div>
        <div class="col-md-5 col-sm-4 col-4">
          <p class="text-center">Tên sản phẩm</p>
        </div>
        <div class="col-md-2 col-sm-2 col-2">
          <p class="text-center">Đơn giá</p>
        </div>
        <div class="col-md-2 col-sm-1 col-1">
          <p class="text-center">Số lượng</p>
        </div>
        {/* <div class="col-md-2 col-sm-2 col-2">
          <p class="text-center">Thành tiền</p>
        </div> */}
        <div class="col-md-1 col-sm-1 col-1">
          <p class="text-center">Xóa</p>
        </div>
      </div>
      <CartItem cart={cart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} removeItem={removeItem}/>
      <h5 class="text-center">Tổng tiền {numberWithCommas(totalPrice)} VNĐ</h5>
    </div>
  )
}