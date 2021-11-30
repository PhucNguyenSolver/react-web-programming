import React, { useEffect } from 'react';
import { Button, Modal,  Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import $ from 'jquery';
import axios from 'axios';

export default function EditProduct (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState('');
  const productId = props.id;
  useEffect(() => {
    axios.get('/Controller/ProductController.php/?id='  + productId)
    .then(res => {
      setProduct(res.data);
    })
    .catch(err => {
      alert("Cannot load product info")
    })
  }, [])

  const handleUpdateProduct = () => {
    var jsonProduct = JSON.stringify(product);
    console.log(jsonProduct);
    $.ajax({
      url: "/Controller/ProductController.php/",
      type: "POST",
      data: {rq: "update", data: jsonProduct},
      success: function (data) {
        alert("Đã lưu thay đổi");
      }
    }).fail(function (data) {
      alert("Cập nhật thất bại!");
    });
  }
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
        <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
      <div className="col-sm-6">
        <img className="img-fluid" style={{width: '100%'}} src={product.image1} alt=""/>
      </div>
    </div>
    <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
      <div className="col-sm">
        <img className="img-fluid" style={{width: '100%'}} src={product.image2} alt=""/>
      </div>
      <div className="col-sm">
        <img className="img-fluid" style={{width: '100%'}} src={product.image3} alt=""/>
      </div>
      <div className="col-sm">
        <img className="img-fluid" style={{width: '100%'}} src={product.image4} alt=""/>
      </div>
    </div> 

    <div className="row justify-content-md-center">
      <div  className="col-sm-10">
        <Form>
          <Form.Group className="mb-3" controlId="formId">
            <Row>
              <Form.Label column sm="4">
                <h6>Mã sản phẩm</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.productId} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên sản phẩm</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.name} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, name: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 1</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.image1} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, image1: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 2</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.image2} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, image2: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 3</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.image3} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, image3: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 4</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.image4} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, image4: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Hãng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.manu} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, manu: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>CPU</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.CPU} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, CPU: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>RAM</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.RAM} onChange={e => setProduct({...product, RAM: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ổ cứng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.drive} onChange={e => setProduct({...product, drive: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Card đồ họa</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.GPU} onChange={e => setProduct({...product, GPU: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Màn hình</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.screen} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, screen: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Pin</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.battery} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, battery: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Trọng lượng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.weight} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, weight: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Màu sắc</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.color} onChange={e => setProduct({...product, color: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Kích thước</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.size} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, size: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Cổng giao tiếp</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.port} style={{backgroundColor: 'white'}} onChange={e => setProduct({...product, port: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Hệ điều hành</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.OS} onChange={e => setProduct({...product, OS: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Giá trước khi giảm giá</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.oldCost} onChange={e => setProduct({...product, oldCost: e.target.value})}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Giảm giá</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={product.discount} onChange={e => setProduct({...product, discount: e.target.value})}/>
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
            handleUpdateProduct();
          }}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
