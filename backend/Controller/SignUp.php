<?php
    include '../Model/Log.php';
    session_start();

    $log = new Log();
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $err = false;

    //check valid username
    if (!preg_match("/^[a-zA-Z0-9._]{5,20}$/", $username)) {
        $err = true;
    }
    elseif(strlen($username) < 5 || strlen($username) > 20){
        $err = true;
    }

    //check valid email    
    if (!preg_match("/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/", $email)) {
        $err = true;
    }
    elseif(strlen($email) < 5 || strlen($email) > 320){
        $err = true;
    }

    //check vali password
    if(strlen($password) < 6 || strlen($password) > 32){
        $err = true;
    }

    if(!$err){
        if(isset($_SESSION['email'])){
            echo "chuadangxuat";         
        }
        else{
            $res = $log->signUp($username, $email, $password);
            if ($res == 'username') {
                setcookie('PHPSESSID', '', time() - 3600, '/');
                echo '
                <p style="color:red">Username đã tồn tại</p>
                ';
            }
            elseif ($res == 'email') {
                setcookie('PHPSESSID', '', time() - 3600, '/');
                echo '
                <p style="color:red">Email đã tồn tại</p>
                ';
            }
            elseif ($res == 'OK') {
                setcookie('PHPSESSID', '', time() - 3600, '/');
                echo 'OK';
            }
            else{
                setcookie('PHPSESSID', '', time() - 3600, '/');
                echo '
                <p style="color:red">Đăng ký thất bại</p>
                ';
            }
        }
        
    }
    else{//thong tin nhap bi sai
        echo '
        <p style="color:red">Thông tin không hợp lệ</p>
        ';
    }

?>