import ViewOrder from "./viewOrder";
import { useState, useEffect } from "react";

function OrderRow(props) {
  const [order, setOrder] = useState(false);
  
  useEffect(() => {
    setOrder(props);
  },[]);
  return <>
      {/* <tr>
      <th scope="row" style={{textAlign: 'center'}}>{info.accId}</th>
      <td>{info.name}</td>
      <td style={{textAlign: 'center'}}>{info.role}</td>
      <td><ViewOrder/> id = {info.id}/></td>
    </tr>
    <tr>
      <th scope="row" style={{textAlign: 'center'}}>{order.orderId}</th>
      <th scope="row" style={{textAlign: 'center'}}>{order.accId}</th>
      <td>Võ Thành Hiếu</td>
      <td style={{textAlign: 'center'}}>{order.status}</td>
      <td><ViewOrder/></td>
    </tr> */}
  </>
}


export default function Order(){

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
              <tr>
                <th scope="row" style={{textAlign: 'center'}}>1</th>
                <th scope="row" style={{textAlign: 'center'}}>1</th>
                <td>Võ Thành Hiếu</td>
                <td style={{textAlign: 'center'}}>Đã đặt</td>
                <td><ViewOrder/></td>
              </tr>

              <tr>
                <th scope="row" style={{textAlign: 'center'}}>2</th>
                <th scope="row" style={{textAlign: 'center'}}>2</th>
                <td>Nguyễn Hữu Bảo</td>
                <td style={{textAlign: 'center'}}>Đang giao</td>
                <td><ViewOrder/></td>
              </tr>

              <tr>
                <th scope="row" style={{textAlign: 'center'}}>3</th>
                <th scope="row" style={{textAlign: 'center'}}>3</th>
                <td>Nguyễn Hữu Phúc</td>
                <td style={{textAlign: 'center'}}>Đã giao</td>
                <td><ViewOrder/></td>
              </tr>

              <tr>
                <th scope="row" style={{textAlign: 'center'}}>4</th>
                <th scope="row" style={{textAlign: 'center'}}>4</th>
                <td>Nguyễn Quang Anh</td>
                <td style={{textAlign: 'center'}}>Đã hủy</td>
                <td><ViewOrder/></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>)
}