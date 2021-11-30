import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ConfirmForm from './form.js';

export default function ViewOrder (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
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
          <Button variant="danger" onClick={handleClose}>
            Hủy đơn hàng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
