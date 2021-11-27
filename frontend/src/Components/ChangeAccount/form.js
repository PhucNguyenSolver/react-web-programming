import React from 'react';
import { Form, Col, Row } from "react-bootstrap";

const infoForm = {
  img: "https://product.hstatic.net/1000026716/product/028vn_710aac8009614321ba3103b049a0a3c4_large.png",
  id: 1,
  fullname: "Vo Thanh Hieu",
  name: "HieuVo",
  pass: "123456789",
  email: "hiev.vo@gmail.com",
  phone: "0123452341",
  address: "Tien Giang",
  rule: "Khach hang",
  discount: true
};

export default function ChangeForm () {
  const item = infoForm;
  return <>

    <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
      <div className="col-sm-6">
        <img className="img-fluid" style={{width: '100%'}} src={item.img} alt=""/>
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
              <Form.Control type="text" defaultValue={item.id} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên người dùng</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.fullname}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên tài khoản</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.name} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Mật khẩu</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="password" defaultValue={item.phone}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Email</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.email}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Số điện thoại</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.phone}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Địa chỉ</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.address}/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Vai trò</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={item.rule} readOnly style={{backgroundColor: 'white'}}/>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  </>
}