import AdminEditAccount from "./AdminEditAccount";
import $ from 'jquery';
import { useState,useEffect } from "react";

function InfoRow(props) {
  const [info, setInfo] = useState(false);
  
  useEffect(() => {
    setInfo(props);
  },[]);
  return <>
      <tr>
      <th scope="row" style={{textAlign: 'center'}}>{info.id}</th>
      <td>{info.name}</td>
      <td style={{textAlign: 'center'}}>{info.role}</td>
      <td><AdminEditAccount id = {info.id}/></td>
    </tr>
  </>
}

export default function ChangeInfoAccount(){


  const [list, setList] = useState([]);

  useEffect(() => {
    $.ajax({
      url: 'Controller/AccountController.php',
      type: 'GET',
      data: {rq:'allinfo'},
      dataType: 'text',
      success: function(data){
        data = JSON.parse(data);     
        let list = data.map((item, index) => {
          if (item.isAdmin==="1")
            item.isAdmin = "Quản lý";
          else if (item.isAdmin==="0")
            item.isAdmin = "Khách hàng";
          return <InfoRow id={item.accId} name={item.name} role={item.isAdmin}/>
        })
        setList(list);
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
                <th scope="col" style={{textAlign: 'center'}}>ID</th>
                <th scope="col">Tên người dùng</th>
                <th scope="col" style={{textAlign: 'center'}}>Vai trò</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id = "list-info">
            {list}            
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>)
}