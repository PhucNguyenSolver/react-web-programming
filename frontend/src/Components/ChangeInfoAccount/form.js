import {React,useState,useEffect} from 'react';
import { Form, Col, Row } from "react-bootstrap";
import $ from 'jquery';

export default function AdminChangeForm (props) {
  
  const [acc, setAcc] = useState({});

  useEffect(() => {  
    $.ajax({
      url: "/Controller/AccountController.php?rq=info&id="+props.id,
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

  return <>

    <div className="row justify-content-md-center" style={{marginBottom: '2%', marginTop: "2%"}}>
      <div className="col-sm-6">
        <img className="img-fluid" style={{width: '100%'}} src={acc.avatar} alt=""/>
      </div>
    </div>

    <div className="row justify-content-md-center">
      <div  className="col-sm-10">
        <Form id={props.id}>
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
              <Form.Control type="text" defaultValue={acc.name} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Tên tài khoản</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.userName} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Mật khẩu</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="password" defaultValue="password" readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Email</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.email} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Số điện thoại</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.phoneNumber} readOnly/>
              </Col>
            </Row>

            <Row>
              <Form.Label column sm="4">
                <h6>Địa chỉ</h6>
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" defaultValue={acc.address} readOnly/>
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
          </Form.Group>
        </Form>
      </div>
    </div>
  </>
}