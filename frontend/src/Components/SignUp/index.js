import './styles.scss';
import * as Icon from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';
import {Input} from '../Utils/Input.js';
import $ from 'jquery';
import { Redirect } from 'react-router'
import * as Cookies from 'js-cookie';

export default function SignUp(){
  
  function valiEmail(email) {
    const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function valiUsername(username) {
    const re = /^[a-zA-Z0-9._]{5,20}$/;
    return re.test(String(username).toLowerCase());
  }

  $(function() {

    //check vali
    $('#email,#password,#username,#re-password').on('keyup', function () {
      var email = $('#email').val();
      var password = $('#password').val();
      var username = $('#username').val();
      var re_password = $('#re-password').val();
      var $err1=false;
      var $err2=false;
      var $err3=false;

      //password
      if(password.length < 6 || password.length > 32) {
        $('#messenge').html('Mật khẩu dài từ 6 đến 32 ký tự').css({'color': 'red'});
        $err1=true;
      }

      else if (password !== re_password) {
        $('#messenge').html('Mật khẩu không khớp').css({'color': 'red'});
        $err1=true;
      }

      else {
        $err1=false;
      }
      //email
      if(email.length < 5 || email.length > 320) {
        $('#messenge').html('Email dài từ 5 đến 320 ký tự').css({'color': 'red'});
        $err2=true;
      }

      else if (!valiEmail(email)) {
        $('#messenge').html('Email không hợp lệ').css({'color': 'red'});
        $err2=true;
      }

      else{
        $err2=false;
      }
      //username
      if(username.length < 5 || username.length > 20) {
        $('#messenge').html('Username dài từ 5 đến 20 ký tự').css({'color': 'red'});
        $err3=true;
      }

      else if (!valiUsername(username)) {
        $('#messenge').html('Username không hợp lệ').css({'color': 'red'});
        $err3=true;
      }

      else{
        $err3=false;
      }

      if ($err1 || $err2 || $err3){
        $('#submit').attr("disabled", true);
      }
      else{
        $('#messenge').html('').css({'style':'display:none'});
        $('#submit').removeAttr("disabled");
      }

    });

    //check da dang nhap chua
    $("#submit").on("click", function(event) {
      event.preventDefault();
      $.ajax({
        url: "/Controller/SignUp.php",
        type: "POST",
        data: $("#dangky").serialize(),
        success: function(data) {
            
            if(data==="chuadangxuat"){
              alert('Bạn chưa đăng xuất');
              window.location.href = "/";
            }
            else if(data==="OK"){
              alert('Hãy bấm vào đường link được gửi đến email ' + $("#email").val() + " để kích hoạt tài khoản");
              window.location.href = "/sign-in";
            }
            else {
              $("#messenge").html(data);
            }
              
        }
      })
    
    })
  });

  document.title = "Đăng ký";
  var isLogin = Cookies.get('email');
  if (isLogin){
    alert('Bạn chưa đăng xuất');
    return <Redirect to="/"></Redirect>
  }
  else{
    return <>
    <div className="sign-up">
      <body>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden inner">
                <div className="card-img-left d-none d-md-flex">
                  {/* {đặt ảnh nền bên trái} */}
                </div>
                <div className="card-body p-4 p-sm-5">

                  <h1 className="card-title text-center mb-5">Đăng ký tài khoản</h1>

                  <form id="dangky">
                    <Input type="text" fieldName='username' vnFieldName="Tên người dùng" title="Tên người dùng chỉ chứa các ký tự chữ, số, _ , . và dài từ 5 đến 20 ký tự"></Input>
                    <Input type="email" fieldName='email' vnFieldName="Email" title="Hãy nhập đúng định dạng email"></Input>
                    <Input type="password" fieldName='password' vnFieldName="Mật khẩu" title="Mật khẩu chứa từ 6 đến 32 ký tự"></Input>
                    <Input type="password" fieldName='re-password' vnFieldName="Xác nhận mật khẩu" maxlength="30"></Input>
                    <span id='messenge' style={{'display':'inline-block'}}></span>
                    

                    <div className="d-grid mb-2">
                      <Button variant="primary" className="btn-sign-up" type="submit" id ="submit" disabled>Đăng ký</Button>
                    </div>

                    <a className="d-block text-center mt-2 small" href="/sign-in"d>Đã có tài khoản? Đăng nhập</a>

                    <hr className="my-4"/>
                    <div className="d-grid">
                      <Button variant="danger" className="btn-sign-up" type="button" id="gg-submit"><Icon.Google></Icon.Google> Đăng nhập bằng Google</Button>                
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
}



