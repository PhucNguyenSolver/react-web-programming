import React from 'react';
const pic = "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png";

export default function EditAccount () {
  return (
    <>
    <button type="button" className="btn btn-outline-primary btn-sm" style={{float: 'right'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
      Chỉnh sửa
    </button>

     <div className="modal" id="staticSecond" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                      <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticId" value="2"/>
                    </div>
                  </div>
                              
                  <div className="mb-3 row">
                    <label for="staticName" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Tên người dùng</label>
                    <div className="col-sm-8">
                      <input type="text" readonly className="form-control" style={{backgroundColor: 'white'}} id="staticName" value="Nguyễn Hữu Bảo"/>
                    </div>
                  </div>
                              
                  <div className="mb-3 row">
                    <label for="staticAccount" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Tên tài khoản</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="staticAccount" value="HuuBao"/>
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
                      <input type="text" className="form-control" id="staticEmail" value="bao.nguyen@gmail.com"/>
                    </div>
                  </div>
                              
                  <div className="mb-3 row">
                    <label for="staticPhone" className="col-sm-4 col-form-label" style={{fontWeight: 'bold'}}>Số điện thoại</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="staticPhone" value="0123459854"/>
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
    </>
  );
}
