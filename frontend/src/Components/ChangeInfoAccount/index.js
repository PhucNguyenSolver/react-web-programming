import AdminEditAccount from "./AdminEditAccount";
import $ from 'jquery';

const item = {  
  id: 1,
  name: "Vo Thanh Hieu",
  role: "Khách hàng"
};

function InfoRow(props){
  return <>
      <tr>
      <th scope="row" style={{textAlign: 'center'}}>{props.id}</th>
      <td>{props.name}</td>
      <td style={{textAlign: 'center'}}>{props.role}</td>
      <td><AdminEditAccount/></td>
    </tr>
  </>
}

export default function ChangeInfoAccount(){

  $(function(){
    $.ajax({
      url: 'Controller/AccountController.php',
      type: 'GET',
      data: {rq:'allinfo'},
      dataType: 'text',
      success: function(data){
        data = JSON.parse(data);     
        let list = data.map((item, index) => {
          return <InfoRow id={item.accId} name={item.name} role={item.role}/>
        })
        // $('#list-info').html(list);
      }
    })
  })
    

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
            <tbody>
            <InfoRow id={item.id} name={item.name} role = {item.role}/>
              <div id="list-info">
                {/* {list} */}
                
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>)
}