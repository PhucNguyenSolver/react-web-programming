<?php
    include_once '../Model/AccountModel.php';
    include '../Lib/Function.php';
    // header("Content-Type: application/json; charset=UTF-8");
    
    $model = new AccountModel();
    
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        
        if(isset($_GET['rq'])){
            if(count($_GET) == 1){
                $rq = $_GET['rq'];
                if($rq == 'info'){//?rq=info
                    if(isLogin()){
                        echo $model->getInfoById($_SESSION['id']);
                    }
                    else{
                        echo "{error: 'Chưa đăng nhập'}";
                    }
                    
                }
                else if($rq == 'allinfo'){//?rq=allinfo
                    if(isAdmin()){
                        echo $model->getAllInfo();
                    }
                    else{
                        echo "{error: '403 forbidden'}";
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
                    if(isAdmin()){
                        echo $model->getInfoById($id);
                    }
                    else{
                        echo "{error: '403 forbidden'}";
                    }
                }
                else{
                    echo "{error: '404 not found'}";
                }
            }
        }
    }

    //rq = PUT
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
                }
            }
            
            else if($_POST['rq']=="delete" && isset($_DELETE['id'])){
                if(isAdmin()){
                    $id = $_DELETE['id'];
                    $model->deleteAccount($id);
                }
                else{
                    echo "{error: '403 forbidden'}";
                }          
            }
            

        }
    }

?>