import './styles.scss';
import * as Icon from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';
import {Input} from '../Utils/Input.js';
import $ from 'jquery';

export default function Forgot(){

  function valiEmail(email) {
    const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  $(function(){  
    //check vali email
    $('#email').on('keyup', function () {
      var email = $('#email').val();
      var $err1=false;

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
      
      if ($err1){
        $('#forgotBtn').attr("disabled", true); 
      }
      else{
        $('#messenge').html('').css({'style':'display:none'});
        $('#forgotBtn').removeAttr("disabled");
      }

    });


    //bam nut quen mk
    $("#forgotBtn").on("click", function(event) {
      event.preventDefault();
      $.ajax({
        url: "/Controller/Forgot.php",
        type: "POST",
        data: $("#forgot").serialize(),
        success: function(data) {
            
            if(data==="dadangnhap"){
              alert('Bạn chưa đăng xuất');
              window.location.href = "/";
            }
            else if (data==='OK'){
              alert('Đã gửi mail khôi phục mật khẩu');
              window.location.href = "/sign-in";
            }
            else {
              $("#messenge").html(data);
            }
              
        }
      })
   
    })

  })

  document.title = "Quên mật khẩu";
  return <>
  <div className="forgot">
    <body>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden inner">
              <div className="card-img-left d-none d-md-flex">
                {/* {đặt ảnh nền bên trái} */}
              </div>
              <div className="card-body p-4 p-sm-5">

                <h1 className="card-title text-center mb-5">Quên mật khẩu</h1>

                <form id="forgot">
                  <Input type="text" fieldName='email' vnFieldName="Email" title="Hãy nhập đúng định dạng email"></Input>

                  <span id='messenge' style={{'display':'inline-block'}}></span>
                  <div className="d-grid mb-2">
                    <Button variant="primary" className="btn-sign-in" type="submit" id="forgotBtn" disabled>Quên mật khẩu</Button>
                  </div>

                </form>

                <hr className="my-4"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
  </>
  
}


