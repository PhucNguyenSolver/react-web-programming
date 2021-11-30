<?php

use GuzzleHttp\Cookie\SetCookie;

include_once '../Model/AccountModel.php';
    include '../Lib/Function.php';
    // header("Content-Type: application/json; charset=UTF-8");
    
    $model = new AccountModel();
    
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        
        if(isset($_GET['rq'])){
            if(count($_GET) == 1){
                $rq = $_GET['rq'];
                if($rq == 'info'){//?rq=info chính người dùng xem thông tin mình
                    if(isLogin()){
                        echo $model->getInfoById($_SESSION['id']);
                    }
                    else{
                        echo "{error: 'Chưa đăng nhập'}";
                        setcookie('PHPSESSID', '', time() - 3600, '/');
                        setcookie('id', '', time() - 3600, '/');
                        setcookie('email', '', time() - 3600, '/');
                        setcookie('isAdmin', '', time() - 3600, '/');
                        alert($_SESSION['email']." đã đăng xuất!");
                        session_unset();
                        session_destroy();
                    }
                    
                }
                else if($rq == 'allinfo'){//?rq=allinfo
                    if(isAdmin()){
                        echo $model->getAllInfo();
                    }
                    else{
                        echo "{error: '403 forbidden'}";
                        setcookie('PHPSESSID', '', time() - 3600, '/');
                        setcookie('id', '', time() - 3600, '/');
                        setcookie('email', '', time() - 3600, '/');
                        setcookie('isAdmin', '', time() - 3600, '/');
                        alert($_SESSION['email']." đã đăng xuất!");
                        session_unset();
                        session_destroy();
                    }
                }
                else{
                    echo "{error: '404 not found'}";
                }
            }
            if (count($_GET) == 2) {
                $rq = $_GET['rq'];
                $id = $_GET['id'];
                if($rq == 'info'){//?rq=info&id=1
                    if(isAdmin()){//này là ad xem thông tin từng người
                        echo $model->getInfoById($id);
                    }
                    else{
                        echo "{error: '403 forbidden'}";
                        setcookie('PHPSESSID', '', time() - 3600, '/');
                        setcookie('id', '', time() - 3600, '/');
                        setcookie('email', '', time() - 3600, '/');
                        setcookie('isAdmin', '', time() - 3600, '/');
                        alert($_SESSION['email']." đã đăng xuất!");
                        session_unset();
                        session_destroy();
                    }
                }
                else{
                    echo "{error: '404 not found'}";
                }
            }
        }
    }

    else if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['rq'])){

            if($_POST['rq']=="update" && isset(($_POST['data']))){
                if(isLogin()){
                    $data = $_POST['data'];
                    $data = json_decode($data, true);
                    $result = $model->updateInfo($data);
                    if($result){
                        echo "{success: 'Cập nhật thành công'}";
                    }
                    else{
                        echo "{error: 'Cập nhật thất bại'}";
                    }
                }
                else{
                    echo "{error: 'Chưa đăng nhập'}";
                    setcookie('PHPSESSID', '', time() - 3600, '/');
                    setcookie('id', '', time() - 3600, '/');
                    setcookie('email', '', time() - 3600, '/');
                    setcookie('isAdmin', '', time() - 3600, '/');
                    alert($_SESSION['email']." đã đăng xuất!");
                    session_unset();
                    session_destroy();
                }
            }
            
            else if($_POST['rq']=="delete" && isset($_POST['id'])){
                if(isAdmin()){
                    if ($_POST['id']==$_SESSION['id']) {
                        echo "error";
                    }
                    else{
                        $id = $_POST['id'];
                        $result = $model->deleteAccount($id);
                        if($result){
                            echo "{success: 'Xóa thành công'}";
                        }
                        else{
                            echo "{error: 'Xóa thất bại'}";
                        }
                    }
                }
                else{
                    echo "{error: '403 forbidden'}";
                    setcookie('PHPSESSID', '', time() - 3600, '/');
                    setcookie('id', '', time() - 3600, '/');
                    setcookie('email', '', time() - 3600, '/');
                    setcookie('isAdmin', '', time() - 3600, '/');
                    alert($_SESSION['email']." đã đăng xuất!");
                    session_unset();
                    session_destroy();
                }          
            }
            

        }
    }

?>