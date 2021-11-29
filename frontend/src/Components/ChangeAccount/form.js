import React from 'react';
import { Form, Col, Row } from "react-bootstrap";
import $ from 'jquery';
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";



export default function ChangeForm () {
  const [acc, setAcc] = useState({});

  useEffect(() => {  
    $.ajax({
      url: "/Controller/AccountController.php?rq=info",
      type: "GET",
      dataType: "text",
      success: function (data) {
        data= JSON.parse(data);
        if(data.isAdmin==="1")
            data.isAdmin = "Quản lý";
        else if(data.isAdmin==="0")
          data.isAdmin = "Khách hàng";
        setAcc(data);
      }
    })
  }, []);

  function saveBtn(){

    var form = document.getElementById("form");
    var formData = new FormData(form);
    //turn formData into json
    var data = {
      "name": formData.get("name"),
      "password": formData.get("password"),
      "changePass": formData.get("changePass"),
      "email": formData.get("email"),
      "phone": formData.get("phone"),
      "address": formData.get("address"),
      "avatar": formData.get("avatar"),
    };
    //stringify json
    var json = JSON.stringify(data);
    //send data to server to update
    $.ajax({
      url: "/Controller/AccountController.php",
      type: "POST",
      data: {rq: "update", data: json},
      success: function (data) {
        alert("Đã lưu thay đổi");
      }
    }).fail(function (data) {
      alert("Cập nhật thất bại!");
    });
  }



  return <>
    <div className="row justify-content-md-center" style={{marginBottom: '2%', marginTop: "2%"}}>
      <div className="col-sm-6">
        <img className="img-fluid" style={{width: '100%'}} src={acc.avatar} alt=""/>
      </div>
    </div>
    <div className="row justify-content-md-center">
      <div  className="col-sm-10">
        <Form id="form">
          <Form.Group className="mb-3" controlId="formId">
            <Row>
              <Form.Label column sm="4">
                <h6>Id</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.accId} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên người dùng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" name="name" defaultValue={acc.name}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên tài khoản</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" name="userName" defaultValue={acc.userName} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Mật khẩu</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="password" name="password" defaultValue="password"/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4"><h6>Đổi mật khẩu</h6></Form.Label>
              <Col sm="8">
              <Form.Check type="checkbox" name="changePass" defaultValue="false"/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Email</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" name="email" defaultValue={acc.email}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Số điện thoại</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" name="phone" defaultValue={acc.phoneNumber}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Địa chỉ</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" name="address" defaultValue={acc.address}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Vai trò</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.isAdmin} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Ảnh</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" name="avatar" defaultValue={acc.avatar}/>
              </Col>
            </Row>

            <Row className="justify-content-end" style={{marginTop:"2%"}}>
              <Button variant="primary" id="save" onClick={saveBtn} style={{width:"20%"}}>
                Lưu
              </Button>
            </Row>
            
          </Form.Group>
        </Form>
      </div>
    </div>
  </>
}