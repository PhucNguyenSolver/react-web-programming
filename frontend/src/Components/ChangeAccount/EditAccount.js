import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ChangeForm from "./form.js";
import $ from 'jquery';
import Cookies from 'js-cookie';

function AdminBtn(){
  var isAdmin=Cookies.get('isAdmin');
  if(isAdmin==='1'){
    isAdmin = true;
  }
  else isAdmin = false;
  
  if(isAdmin){
    return <>
      <button type="button" className="btn btn-success me-2" id="acc">Quản lý tài khoản</button>
      <button type="button" className="btn btn-success me-2" id="pro">Quản lý sản phẩm</button>
      <button type="button" className="btn btn-success me-2" id="ord">Quản lý đơn hàng</button>
    </>
  }
  return <>
      </>
}

export default function EditAccount () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    var isLogin = Cookies.get('id');
    if(isLogin){
      setShow(true);
    }
    else{
      setShow(false);
    }
  }

  $(function(){
    $('#acc').on('click', function(){
      window.location.href = "/manager-account";
    });
    $('#pro').on('click', function(){
      window.location.href = "/manager-product";
    });
    $('#ord').on('click', function(){
      window.location.href = "/manager-order";
    });
  })

  

  return (
    <>
      <Button variant="info" id="user" onClick={handleShow}></Button>

      <Modal size="lg" show={show} onHide={() => setShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin cá nhân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AdminBtn></AdminBtn>
          <ChangeForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
