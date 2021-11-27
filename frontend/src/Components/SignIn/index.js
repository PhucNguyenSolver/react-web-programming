import './styles.scss';
import * as Icon from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';
import {Input} from '../Utils/Input.js';
import $ from 'jquery';

export default function SignIn(){

  function valiEmail(email) {
    const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  $(function(){  
    //check vali email
    $('#email, #password').on('keyup', function () {
      var email = $('#email').val();
      var password = $('#password').val();
      var $err1=false;
      var $err2=false;

      if (password.length < 6 || password.length > 32){
        $('#messenge').html('Mật khẩu dài từ 6 đến 32 ký tự').css({'color': 'red'});
        $err2=true;    
      }
      else{
        $err2=false;
      }

      
      if(email.length < 5 || email.length > 320) {
        $('#messenge').html('Email dài từ 5 đến 320 ký tự').css({'color': 'red'});
        $err1=true;
      }
  
      else if (!valiEmail(email)) {
        $('#messenge').html('Email không hợp lệ').css({'color': 'red'}); 
        $err1=true;       
      }

      else{
        $err1=false; 
      }
      
      if ($err1 || $err2){
        $('#submit').attr("disabled", true); 
      }
      else{
        $('#messenge').html('').css({'style':'display:none'});
        $('#submit').removeAttr("disabled");
      }

    });


    //bam nut dang nhap
    $("#submit").on("click", function(event) {
      event.preventDefault();
      $.ajax({
        url: "/Controller/SignIn.php",
        type: "POST",
        data: $("#sign-in").serialize(),
        success: function(data) {
            
            if(data==="dadangnhap"){
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

    //dang nhap =gg
    $("#gg-login").on("click", function(event) {
      window.open(
        'https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=155293163360-f052p16tjdrs4fk17l3uadapt0pp0pcl.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%2FLib%2FGoogleLogin.php&state&scope=email%20profile&approval_prompt=auto',
        '_blank'
      );
      window.close();
    })

  })

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

                <form id="sign-in">
                  <Input type="text" fieldName='email' vnFieldName="Email" title="Hãy nhập đúng định dạng email"></Input>
                  <Input type="password" fieldName='password' vnFieldName="Mật khẩu" title="Mật khẩu chứa từ 6 đến 32 ký tự"></Input>

                  <span id='messenge' style={{'display':'inline-block'}}></span>
                  <div className="d-grid mb-2">
                    <Button variant="primary" className="btn-sign-in" type="submit" id="submit" disabled>Đăng nhập</Button>
                  </div>

                  <a className="d-block text-center mt-2 small" href="/sign-up"d>Chưa có tài khoản? Đăng ký</a>
                  <a className="d-block text-center mt-2 small" href="/forgot"d>Quên mật khẩu?</a>

                </form>

                <hr className="my-4"/>
                <div className="d-grid">
                  <Button variant="danger" className="btn-sign-in" id="gg-login"><Icon.Google></Icon.Google> Google</Button>                
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
  </>
  
}


