const pic = "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png";

export default function ChangeInfoProduct(){
  // document.title = "Thông tin sản phẩm";
  return <>

  <div className="container" style={{marginTop: '0.5%'}}>
    <div className="row justify-content-md-center">
      <div className="col-sm-8">
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
              <td>
                <button type="button" className="btn btn-outline-primary btn-sm" style={{float: 'right'}} data-bs-toggle="modal" data-bs-target="#staticFirst">
                  Chỉnh sửa
                </button>
                                
                <div className="modal fade" id="staticFirst" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Thông tin sản phẩm</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
                          <div className="col-sm-6">
                            <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                          </div>
                        </div>
                        <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
                          <div className="col-sm">
                            <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                          </div>
                          <div className="col-sm">
                            <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                          </div>
                          <div className="col-sm">
                            <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                           </div>
                        </div>
                        <div className="row justify-content-md-center">
                          <div  className="col-sm-10">
                            <div className="mb-3 row">
                              <label for="staticId" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Mã sản phẩm</label>
                              <div className="col-sm-8">
                                <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticId" value="1"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticName" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Tên sản phẩm</label>
                              <div className="col-sm-8">
                                <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticName" value="Laptop Asus TUF Gaming F15 FX506HCB HN139T"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticCompany" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Hãng</label>
                              <div className="col-sm-8">
                                <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticCompany" value="Asus"/>
                              </div>
                            </div>
                                                                                                                                   
                            <div className="mb-3 row">
                              <label for="staticCPU" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>CPU</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticCPU" value="i5 11400H"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticRam" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>RAM</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticRam" value="DDR4 8GB"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticDrive" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Ổ cứng</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticDrive" value="SSD 512GB; 2x HDD 1TB"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticCard" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Card đồ họa</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticCard" value="NVIDIA RTX-3050; AMD RADEON-R5-M335"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticScreen" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Màn hình</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticScreen" value="LCD 15.6' FHD"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticPin" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Pin</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticPin" value="Lithium 3000mAh"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticWeight" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Trọng lượng</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticWeight" value="3kg"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticColor" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Màu sắc</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticColor" value="Đỏ, vàng, đen"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticSize" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Kích thước</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticSize" value="Dài: 30cm; Rộng: 20cm; Dày: 2cm"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticGate" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Cổng giao tiếp</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticGate" value="1x USB 2.0; 2x HDMI"/>
                              </div>
                            </div>
                                                        
                            <div className="mb-3 row">
                              <label for="staticSystem" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Hệ điều hành</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticSystem" value="Microsoft Windows 10 Home"/>
                              </div>
                            </div>
                                                        
                            <div className="mb-3 row">
                              <label for="staticOldPrice" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Giá cũ</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticOldPrice" value="25,990,000đ"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticNewPrice" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Giá mới</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticNewPrice" value="24,990,000đ"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">       
                        <button type="button" className="btn btn-primary">Lưu thay đổi</button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row" style={{textAlign: 'center'}}>2</th>
              <td>Laptop Asus TUF Gaming F15 FX506HCB HN139T</td>
              <td style={{textAlign: 'center'}}>Asus</td>
              <td>
                <button type="button" className="btn btn-outline-primary btn-sm" style={{float: 'right'}} data-bs-toggle="modal" data-bs-target="#staticSecond">
                  Chỉnh sửa
                </button>
                                
                <div className="modal fade" id="staticSecond" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Thông tin sản phẩm</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
                          <div className="col-sm-6">
                            <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                          </div>
                        </div>
                        <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
                          <div className="col-sm">
                            <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                          </div>
                          <div className="col-sm">
                            <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                          </div>
                          <div className="col-sm">
                            <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                           </div>
                        </div>
                        <div className="row justify-content-md-center">
                          <div  className="col-sm-10">
                            <div className="mb-3 row">
                              <label for="staticId" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Mã sản phẩm</label>
                              <div className="col-sm-8">
                                <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticId" value="2"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticName" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Tên sản phẩm</label>
                              <div className="col-sm-8">
                                <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticName" value="Laptop Asus TUF Gaming F15 FX506HCB HN139T"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticCompany" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Hãng</label>
                              <div className="col-sm-8">
                                <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticCompany" value="Asus"/>
                              </div>
                            </div>
                                                                                                                                   
                            <div className="mb-3 row">
                              <label for="staticCPU" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>CPU</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticCPU" value="i5 11400H"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticRam" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>RAM</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticRam" value="DDR4 8GB"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticDrive" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Ổ cứng</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticDrive" value="SSD 512GB; 2x HDD 1TB"/>
                              </div>
                            </div>
                                        
                            <div className="mb-3 row">
                              <label for="staticCard" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Card đồ họa</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticCard" value="NVIDIA RTX-3050; AMD RADEON-R5-M335"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticScreen" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Màn hình</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticScreen" value="LCD 15.6' FHD"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticPin" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Pin</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticPin" value="Lithium 3000mAh"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticWeight" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Trọng lượng</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticWeight" value="3kg"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticColor" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Màu sắc</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticColor" value="Đỏ, vàng, đen"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticSize" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Kích thước</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticSize" value="Dài: 30cm; Rộng: 20cm; Dày: 2cm"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticGate" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Cổng giao tiếp</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticGate" value="1x USB 2.0; 2x HDMI"/>
                              </div>
                            </div>
                                                        
                            <div className="mb-3 row">
                              <label for="staticSystem" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Hệ điều hành</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticSystem" value="Microsoft Windows 10 Home"/>
                              </div>
                            </div>
                                                        
                            <div className="mb-3 row">
                              <label for="staticOldPrice" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Giá cũ</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticOldPrice" value="25,990,000đ"/>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <label for="staticNewPrice" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Giá mới</label>
                              <div className="col-sm-8">
                                <input type="text" className="form-control" id="staticNewPrice" value="24,990,000đ"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">       
                        <button type="button" className="btn btn-primary">Lưu thay đổi</button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


  </>
}