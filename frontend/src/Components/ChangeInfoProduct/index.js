import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";
import RemoveProduct from "./RemoveProduct";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function ChangeInfoProduct(){
  document.title = "Thông tin sản phẩm";
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    axios.get("/Controller/ProductController.php/?rq=all")
    .then( res => {
      setProducts(res.data)
    })
    .catch(err => {
      alert("cannot load products");
    })
  }, [])
  console.log(products);
  return <>
  
  <div className="container" style={{marginTop: '0.5%'}}>
    <div className="row justify-content-md-center">
      <div className="col-sm-8">
        <div style={{marginTop: '1%', marginBottom: '1%'}}>
          <AddProduct />
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
          {products.map((val) => {
            return(
              <tr>
                <th scope="row" style={{textAlign: 'center'}}>{val.productId}</th>
                <td>{val.name}</td>
                <td style={{textAlign: 'center'}}>{val.manu}</td>
                <td>
                  <div class="row">
                      <div className="col-sm-8">
                        <EditProduct id={val.productId}/>
                      </div>
                      <div className="col-sm-4">
                        <RemoveProduct id={val.productId} />
                      </div>
                  </div>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </>
}