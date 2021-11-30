<?php

include_once '../Model/OrderModel.php';
include '../Lib/Function.php';

    $model = new OrderModel();

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['rq'])){
            if($_GET['rq'] == 'all' && count($_GET) == 1){
                if(isAdmin()){
                    echo $model->getAllOrder();
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                }
            }
            else if($_GET['rq'] == 'each' && isset($_GET['orderId'])){
                if(isAdmin()){
                    echo $model->getOrderById($_GET['orderId']);
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                }
            }

            else if($_GET['rq'] == 'userall'){
                if(isLogin()){
                    $id = $_SESSION['id'];
                    echo $model->getAllOrderByUserId($id);
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                }
            }

            else if($_GET['rq'] == 'usereach' && isset($_GET['orderId'])){
                if(isLogin()){
                    $id = $_SESSION['id'];
                    echo $model->getOrderByUserIdAndOrderId($id, $_GET['orderId']);
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                }
            }

        }
    }
    
    //post
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        if(isset($_POST['rq'])){
            
            if($_POST['rq'] == 'addelete' && isset($_POST['orderId'])){
                
                if(isAdmin()){
                    
                    $res=$model->delOrderById($_POST['orderId']);
                    if($res){
                        echo 'OK';
                    }
                    else{
                        echo 'cantdel';
                    }
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                }
            }

            else if($_POST['rq'] == 'adupdate' && isset($_POST['orderId']) && isset($_POST['status'])){
                if(isAdmin()){
                    $model->updateOrderById($_POST['orderId'], $_POST['status']);
                    echo "OK";
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                }
            }

            //make order
            else if($_POST['rq'] == 'make' && isset($_POST['data'])){
                if(isLogin()){
                    $id = $_SESSION['id'];
                    $data = json_decode($_POST['data'], true);
                    echo $model->makeOrder($id, $data);
                }
                else{
                    echo '403 Forbidden';
                }
            }


            
        }
    }
?>