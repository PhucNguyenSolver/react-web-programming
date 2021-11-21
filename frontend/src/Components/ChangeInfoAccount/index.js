import { useState } from "react";
import EditAccount from "./EditAccount";
import { Button, Modal } from "react-bootstrap";
const pic = "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png";

export default function ChangeInfoAccount(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // document.title = "Thông tin Tài khoản";
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Chỉnh sửa
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}