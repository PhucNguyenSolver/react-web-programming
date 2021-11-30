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
                    setcookie('PHPSESSID', '', time() - 3600, '/');
                    setcookie('id', '', time() - 3600, '/');
                    setcookie('email', '', time() - 3600, '/');
                    setcookie('isAdmin', '', time() - 3600, '/');
                    alert($_SESSION['email']." đã đăng xuất!");
                    session_unset();
                    session_destroy();
                }
            }
            else if($_GET['rq'] == 'each' && isset($_GET['orderId'])){
                if(isAdmin()){
                    echo $model->getOrderById($_GET['orderId']);
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                    setcookie('PHPSESSID', '', time() - 3600, '/');
                    setcookie('id', '', time() - 3600, '/');
                    setcookie('email', '', time() - 3600, '/');
                    setcookie('isAdmin', '', time() - 3600, '/');
                    alert($_SESSION['email']." đã đăng xuất!");
                    session_unset();
                    session_destroy();
                }
            }

            else if($_GET['rq'] == 'userall'){
                if(isLogin()){
                    $id = $_SESSION['id'];
                    echo $model->getAllOrderByUserId($id);
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                    setcookie('PHPSESSID', '', time() - 3600, '/');
                    setcookie('id', '', time() - 3600, '/');
                    setcookie('email', '', time() - 3600, '/');
                    setcookie('isAdmin', '', time() - 3600, '/');
                    alert($_SESSION['email']." đã đăng xuất!");
                    session_unset();
                    session_destroy();
                }
            }

            else if($_GET['rq'] == 'usereach' && isset($_GET['orderId'])){
                if(isLogin()){
                    $id = $_SESSION['id'];
                    echo $model->getOrderByUserIdAndOrderId($id, $_GET['orderId']);
                }
                else{//403 forbidden
                    echo '403 Forbidden';
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
                    setcookie('PHPSESSID', '', time() - 3600, '/');
                    setcookie('id', '', time() - 3600, '/');
                    setcookie('email', '', time() - 3600, '/');
                    setcookie('isAdmin', '', time() - 3600, '/');
                    alert($_SESSION['email']." đã đăng xuất!");
                    session_unset();
                    session_destroy();
                }
            }

            else if($_POST['rq'] == 'adupdate' && isset($_POST['orderId']) && isset($_POST['status'])){
                if(isAdmin()){
                    $model->updateOrderById($_POST['orderId'], $_POST['status']);
                    echo "OK";
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                    setcookie('PHPSESSID', '', time() - 3600, '/');
                    setcookie('id', '', time() - 3600, '/');
                    setcookie('email', '', time() - 3600, '/');
                    setcookie('isAdmin', '', time() - 3600, '/');
                    alert($_SESSION['email']." đã đăng xuất!");
                    session_unset();
                    session_destroy();
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
                    setcookie('PHPSESSID', '', time() - 3600, '/');
                    setcookie('id', '', time() - 3600, '/');
                    setcookie('email', '', time() - 3600, '/');
                    setcookie('isAdmin', '', time() - 3600, '/');
                    alert($_SESSION['email']." đã đăng xuất!");
                    session_unset();
                    session_destroy();
                }
            }

            //cancel order by user
            else if($_POST['rq'] == 'cancel' && isset($_POST['orderId'])){
                if(isLogin()){
                    $id = $_SESSION['id'];
                    $res = $model->canOrderByUserIdAndOrderId($id, $_POST['orderId']);
                    echo $res;
                }
                else{
                    echo '403 Forbidden';
                    setcookie('PHPSESSID', '', time() - 3600, '/');
                    setcookie('id', '', time() - 3600, '/');
                    setcookie('email', '', time() - 3600, '/');
                    setcookie('isAdmin', '', time() - 3600, '/');
                    alert($_SESSION['email']." đã đăng xuất!");
                    session_unset();
                    session_destroy();
                }
            }

            //rating
            else if($_POST['rq'] == 'rating' && isset($_POST['orderId']) && isset($_POST['productId'])
            && isset($_POST['ratingContent'])  && isset($_POST['ratingPoint'])){
                if(isAdmin()){
                    //admin cannot rate
                    echo '401 Unauthorized';
                }
                else if(isLogin()){
                    if ($_POST['ratingPoint'] == null){
                        echo 'mustenterval';
                        return;
                    }
                    echo $model->updateRatingPointByOrderIdAndProductId($_POST['orderId'], $_POST['productId'], $_POST['ratingPoint'], $_POST['ratingContent']);            
                }
                else{
                    echo '403 Forbidden';
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