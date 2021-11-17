import Header from "../Utils/Header";
import Footer from "../Utils/Footer";
import './styles.css';
import * as Icon from 'react-bootstrap-icons';
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'

export default function ProductInfo() {
  document.title="Thông tin sản phẩm";
  return <>
    <Header></Header>

    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="img">
                <img src={pic1} alt="" className="details"/>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12 image ">
                <div className="imageSub active ">
                  <img src={pic1} alt="" className="subDetails" />
                </div>
                <div className="imageSub ">
                  <img src={pic2} alt="" className="subDetails" />
                </div>
                <div className="imageSub">
                  <img src={pic3} alt="" className="subDetails" />
                </div>
                <div className="imageSub">
                  <img src={pic4} alt="" className="subDetails" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <h3>Laptop Asus TUF Gaming F15 FX506HCB HN139T</h3>
              <div className="specs">
                <p>Thông số kỹ thuật</p>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row">CPU</th>
                      <th>i5 11400H</th>
                    </tr>
                    <tr>
                      <th scope="row">RAM</th>
                      <td>DDR4 8GB</td>
                    </tr>
                    <tr>
                      <th scope="row">Ổ cứng</th>
                      <td>SSD 512GB<br /> 2x HDD 1TB</td>
                    </tr>
                    <tr>
                      <th scope="row">Card đồ hoạ</th>
                      <td>NVIDIA RTX-3050<br /> AMD RADEON-R5-M335</td>
                    </tr>
                    <tr>
                      <th scope="row">Màn hình</th>
                      <td>LCD 15.6' FHD</td>
                    </tr>
                    <tr>
                      <th scope="row">Pin</th>
                      <td>Lithium 3000mAh</td>
                    </tr>
                    <tr>
                      <th scope="row">Trọng lượng</th>
                      <td>3kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Màu sắc</th>
                      <td>Đỏ, vàng, đen</td>
                    </tr>
                    <tr>
                      <th scope="row">Kích thước</th>
                      <td>Dài: 30cm<br /> Rộng: 20cm<br /> Dày: 2cm</td>
                    </tr>
                    <tr>
                      <th scope="row">Cổng giao tiếp</th>
                      <td>1x USB 2.0<br /> 2x HDMI</td>
                    </tr>
                    <tr>
                      <th scope="row">Hệ điều hành</th>
                      <td>Microsoft Windows 10 Home</td>
                    </tr>
                  </tbody>
                </table>
                <div className="price">

                  <table className="table">
                    <tbody className="priceDetail">
                      <tr>
                        <td>Giá cũ:</td>
                        <td><strike>25,990,000đ</strike></td>
                      </tr>
                      <tr>
                        <td>Giá mới:</td>
                        <td><span className="newPrice">24,990,000đ</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="buttonOrder">
                    <button className="btn btn-danger">
                      ĐẶT HÀNG
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="comment">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="userComment">
              <p>
                Bình luận của khách hàng về laptop Asus TUF Gaming F15 FX506HCB HN139T
              </p>
              <div className="picture">
                <textarea name id cols="100%" rows={6} defaultValue={""} />
                <div className="anh">
                  <div style={{display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center', width: '200px'}}>
                    <label className="btn btn-default">
                      <Icon.Camera className="camera" style={{width: '50px', height: '50px', fontSize: '40px', color: 'black'}} />
                      <input type="file" accept="image/*" multiple hidden />
                    </label>
                    <p style={{margin: 'auto', flex: 1}}>Chọn ảnh</p>
                  </div>
                  <div><button>Gửi bình luận</button></div>
                </div>
              </div>
            </div>
            <div className="commentList">
              <h4>159 bình luận</h4>
              <hr />
              <div className="comment1">
                <span />
                <h6>An Lam</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt et turpis habitasse ultrices condimentum velit. At nulla eu urna cras sed odio mauris vivamus erat. Elit mi massa nisl enim. Tristique massa sit est in senectus amet, ut nullam. Amet
                consectetur netus duis diam.
              </p>
              <div className="replyChoice">
                <p className="reply">Trả lời</p>
                <span>|</span>
                <p className="replyTime">9 tiếng trước</p>
              </div>
              <div className="subreply">
                <div className="subCmtUserName">
                  <span />
                  <h6>AdminName</h6>
                </div>
                <div className="square" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt et turpis habitasse ultrices condimentum velit. At nulla eu urna cras sed odio mauris vivamus erat. Elit mi massa nisl enim. Tristique massa sit est in senectus amet, ut nullam. Amet
                  consectetur netus duis diam.
                </p>
                <div className="replyChoice">
                  <p className="reply">Trả lời</p>
                  <span>|</span>
                  <p className="replyTime">1 tiếng trước</p>
                </div>
                <div className="role">
                  <p>Quản trị viên</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>

  </>
  
}