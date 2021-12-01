import React from 'react';
import { Form, Col, Row, Table } from "react-bootstrap";
import $ from 'jquery';
import { useState,useEffect } from 'react';
import {Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

function UserMiniForm (props) {
  
  const [mini, setMini] = useState(false);

  useEffect(() => {
    setMini(props);
  },[props]);

  function handleRating(){
    
    

    $.ajax({
      url: '/Controller/OrderController.php',
      type: 'POST',
      data: {
        rq: 'rating',
        productId: props.productId,
        orderId: props.orderId,
        ratingContent: document.getElementById(mini.orderId+"ct"+mini.productId).value,
        ratingPoint: document.getElementById(mini.orderId+"pt"+mini.productId).value
      },
      success: function(data) {
        if(data==="OK"){
          alert("Đánh giá thành công");
        }
        else if(data==="statusmust3"){
          alert("Đơn phải ở trạng thái đã giao mới đánh giá được");
        }
        else if(data === "mustenterval"){
          alert("Vui lòng nhập điểm đánh giá!")
        }
        else if(data==="ratedbefore"){
          alert("Bạn đã đánh giá sản phẩm này rồi");
        }
      }
    });
  }

  return <>
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
        <Form.Group controlId="rtcon">
          <Form.Label>Nội dung đánh giá</Form.Label>
          <Form.Control type="text" id={mini.orderId+"ct"+mini.productId} defaultValue={mini.ratingContent} style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>

      <Col xs={2}>
        <Form.Group controlId="formProName">
          <Form.Label>Đánh giá</Form.Label>
          <Form.Control type="text" id={mini.orderId+"pt"+mini.productId} defaultValue={mini.ratingPoint} style={{backgroundColor: 'white'}}/>
        </Form.Group>
      </Col>
      <Col xs={4}>
        <div>
        <Button style={{marginTop:"17%", width:"100%"}} orderId={mini.orderId} productId={mini.productId} variant="warning" onClick={handleRating}><Icon.StarFill></Icon.StarFill> Đánh giá</Button>
        </div> 
      </Col>
    </Row>
  </>
}

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
          return <UserMiniForm productId={item.productId} orderId={item.orderId} name={item.name} quantity={item.quantity} productCost={item.productCost} ratingContent={item.ratingContent} ratingPoint={item.ratingPoint}/>
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