<?php
    include_once '../Model/AccountModel.php';
    include '../Lib/Function.php';

    //header json
    header('Content-Type: application/json');

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

    else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        if (isAdmin()){
            if(isset($_GET['id'])){
                $id = $_GET['id'];
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