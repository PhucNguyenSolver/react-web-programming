<?php
    include '../Model/Log.php';
    session_start();

    $log = new Log();

    $email = $_POST['email'];
    $password = $_POST['password'];

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
            $password = hash('sha256', $password);
            $account = $log->checkLogin($email, $password);
            if($account != null){
                $_SESSION['email'] = $account->email;
                setcookie('email', session_id(), time() + (86400 * 30), "/");
                $_SESSION['isAdmin'] = $account->isAdmin;
                // setcookie('isAdmin', session_id(), time() + (86400 * 30), "/");
                echo 'OK';
            }
            else{     
                setcookie('PHPSESSID', '', time() - 3600, '/');
                echo '
                <p style="color:red">Sai email hoặc mật khẩu</p>
                ';
            }
        }
        
    }
    else{
        setcookie('PHPSESSID', '', time() - 3600, '/');
        echo '
        <p style="color:red">Thông tin không hợp lệ</p>
        ';
    }

?>