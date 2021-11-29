import React from 'react';
import { Form, Col, Row } from "react-bootstrap";
import $ from 'jquery';
import { useState } from "react";



export default function ChangeForm () {
  const [acc, setAcc] = useState(true);

  $(function(){
    fetch('/Controller/AccountController.php?rq=info').then(res => 
      res.json()
    ).then(data => {
      if(data.isAdmin === "0"){
        data.isAdmin ="Khách hàng";
      }
      else if (data.isAdmin === "1"){
        data.isAdmin ="Quản lý";
      }   
      setAcc(data); 
    })
  })

  

  return <>
    <div className="row justify-content-md-center" style={{marginBottom: '2%', marginTop: "2%"}}>
      <div className="col-sm-6">
        <img className="img-fluid" style={{width: '100%'}} src={acc.avatar} alt=""/>
      </div>
    </div>
    <div className="row justify-content-md-center">
      <div  className="col-sm-10">
        <Form>
          <Form.Group className="mb-3" controlId="formId">
            <Row>
              <Form.Label column sm="4">
                <h6>Id</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" value={acc.accId} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên người dùng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" value={acc.name}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên tài khoản</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" value={acc.userName} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Mật khẩu</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="password" value="password"/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Email</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" value={acc.email}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Số điện thoại</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" value={acc.phoneNumber}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Địa chỉ</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" value={acc.address}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Vai trò</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" value={acc.isAdmin} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" value={acc.avatar}/>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  </>
}