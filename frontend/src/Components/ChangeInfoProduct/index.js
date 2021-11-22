import EditProduct from "./EditProduct";
import EditProductInsert from "./EditProductInsert";

export default function ChangeInfoProduct(){
  // document.title = "Thông tin sản phẩm";
  return <>
  
  <div className="container" style={{marginTop: '0.5%'}}>
    <div className="row justify-content-md-center">
      <div className="col-sm-8">
        <div style={{marginTop: '1%', marginBottom: '1%'}}>
          <EditProductInsert/>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" style={{textAlign: 'center'}}>Mã sản phẩm</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col" style={{textAlign: 'center'}}>Hãng</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" style={{textAlign: 'center'}}>1</th>
              <td>Laptop Asus TUF Gaming F15 FX506HCB HN139T</td>
              <td style={{textAlign: 'center'}}>Asus</td>
              <td><EditProduct/></td>
            </tr>

            <tr>
              <th scope="row" style={{textAlign: 'center'}}>2</th>
              <td>Laptop Asus TUF Gaming F15 FX506HCB HN139T</td>
              <td style={{textAlign: 'center'}}>Asus</td>
              <td><EditProduct/></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


  </>
}