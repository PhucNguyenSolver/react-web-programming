import React from 'react';
import { Form, Col, Row } from "react-bootstrap";

const infoForm = {
  img: "",
  img1: "",
  img2: "",
  img3: "",
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
  price: "",
  disc: "",
  discount: true
};

export default function ChangeFormInsert () {
  const item = infoForm;
  return <>

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
                <h6>Ảnh 1</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.img}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 2</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.img1}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 3</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.img2}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh 4</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.img3}/>
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
                <h6>Giá</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.price}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Giảm giá</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.disc}/>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  </>
}