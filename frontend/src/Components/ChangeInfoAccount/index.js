import EditAccount from "./EditAccount";

export default function ChangeInfoAccount(){

  // const [isModalVisible, setIsModalVisible] = useState(false);
  // document.title = "Thông tin Tài khoản";
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
              <tr>
                <th scope="row" style={{textAlign: 'center'}}>1</th>
                <td>Võ Thành Hiếu</td>
                <td style={{textAlign: 'center'}}>Khách hàng</td>
                <td><EditAccount/></td>
              </tr>

              <tr>
                <th scope="row" style={{textAlign: 'center'}}>2</th>
                <td>Nguyễn Hữu Bảo</td>
                <td style={{textAlign: 'center'}}>Quản lý</td>
                <td><EditAccount/></td>
              </tr>

              <tr>
                <th scope="row" style={{textAlign: 'center'}}>3</th>
                <td>Nguyễn Hữu Phúc</td>
                <td style={{textAlign: 'center'}}>Quản lý</td>
                <td><EditAccount/></td>
              </tr>

              <tr>
                <th scope="row" style={{textAlign: 'center'}}>4</th>
                <td>Nguyễn Quang Anh</td>
                <td style={{textAlign: 'center'}}>Khách hàng</td>
                <td><EditAccount/></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>)
}