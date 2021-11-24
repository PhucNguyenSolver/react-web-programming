import React from 'react';
import { Form, Col, Row } from "react-bootstrap";

const infoForm = {
  img: "https://product.hstatic.net/1000026716/product/028vn_710aac8009614321ba3103b049a0a3c4_large.png",
  img1: "https://product.hstatic.net/1000026716/product/028vn_710aac8009614321ba3103b049a0a3c4_large.png",
  img2: "https://product.hstatic.net/1000026716/product/028vn_710aac8009614321ba3103b049a0a3c4_large.png",
  img3: "https://product.hstatic.net/1000026716/product/028vn_710aac8009614321ba3103b049a0a3c4_large.png",
  id: "",
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
  old: "",
  new: "",
  discount: true
};

export default function ChangeFormInsert () {
  const item = infoForm;
  return <>

  <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
    <div className="col-sm-6">
      <img className="img-fluid" style={{width: '100%'}} src={item.img} alt=""/>
    </div>
  </div>
  <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
    <div className="col-sm">
      <img className="img-fluid" style={{width: '100%'}} src={item.img1} alt=""/>
    </div>
    <div className="col-sm">
      <img className="img-fluid" style={{width: '100%'}} src={item.img2} alt=""/>
    </div>
    <div className="col-sm">
      <img className="img-fluid" style={{width: '100%'}} src={item.img3} alt=""/>
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
              <Form.Control type="text" defaultValue={item.id}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên sản phẩm</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.name}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Hãng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.company}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>CPU</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.cpu}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>RAM</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.ram}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ổ cứng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.drive}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Card đồ họa</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.card}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Màn hình</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.screen}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Pin</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.pin}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Trọng lượng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.weight}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Màu sắc</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.color}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Kích thước</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.size}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Cổng giao tiếp</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.gate}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Hệ điều hành</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.system}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Giá cũ</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.old}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Giá mới</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.new}/>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  </>
}