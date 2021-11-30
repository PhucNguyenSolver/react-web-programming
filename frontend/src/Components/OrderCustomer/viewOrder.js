import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ConfirmForm from './form.js';
import $ from 'jquery';

export default function ViewOrder (props) {
  const [show, setShow] = useState(false);
  const handleCan = () => {
    $.ajax({
      url: 'Controller/OrderController.php',
      type: 'POST',
      data: {rq:'cancel',orderId:props.orderId},
      dataType: 'text',
      success: function(data){
        if(data === 'OK'){
          alert("Đã hủy thành công")
          setShow(false);
        }
        else if(data === 'cantcancel'){
          alert("Không thể hủy đơn hàng đến giai đoạn đang giao trở đi")
        }
        else{
          alert("Hủy thất bại");
        }
      }
    })
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={handleShow} style={{float: 'right'}}>
        Xem đơn hàng
      </Button>

      <Modal size="lg" show={show} onHide={() => setShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <ConfirmForm orderId={props.orderId}/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCan}>
            Hủy đơn hàng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
