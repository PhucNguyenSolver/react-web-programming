import './styles.scss';
import * as Icon from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';
import {Input} from '../Utils/Input.js';
import $ from 'jquery';
import Helmet from 'react-helmet';
import { Redirect } from 'react-router'
import * as Cookies from 'js-cookie';

export default function SignIn(){

  function valiEmail(email) {
    const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
  var isLogin = Cookies.get('PHPSESSID');

  $(function(){  
    
    //check vali email
    $('#email').on('keyup', function () {
      var email = $('#email').val();

      if (!valiEmail(email)) {
        $('#messenge').html('Email không hợp lệ').css({'color': 'red'});
        $('#submit').attr("disabled", true);         
      }
      else if(email.length < 5 || email.length > 320) {
        $('#messenge').html('Email dài từ 5 đến 320').css({'color': 'red'});
        $('#submit').attr("disabled", true);
      }
      else{
        $('#messenge').html('').css({'style':'display:none'});
        $('#submit').removeAttr("disabled");
      }
    });
    //check vali password
    $('#password').on('keyup', function () {
      var password = $('#password').val();

      if (password.length < 6 || password.length > 32){
        $('#messenge').html('Mật khẩu dài từ 6 đến 32 ký tự').css({'color': 'red'});
        $('#submit').attr("disabled", true);    
      }
      else{
        $('#messenge').html('').css({'style':'display:none'});
        $('#submit').removeAttr("disabled");
      }
    });

    $("#submit").on("click", function(event) {
      event.preventDefault();
      $.ajax({
        url: "/Controller/SignIn.php",
        type: "POST",
        data: $("#sign-in").serialize(),
        success: function(data) {
            
            if(data==="-1"){
              alert('Bạn đã đăng nhập rồi');
              window.location.href = "/";
            }
            else if (data==='OK'){
              window.location.href = "/";
            }
            else {
              $("#messenge").html(data);
            }
              
        }
      })
   
    })
  })

  document.title = "Đăng nhập";
  

  if (isLogin){
    return <Redirect to="/"></Redirect>
  }
  else {
    return <>
    <div className="sign-in">
      <body>
        {/* <Helmet>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
          <script>{''}</script>
        </Helmet> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden inner">
                <div className="card-img-left d-none d-md-flex">
                  {/* {đặt ảnh nền bên trái} */}
                </div>
                <div className="card-body p-4 p-sm-5">

                  <h1 className="card-title text-center mb-5">Đăng nhập</h1>

                  <form id="sign-in" method="post" action="/Controller/SignIn.php">
                    <Input type="text" fieldName='email' vnFieldName="Email" title="Hãy nhập đúng định dạng email"></Input>
                    <Input type="password" fieldName='password' vnFieldName="Mật khẩu" title="Mật khẩu chứa từ 6 đến 32 ký tự"></Input>

                    <span id='messenge' style={{'display':'inline-block'}}></span>
                    <div className="d-grid mb-2">
                      <Button variant="primary" className="btn-sign-in" type="submit" id="submit">Đăng nhập</Button>
                    </div>

                    <a className="d-block text-center mt-2 small" href="/sign-up"d>Chưa có tài khoản? Đăng ký</a>

                    <hr className="my-4"/>
                    <div className="d-grid">
                      <Button variant="danger" className="btn-sign-in" type="button" id="gg-login"><Icon.Google></Icon.Google> Đăng nhập bằng Google</Button>                
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


