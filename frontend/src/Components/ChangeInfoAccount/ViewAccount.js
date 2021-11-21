
  {false && <div className="container" style={{marginTop: '0.5%'}}>
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
            <td>
              <button type="button" className="btn btn-outline-primary btn-sm" style={{float: 'right'}} data-bs-toggle="modal" data-bs-target="#staticFirst"
                onClick={() => setIsModalVisible(true)}
              >Chỉnh sửa
              </button>
            </td>
          </tr>

          <tr>
            <th scope="row" style={{textAlign: 'center'}}>2</th>
            <td>Nguyễn Hữu Bảo</td>
            <td style={{textAlign: 'center'}}>Quản lý</td>
            <td>
              <button type="button" className="btn btn-outline-primary btn-sm" style={{float: 'right'}} data-bs-toggle="modal" data-bs-target="#staticSecond">
                Chỉnh sửa
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row" style={{textAlign: 'center'}}>3</th>
            <td>Nguyễn Hữu Phúc</td>
            <td style={{textAlign: 'center'}}>Quản lý</td>
            <td>
              <button type="button" className="btn btn-outline-primary btn-sm" style={{float: 'right'}} data-bs-toggle="modal" data-bs-target="#staticThere">
                Chỉnh sửa
              </button>
                              
              <div className="modal fade" id="staticThere" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Thông tin người dùng</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
                        <div className="col-sm-6">
                          <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                        </div>
                      </div>
                      <div className="row justify-content-md-center">
                        <div  className="col-sm-10">
                          <div className="mb-3 row">
                            <label for="staticId" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Id</label>
                            <div className="col-sm-8">
                              <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticId" value="3"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticName" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Tên người dùng</label>
                            <div className="col-sm-8">
                              <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticName" value="Nguyễn Hữu Phúc"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticAccount" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Tên tài khoản</label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" id="staticAccount" value="PhucNguyen"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticPassword" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Mật khẩu</label>
                            <div className="col-sm-8">
                              <input type="password" className="form-control" id="staticPassword" value="123456789"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Email</label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" id="staticEmail" value="phucnguyen@gmail.com"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticPhone" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Số điện thoại</label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" id="staticPhone" value="01234598884"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticAddress" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Địa chỉ</label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" id="staticAddress" value="Tp.HCM"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticRule" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Vai trò</label>
                            <div className="col-sm-8">
                              <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticRule" value="Quản lý"/>
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
            <th scope="row" style={{textAlign: 'center'}}>4</th>
            <td>Nguyễn Quang Anh</td>
            <td style={{textAlign: 'center'}}>Khách hàng</td>
            <td>
              <button type="button" className="btn btn-outline-primary btn-sm" style={{float: 'right'}} data-bs-toggle="modal" data-bs-target="#staticFour">
                Chỉnh sửa
              </button>
                              
              <div className="modal fade" id="staticFour" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Thông tin người dùng</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="row justify-content-md-center" style={{marginBottom: '2%'}}>
                        <div className="col-sm-6">
                          <img className="img-fluid" style={{width: '100%'}} src={pic} alt=""/>
                        </div>
                      </div>
                      <div className="row justify-content-md-center">
                        <div  className="col-sm-10">
                          <div className="mb-3 row">
                            <label for="staticId" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Id</label>
                            <div className="col-sm-8">
                              <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticId" value="4"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticName" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Tên người dùng</label>
                            <div className="col-sm-8">
                              <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticName" value="Nguyễn Quang Anh"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticAccount" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Tên tài khoản</label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" id="staticAccount" value="QuangAnh"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticPassword" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Mật khẩu</label>
                            <div className="col-sm-8">
                              <input type="password" className="form-control" id="staticPassword" value="123456789"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Email</label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" id="staticEmail" value="quang.anh@gmail.com"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticPhone" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Số điện thoại</label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" id="staticPhone" value="0123454444"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticAddress" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Địa chỉ</label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" id="staticAddress" value="Tp.HCM"/>
                            </div>
                          </div>
                                      
                          <div className="mb-3 row">
                            <label for="staticRule" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Vai trò</label>
                            <div className="col-sm-8">
                              <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticRule" value="Khách hàng"/>
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
</div>}
