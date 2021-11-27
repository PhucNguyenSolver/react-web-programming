<?php
    include '../Model/Log.php';
    session_start();

    $log = new Log();

    $email = $_POST['email'];

    //check valid email
    $err = false;
    if (!preg_match("/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/", $email)) {
        $err = true;
    }
    elseif(strlen($email) < 5 || strlen($email) > 320){
        $err = true;
    }
    if(!$err){

        if(isset($_SESSION['email'])){
            echo "dadangnhap";       
        }
        else{
            
            $res = $log->forgot($email);

            if ($res == 'email') {
                echo '
                <p style="color:red">Email không tồn tại!</p>
                ';
            }
            elseif ($res == 'OK') {
                echo 'OK';
            }
            else{
                echo '
                <p style="color:red">Khôi phục thất bại!</p>
                ';
            }
        }
        
    }
    else{
        echo '
        <p style="color:red">Thông tin không hợp lệ</p>
        ';
    }

?>