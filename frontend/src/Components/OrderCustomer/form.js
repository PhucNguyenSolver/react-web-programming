import React from 'react';
import { Form, Col, Row, Table } from "react-bootstrap";
import FormPro from './formPro';

const infoForm = {
  orderId: 1,
  userId: 1,
  userName: "Võ Thành Hiếu",
  status: "Đã giao",
  timeStamp: "15/07/2021",
  note: "Hàng dễ vỡ",
  totalCost: "250000",
  discount: true
};

export default function ConfirmForm () {
  const item = infoForm;
  return <>
      
    <div className="row justify-content-md-center">
      <div  className="col-sm-10">

        <Form>
          <Form.Group className="mb-3" controlId="formId">
            <Row>
              <Form.Label column sm="4">
                <h6>Mã hóa đơn</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.orderId} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Mã khách hàng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.userId} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên khách hàng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.userName} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Table bordered hover>
              <tbody>
                <tr><td>
                  <FormPro/>
                </td></tr>
                <tr><td>
                  <FormPro/>
                </td></tr>
                <tr><td>
                  <FormPro/>
                </td></tr>
              </tbody>
            </Table>

            <Row>
              <Form.Label column sm="4">
                <h6>Tình trạng đơn hàng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.status}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Thời gian đặt hàng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.timeStamp} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ghi chú</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.note} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tổng tiền</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.totalCost} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  </>
}