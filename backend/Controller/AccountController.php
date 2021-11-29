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
    else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
        echo $_PUT['data'];
        if(isset($_PUT['rq'])){
            
            if(count($_PUT) == 2){
                $rq = $_PUT['rq'];
                if($rq == 'update'){//rq=update
                    if(isLogin()){
                        
                        $arr = json_decode($_PUT['data']);
                        $result = $model->updateInfo($arr);
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
                else{
                    echo "{error: '404 not found'}";
                }
            }

        }
    }

    else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        if (isAdmin()){
            if(isset($_DELETE['id'])){
                $id = $_DELETE['id'];
                $model->deleteAccount($id);
            }
            else{
                http_response_code(404);
                echo "{error: '404 not found'}";
            }
        }
        else{
            http_response_code(403);
            echo "{error: '403 forbidden'}";
        }
    }
?>