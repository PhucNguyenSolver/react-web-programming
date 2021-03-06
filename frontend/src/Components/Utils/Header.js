import $ from 'jquery';
import * as Cookies from 'js-cookie';
import EditAccount from '../ChangeAccount/EditAccount';
import * as Icon from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';
import { useState } from 'react';
import Search from './Search';

var isAdmin = Cookies.get('isAdmin');
var isLogin = Cookies.get('id');

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

function LogBtn(){
  
  
  if(isLogin){
    return <>
      <button type="button" className="btn btn-danger me-2" id="logout">Đăng xuất</button>
    </>
  }
  return <>
      <button type="button" className="btn btn-primary me-2" id="login">Đăng nhập</button>
      <button type="button" className="btn btn-warning me-2" id="sign-up">Đăng ký</button>
  </>
}

function CartBtn(){
  if(!isAdmin){
    return <Button variant="secondary" className="btn-sign-in" id="cartBtn"><Icon.Cart></Icon.Cart></Button>
  }
  else return <>
  </>
}

export default function Header() {

  $(function(){
    $('#login').on('click', function(){
      window.location.href = "/sign-in";
    });

    $('#sign-up').on('click', function(){
      window.location.href = "/sign-up";
    });

    $('#logout').on('click', function(){
      $.ajax({
        url: "/Controller/SignOut.php",
        type: "POST",
        success: function(data) {   
          alert(data);
          window.location.href = "/sign-in";    
        }
      })
    });

    $('#cartBtn').on('click', function(){
      window.location.href = "/cart";
    });

    var emailCk=Cookies.get('email');
    if (emailCk){
      $('#user').text("Xin chào " + emailCk);
    }
    else{
      $('#user').text("Xin chào Khách");
  }

  })
  
  function handleSearch(searchKey) {
    localStorage.setItem('searchItem', JSON.stringify(searchKey));
    window.location.href = "/search";
  }
  return (<>


    <header className="p-1 bg-primary text-black" style={{'background': 'linear-gradient(to right, #8f8f8f, #4f3232'}}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" className="nav-link px-2 text-white">Trang chủ</a></li>
            <li><a href="/products" className="nav-link px-2 text-white">Sản phẩm</a></li>
            <li><a href="/product-info" className="nav-link px-2 text-white">Chi tiết</a></li>
            <li><a href="/news" className="nav-link px-2 text-white">Tin tức</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Tìm kiếm..." aria-label="Search"  onKeyPress={event=> {if(event.key == "Enter"){handleSearch(event.target.value);event.preventDefault()}}} />
          </form>

          <div className="text-end">
            <LogBtn></LogBtn>{' '}
            <EditAccount></EditAccount>{' '}
            <CartBtn/> 
          </div>
        </div>
      </div>
    </header>
  </>);
}
