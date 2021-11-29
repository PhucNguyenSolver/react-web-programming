import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import AdminChangeForm from "./form.js";
import $ from 'jquery';

export default function AdminEditAccount (props) {
  const [show, setShow] = useState(false);
  const handleDel = () => {
    $.ajax({
      url: 'Controller/AccountController.php',
      type: 'POST',
      data: {rq:'delete',id:props.id},
      dataType: 'text',
      success: function(data){
        if(data==="error"){
          alert("Không thể xóa chính mình!");
          
        }
        else{
          alert("Đã xóa tài khoản!");
          setShow(false);
        }
      }
    })
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <Button id={"user"+props.id} variant="outline-primary" size="sm" onClick={handleShow} style={{float: 'right'}}>
        Xem thông tin
      </Button>

      <Modal size="lg" show={show} onHide={() => setShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdminChangeForm id={props.id}/>
        </Modal.Body>
        <Modal.Footer>
          <Button id={props.id} variant="danger" onClick={handleDel}>
            Xóa tài khoản
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
