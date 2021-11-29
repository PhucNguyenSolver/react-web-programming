import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ChangeForm from "./form.js";

export default function AdminEditAccount () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={handleShow} style={{float: 'right'}}>
        Xem
      </Button>

      <Modal size="lg" show={show} onHide={() => setShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangeForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Xóa tài khoản
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
