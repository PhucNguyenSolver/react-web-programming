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
            echo "dadangnhap";         
        }
        else{
            $password = hash('sha256', $password);
            $account = $log->checkLogin($email, $password);
            if($account != null){
                if($account->isAdmin != '1' && $account->isAdmin != '0'){//chua activate
                    echo "Tài khoản chưa được kích hoạt";
                    return;
                }
                //set time for PHPSESSID
                setcookie('PHPSESSID', session_id(), time() + (86400 * 30),"/");
                $_SESSION['id'] = $account->id;
                setcookie('id', $account->id, time() + (86400 * 30), "/");
                $_SESSION['email'] = $account->email;
                setcookie('email', $account->email, time() + (86400 * 30), "/");
                $_SESSION['isAdmin'] = $account->isAdmin;
                setcookie('isAdmin', $account->isAdmin, time() + (86400 * 30), "/");
                echo 'OK';
            }
            else{     
                echo '
                <p style="color:red">Sai email hoặc mật khẩu</p>
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