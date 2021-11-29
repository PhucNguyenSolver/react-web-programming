import ViewOrder from "./viewOrder";

export default function OrderCustomer(){

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
                <th scope="col" style={{textAlign: 'center'}}>Mã đơn hàng</th>
                <th scope="col" style={{textAlign: 'center'}}>Ngày đặt hàng</th>
                <th scope="col" style={{textAlign: 'center'}}>Tình trạng đơn hàng</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{textAlign: 'center'}}>1</th>
                <th scope="row" style={{textAlign: 'center'}}>15/07/2021</th>
                <td style={{textAlign: 'center'}}>Đã đặt</td>
                <td><ViewOrder/></td>
              </tr>

              <tr>
                <th scope="row" style={{textAlign: 'center'}}>2</th>
                <th scope="row" style={{textAlign: 'center'}}>20/08/2021</th>
                <td style={{textAlign: 'center'}}>Đang giao</td>
                <td><ViewOrder/></td>
              </tr>

              <tr>
                <th scope="row" style={{textAlign: 'center'}}>3</th>
                <th scope="row" style={{textAlign: 'center'}}>01/11/2021</th>
                <td style={{textAlign: 'center'}}>Đã giao</td>
                <td><ViewOrder/></td>
              </tr>

              <tr>
                <th scope="row" style={{textAlign: 'center'}}>4</th>
                <th scope="row" style={{textAlign: 'center'}}>15/11/2021</th>
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