import React from 'react';
import { Form, Col, Row } from "react-bootstrap";

const infoForm = {
  proName: "Dell vostro",
  quanlity: 1,
  productCost: 200000,
  discount: true
};

export default function FormPro () {
  const item = infoForm;
  return <>
      
    <Row className="mb-3">
      <Col xs={6}>
        <Form.Group controlId="formProName">
          <Form.Label>Tên Sản phẩm</Form.Label>
          <Form.Control type="text" defaultValue={item.proName} readOnly style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>

      <Col xs={2}>
        <Form.Group controlId="formProQuan">
          <Form.Label>Số lượng</Form.Label>
          <Form.Control type="text" defaultValue={item.quanlity} readOnly style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>
      
      <Col xs={4}>
        <Form.Group controlId="formProCost">
          <Form.Label>Tổng tiền sản phẩm</Form.Label>
          <Form.Control type="text" defaultValue={item.productCost} readOnly style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>
    </Row>
  </>
}