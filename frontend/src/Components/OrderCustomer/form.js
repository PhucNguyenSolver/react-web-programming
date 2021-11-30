import React from 'react';
import { Form, Col, Row, Table } from "react-bootstrap";
import {MiniForm} from "../Order/form.js";
import $ from 'jquery';
import { useState,useEffect } from 'react';

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

export default function ConfirmForm (props) {

  const [item, setItem] = useState({});
  const [miniList, setMinilist] = useState([]);
  useEffect(() => {  
    $.ajax({
      url: "/Controller/OrderController.php?rq=usereach&orderId="+props.orderId,
      type: "GET",
      dataType: "text",
      success: function (item) {
        item= JSON.parse(item);
        if (item.status==="1")
            item.status = "Đã đặt";
          else if (item.status==="2")
            item.status = "Đang giao";
          else if (item.status==="3")
            item.status = "Đã giao";
          else if (item.status==="4")
            item.status = "Đã hủy";
        setItem(item);
        let lst = item['list'].map((item, index) => {
          return <MiniForm name={item.name} quantity={item.quantity} productCost={item.productCost}/>
        })
        setMinilist(lst);
      }
    })
  }, [props]);

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
              <Form.Control type="text" defaultValue={item.name} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Table bordered hover>
              <tbody>
                {miniList}
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