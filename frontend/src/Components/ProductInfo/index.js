import './styles.scss';
import avatar from './avatar.png'
import avatar2 from './avatar2.png'
import axios  from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Cart } from 'react-bootstrap-icons';
import Comment from '../Article/Comment';

function numberWithCommas(x) {
  if(x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  else return 0;
}

function newCost(oldCost, discount) {
  return Math.round(oldCost*(1-discount/100));
}

export default function ProductInfo() {
  document.title="Thông tin sản phẩm";
  const {productId} = useParams();
  const [productInfo, setProductInfo] = useState('');
  const [images, setImages] = useState([]);
  const [curImgId, setCurImgId] = useState();

  useEffect(() => {
    axios.get("/Controller/ProductController.php/?id=" + productId)
    .then(res => {
      setProductInfo(res.data);
      console.log(res.data);
      setImages([
        res.data.image1,
        res.data.image2,
        res.data.image3,
        res.data.image4,
      ]);
      setCurImgId(0);
    })
    .catch(err => {
      alert("occur when loading products");
    })
  }, [])
  console.log(productInfo);

  // cart in local storage
  let cart = [];
  const addToCart = async () => {
    let storage = localStorage.getItem('cart');
    if(storage) {
      cart = JSON.parse(storage);
    }
    let product = {
      id: productInfo.productId,
      name: productInfo.name,
      img: productInfo.image1,
      price: newCost(productInfo.oldCost, productInfo.discount)
    }
    let item = cart.find(c => c.product.id === product.id);
    if(item) {
      item.quantity += 1;
    }
    else {
      cart.push({product, quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart)); 
  }
  return <>
    <div className="container">
    <div className="product-info">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="row m-4">
                {isNaN(curImgId) ? null :
                <div className="img mw-100" style={{}}>
                  <img src={images[curImgId]} alt="" className="details"/>
                </div>}
              </div>
              <div className="row p-3">
                <div className="col-lg-12 image p-3">
                  {images.map((url, index) => (
                    <div className={(index === curImgId) ? 'imageSub active' : 'imageSub'}
                      onClick={() => {setCurImgId(index)}}
                    >
                      <img src={url} alt="" className="subDetails" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info">
                <h3>{productInfo.name}</h3>
                <div className="specs">
                  <h4 className="text-primary mb-1">Thông số kỹ thuật</h4>
                  <table className="table table-bordered mb-3">
                    <tbody>
                      <tr>
                        <th scope="row">CPU</th>
                        <td>{productInfo.CPU}</td>
                      </tr>
                      <tr>
                        <th scope="row">RAM</th>
                        <td>{productInfo.RAM}</td>
                      </tr>
                      <tr>
                        <th scope="row">Ổ cứng</th>
                        <td>{productInfo.drive}</td>
                      </tr>
                      <tr>
                        <th scope="row">Card đồ hoạ</th>
                        <td>{productInfo.GPU}</td>
                      </tr>
                      <tr>
                        <th scope="row">Màn hình</th>
                        <td>{productInfo.screen}</td>
                      </tr>
                      <tr>
                        <th scope="row">Pin</th>
                        <td>{productInfo.battery}</td>
                      </tr>
                      <tr>
                        <th scope="row">Trọng lượng</th>
                        <td>{productInfo.weight}</td>
                      </tr>
                      <tr>
                        <th scope="row">Màu sắc</th>
                        <td>{productInfo.color}</td>
                      </tr>
                      <tr>
                        <th scope="row">Kích thước</th>
                        <td>{productInfo.size}</td>
                      </tr>
                      <tr>
                        <th scope="row">Cổng giao tiếp</th>
                        <td>{productInfo.port}</td>
                      </tr>
                      <tr>
                        <th scope="row">Hệ điều hành</th>
                        <td>{productInfo.OS}</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="price">

                    <table className="table">
                      <tbody className="priceDetail fs-lg fw-bold">
                        <tr>
                          <td>Giá cũ:</td>
                          <td><strike>{numberWithCommas(productInfo.oldCost) + 'đ'}</strike></td>
                        </tr>
                        <tr>
                          <td>Giá mới:</td>
                          <td><span className="newPrice">{numberWithCommas(newCost(productInfo.oldCost,productInfo.discount)) + 'đ'}</span></td>
                        </tr>
                        <tr>
                          <td>Đánh giá:</td>
                          <td>9.5/10</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="buttonOrder">
                      <button className="btn btn-primary rounded-3" onClick={addToCart}>
                        <span className="d-flex flex-col align-items-center justify-content-evenly">
                          ĐẶT HÀNG
                          <Cart/>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true ? null :
      <div className="commentPart">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="userComment">
                <p>
                  Bình luận của khách hàng về laptop Asus TUF Gaming F15 FX506HCB HN139T
                </p>
                <div className="cmtBox">
                  <textarea cols="100%" rows={6} defaultValue={""} />
                  <div className="cmtBtn">
                    <button>Gửi bình luận</button>
                  </div>
                </div>
              </div>
              <div className="commentList">
                <h4>159 bình luận</h4>
                <hr />
                <div className="comment">
                  <div className="avatar" style={{backgroundImage: "url(" + avatar + ")"}} />
                  <h6 className="userName">An Lam</h6>   
                  <div className="role" style={{display:"none"}}></div>         
                  <div className="cmtTime">9 tiếng trước</div>
                  <div><button type="button" className="btn btn-primary delCmtBtn">Xoá</button></div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt et turpis habitasse ultrices condimentum velit. At nulla eu urna cras sed odio mauris vivamus erat. Elit mi massa nisl enim. Tristique massa sit est in senectus amet, ut nullam. Amet
                  consectetur netus duis diam.
                </p>

                <div className="comment">
                  <div className="avatar" style={{backgroundImage: "url(" + avatar2 + ")"}} />
                  <h6 className="userName">An Lam</h6>
                  <div className="role">Quản trị viên</div>
                  <div className="cmtTime">9 tiếng trước</div>
                  <div><button type="button"  style={{display:"none"}} className="btn btn-danger delCmtBtn">Xoá</button></div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt et turpis habitasse ultrices condimentum velit. At nulla eu urna cras sed odio mauris vivamus erat. Elit mi massa nisl enim. Tristique massa sit est in senectus amet, ut nullam. Amet
                  consectetur netus duis diam.
                </p>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
    </div>

    <div class="container">
      <div class="col-lg-8">
          <Comment productId={productId}/> 
      </div>
    </div>
  </>
  
}