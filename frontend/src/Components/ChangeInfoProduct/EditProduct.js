import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ChangeForm from "./form";

export default function EditProduct () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={handleShow} style={{float: 'right'}}>
        Chỉnh sửa
      </Button>

      <Modal size="lg" show={show} onHide={() => setShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangeForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
