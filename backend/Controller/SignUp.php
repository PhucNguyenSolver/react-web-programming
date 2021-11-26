<?php
    include '../Model/Log.php';
    session_start();

    $log = new Log();
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    //check valid username
    //todo

    //check valid email
    $err = false;
    if (!preg_match("/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/", $email)) {
        $err = true;
    }
    elseif(strlen($email) < 5 || strlen($email) > 320){
        $err = true;
    }
    if(strlen($password) < 6 || strlen($password) > 32){
        $err = true;
    }
    if(!$err){
        if(isset($_SESSION['email'])){
            echo "-1";         
        }
        else{
            echo "-2";
        }
        
    }
    else{//thong tin nhap bi sai
        echo '
        <p style="color:red">Thông tin không hợp lệ</p>
        ';
    }

?>