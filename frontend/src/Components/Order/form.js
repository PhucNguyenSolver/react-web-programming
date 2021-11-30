import React from 'react';
import { Form, Col, Row, Table } from "react-bootstrap";
import $ from 'jquery';
import { useState,useEffect } from 'react';


export function MiniForm (props) {
  
  const [mini, setMini] = useState(false);

  useEffect(() => {
    setMini(props);
  },[props]);

  return <>
  <tr>
    <td>
    <Row className="mb-3">
      <Col xs={6}>
        <Form.Group controlId="formProName">
          <Form.Label>Tên Sản phẩm</Form.Label>
          <Form.Control type="text" defaultValue={mini.name} readOnly style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>

      <Col xs={2}>
        <Form.Group controlId="formProQuan">
          <Form.Label>Số lượng</Form.Label>
          <Form.Control type="text" defaultValue={mini.quantity} readOnly style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>
      
      <Col xs={4}>
        <Form.Group controlId="formProCost">
          <Form.Label>Tổng tiền sản phẩm</Form.Label>
          <Form.Control type="text" defaultValue={mini.productCost} readOnly style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col xs={6}>
        <Form.Group controlId="formProName">
          <Form.Label>Nội dung đánh giá</Form.Label>
          <Form.Control type="text" defaultValue={mini.ratingContent} readOnly style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>

      <Col xs={6}>
        <Form.Group controlId="formProName">
          <Form.Label>Đánh giá</Form.Label>
          <Form.Control type="text" defaultValue={mini.ratingPoint} readOnly style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>
    </Row>

    </td>
  </tr>
  </>
}

export default function ConfirmForm (props) {
  
  const [acc, setAcc] = useState({});
  const [miniList, setMinilist] = useState([]);
  useEffect(() => {  
    $.ajax({
      url: "/Controller/OrderController.php?rq=each&orderId="+props.orderId,
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
        setAcc(item);
        let lst = item['list'].map((item, index) => {
          return <MiniForm name={item.name} quantity={item.quantity} productCost={item.productCost} ratingContent={item.ratingContent} ratingPoint={item.ratingPoint}/>
        })
        setMinilist(lst);
      }
    })
  }, [props]);

  return <>
    
    <div className="row justify-content-md-center">
      <div  className="col-sm-10">

        <Form id="form2">
          <Form.Group className="mb-3" controlId="formId">
            <Row>
              <Form.Label column sm="4">
                <h6>Mã đơn hàng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.orderId} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Mã khách hàng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.userId} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên khách hàng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.name} readOnly style={{backgroundColor: 'white'}}/>
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
              <Form.Control type="text" name = "status" defaultValue={acc.status}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Thời gian đặt hàng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.timeStamp} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ghi chú</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.note} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tổng tiền</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.totalCost} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  </>
}