import './styles.scss';
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import avatar from './avatar.png'
import avatar2 from './avatar2.png'

export default function ProductInfo() {
  document.title="Thông tin sản phẩm";
  return <>
    <div className="container">
    <div className="product-info">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="img">
                  <img src={pic1} alt="" className="details"/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 image">
                  <div className="imageSub active">
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
                        <td>i5 11400H</td>
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
                        <tr>
                          <td>Đánh giá:</td>
                          <td>9.5/10</td>
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
                  <div><button type="button" className="btn btn-danger delCmtBtn">Xoá</button></div>
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
    </div>
    </div>

  </>
  
}