import './styles.scss';
import * as Icon from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';
import {Input} from './Input.js';
import $ from 'jquery'; 

$('#password, #re-password').on('keyup', function () {
  if ($('#password').val() === $('#re-password').val()) {
      $('#message').html('').css({'style':'display:none'});
      $('#submit').removeAttr("disabled");
  }
  else {
      $('#message').html('Mật khẩu không khớp').css({'color': 'red'});
      $('#submit').attr("disabled", true);
  }
});

export default function SignUp(){
  document.title = "Đăng ký";
  return <>
  <div className="sign-in">
    <body>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex">
                {/* {đặt ảnh nền bên trái} */}
              </div>
              <div className="card-body p-4 p-sm-5">

                <h1 className="card-title text-center mb-5">Đăng ký tài khoản</h1>

                <form>

                  <Input type="text" fieldName='username' vnFieldName="Tên người dùng" maxlength="20" pattern="[a-zA-Z0-9._]{4,20}" title="Tên người dùng chỉ chứa các ký tự chữ, số, _ , . và dài từ 4 đến 20 ký tự"></Input>
                  <Input type="email" fieldName='email' vnFieldName="Email" maxlength="320" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Hãy nhập đúng định dạng email"></Input>
                  <Input type="password" fieldName='password' vnFieldName="Mật khẩu" maxlength="32" pattern=".{6,32}" title="Mật khẩu chứa từ 6 đến 32 ký tự"></Input>
                  <Input type="password" fieldName='re-password' vnFieldName="Xác nhận mật khẩu" maxlength="30"></Input>
                  <span id='message'></span>

                  <div className="d-grid mb-2">
                    <Button variant="primary" className="btn-sign-up" type="submit" id ="submit">Đăng ký</Button>
                  </div>

                  <a className="d-block text-center mt-2 small" href="/sign-in">Đã có tài khoản? Đăng nhập</a>

                  <hr className="my-4"/>
                  <div className="d-grid">
                    <Button variant="danger" className="btn-sign-up" type="submit" id="gg-submit"><Icon.Google></Icon.Google> Đăng nhập bằng Google</Button>                
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
  </>
}
