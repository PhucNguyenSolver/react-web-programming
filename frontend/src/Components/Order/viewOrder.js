import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ConfirmForm from './form.js';
import $ from 'jquery';

export default function ViewOrder (props) {
  const [show, setShow] = useState(false);
  const handleRem = () => {
    $.ajax({
      url: 'Controller/OrderController.php',
      type: 'POST',
      data: {rq:'addelete',orderId:props.orderId},
      dataType: 'text',
      success: function(data){
        if(data === 'OK'){
          alert("Đã xóa thành công")
          setShow(false);
        }
        else if(data === 'cantdel'){
          alert("Không thể xóa đơn hàng đến giai đoạn đang giao trở đi")
        }
        else{
          alert("Xóa thất bại");
        }
      }
    })
  }
  const handleSave = () =>{
    var form = document.getElementById("form2");
    var formData = new FormData(form);
    //turn formData into json
    var status = formData.get("status")
    if (status==="Đã đặt")
      status = "1";
    else if (status==="Đang giao")
      status = "2";
    else if (status==="Đã giao")
      status = "3";
    else if (status==="Đã hủy")
      status = "4";
    else{
      alert("Sai định dạng tình trạng đơn")
      return;
    }

      
    //send data to server to update order
    $.ajax({
      url: "/Controller/OrderController.php",
      type: "POST",
      data: {rq: "adupdate", orderId: props.orderId, status: status},
      success: function (data) {
        alert("Đã lưu thay đổi");
      }
    }).fail(function (data) {
      alert("Cập nhật thất bại!");
    });
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
          <Button orderId={props.orderId} variant="danger" onClick={handleRem}>
            Xóa đơn hàng
          </Button>
          <Button orderId={props.orderId} variant="primary" onClick={handleSave}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
