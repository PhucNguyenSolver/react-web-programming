import './styles.scss';
import * as Icon from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';
import {Input} from '../Utils/Input.js';
import $ from 'jquery'; 

export default function SignIn(){
  document.title = "Đăng nhập";
  return <>
  <div className="sign-in">
    <body>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden inner">
              <div className="card-img-left d-none d-md-flex">
                {/* {đặt ảnh nền bên trái} */}
              </div>
              <div className="card-body p-4 p-sm-5">

                <h1 className="card-title text-center mb-5">Đăng nhập</h1>

                <form>

                  <Input type="email" fieldName='email' vnFieldName="Email" maxlength="320" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Hãy nhập đúng định dạng email"></Input>
                  <Input type="password" fieldName='password' vnFieldName="Mật khẩu" maxlength="32" pattern=".{6,32}" title="Mật khẩu chứa từ 6 đến 32 ký tự"></Input>

                  <div className="d-grid mb-2">
                    <Button variant="primary" className="btn-sign-in" type="submit" id ="submit">Đăng nhập</Button>
                  </div>

                  <a className="d-block text-center mt-2 small" href="/sign-up"d>Chưa có tài khoản? Đăng ký</a>

                  <hr className="my-4"/>
                  <div className="d-grid">
                    <Button variant="danger" className="btn-sign-in" type="button" id="gg-submit"><Icon.Google></Icon.Google> Đăng nhập bằng Google</Button>                
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

$(window).on( "load", function() {

});

$(function() {// ready
  
});

