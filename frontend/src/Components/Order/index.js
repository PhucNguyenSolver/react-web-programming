import ViewOrder from "./viewOrder";
import { useState, useEffect } from "react";
import $ from "jquery";

function OrderRow(props) {
  const [order, setOrder] = useState(false);
  
  useEffect(() => {
    setOrder(props);
  },[props]);

  return <>
    <tr>
      <th scope="row" style={{textAlign: 'center'}}>{order.orderId}</th>
      <th scope="row" style={{textAlign: 'center'}}>{order.userId}</th>
      <td>{order.name}</td>
      <td style={{textAlign: 'center'}}>{order.status}</td>
      <td><ViewOrder orderId = {order.orderId}/></td>
    </tr>
  </>
}


export default function Order(){

  const [list, setList] = useState([]);

  useEffect(() => {
    $.ajax({
      url: 'Controller/OrderController.php',
      type: 'GET',
      data: {rq:'all'},
      dataType: 'text',
      success: function(data){
        data = JSON.parse(data);     
        let lst = data.map((item, index) => {
          if (item.status==="1")
            item.status = "Đã đặt";
          else if (item.status==="2")
            item.status = "Đang giao";
          else if (item.status==="3")
            item.status = "Đã giao";
          else if (item.status==="4")
            item.status = "Đã hủy";
          return <OrderRow orderId={item.orderId} userId={item.userId} name={item.name} status={item.status}/>
        })
        setList(lst);
      }
    })
  } , []);
  
  return (
    <>
    <div className="container" style={{marginTop: '0.5%'}}>
      <div className="row justify-content-md-center">
        <div className="col-sm-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{textAlign: 'center'}}>Mã hóa đơn</th>
                <th scope="col" style={{textAlign: 'center'}}>Mã khách hàng</th>
                <th scope="col">Tên khách hàng</th>
                <th scope="col" style={{textAlign: 'center'}}>Tình trạng đơn hàng</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {list}

            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>)
}