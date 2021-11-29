import React, { useEffect } from 'react';
import { Button, Modal } from "react-bootstrap";
import { Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import $ from 'jquery';

const infoForm = {
  img: "",
  img1: "",
  img2: "",
  img3: "",
  name: "",
  company: "",
  cpu: "",
  ram: "",
  drive: "",
  card: "",
  screen: "",
  pin: "",
  weight: "",
  color: "",
  size: "",
  gate: "",
  system: "",
  price: "",
  disc: ""
};


export default function EditProductInsert () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newProduct, setNewProduct] = useState({
    name: '',
    manu: '',
    numInStock: '',
    oldCost: '',
    discount: '',
    RAM: '',
    CPU: '',
    screen: '',
    battery: '',
    weight: '',
    size: '',
    OS: '',
    port: '',
    drive: '',
    GPU: '',
    color: '',
    image1: '',
    image2: '',
    image3: '',
    image4: ''
  });

  var newProduct2 = {
    "name": 'ABC',
    "manu": 'Abcd',
    "numInStock": 20,
    "oldCost": 20000,
    "discount": 20,
    "RAM": 'ABCDE',
    "CPU": 'ABCDE',
    "screen": '1920',
    "battery": 'ABC',
    "weight": 2,
    "size": 'ABCD',
    "OS": 'ABCD',
    "port": 'Aaaa',
    "drive": 'aaaa',
    "GPU": 'aaaa',
    'color': 'aaaaa',
    "image1": 'aaaa',
    "image2": 'aaa',
    "image3": 'a',
    "image4": 'a',
  };

  const item = infoForm;

  console.log(newProduct2);
  const HandleAddProduct = () => {
      var jsonProduct = JSON.stringify(newProduct2);
      // axios.post('http://localhost/Controller/ProductController.php', {rq: "add", data: jsonProduct})
      // .then(res => {
      //   console.log('Add completed!');
      // })
      // .catch (err => {
      //   alert('Cannot add new product');
      // });
      $.ajax({
        url: "/Controller/ProductController.php",
        type: "POST",
        data: {rq: "add", data: jsonProduct},
        success: function (data) {
          alert("Đã lưu thay đổi");
        }
      }).fail(function (data) {
        alert("Cập nhật thất bại!");
      });
  }
  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={handleShow}>
        Thêm sản phẩm mới
      </Button>

      <Modal size="lg" show={show} onHide={() => setShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row justify-content-md-center">
      <div  className="col-sm-10">
        <Form>
          <Form.Group className="mb-3" controlId="formId">

            <Row>
              <Form.Label column sm="4">
                <h6>Tên sản phẩm</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 1</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={"https://i.imgur.com/GCV59zF.jpg"} onChange={e => setNewProduct({...newProduct, image1: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 2</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={"https://i.imgur.com/GCV59zF.jpg"} onChange={e => setNewProduct({...newProduct, image2: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 3</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={"https://i.imgur.com/GCV59zF.jpg"} onChange={e => setNewProduct({...newProduct, image3: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 4</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={"https://i.imgur.com/GCV59zF.jpg"} onChange={e => setNewProduct({...newProduct, image4: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Hãng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.company} onChange={e => setNewProduct({...newProduct, manu: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>CPU</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.cpu} onChange={e => setNewProduct({...newProduct, CPU: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>RAM</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.ram} onChange={e => setNewProduct({...newProduct, RAM: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ổ cứng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.drive}onChange={e => setNewProduct({...newProduct, drive: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Card đồ họa</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.card} onChange={e => setNewProduct({...newProduct, GPU: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Màn hình</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.screen} onChange={e => setNewProduct({...newProduct, screen: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Pin</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.pin} onChange={e => setNewProduct({...newProduct, battery: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Trọng lượng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.weight} onChange={e => setNewProduct({...newProduct, weight: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Màu sắc</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.color} onChange={e => setNewProduct({...newProduct, color: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Kích thước</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.size} onChange={e => setNewProduct({...newProduct, size: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Cổng giao tiếp</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.gate} onChange={e => setNewProduct({...newProduct, port: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Hệ điều hành</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.system} onChange={e => setNewProduct({...newProduct, OS: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Giá</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.price} onChange={e => setNewProduct({...newProduct, oldCost: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Giảm giá</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.disc+'%'} onChange={e => setNewProduct({...newProduct, discount: e.target.value})}/>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            handleClose();
            HandleAddProduct();
          }}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
