import React, { useEffect } from 'react';
import { Button, Modal,  Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import $ from 'jquery';

export default function RemoveProduct (props) {
  const productId = props.id;

  const handleRemoveProduct = () => {
    $.ajax({
      url: "/Controller/ProductController.php/",
      type: "POST",
      data: {rq: "delete", id: productId},
      success: function (data) {
        alert("Xóa thành công");
      }
    }).fail(function (data) {
      alert("Xóa thất bại!");
    });
  }
  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={() => {
          if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
              handleRemoveProduct();
          }
          window.location.href = '/manager-product';
      }} style={{float: 'right'}}>
        Xóa
      </Button>
    </>
  );
}
