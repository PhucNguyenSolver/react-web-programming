<?php
    include_once '../Model/OrderModel.php';
    include '../Lib/Function.php';

    $model = new OrderModel();

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['rq'])){
            if($_GET['rq'] == 'all'){
                if(isAdmin()){
                    echo $model->getAllOrder();
                }
                else{//403 forbidden
                    echo '403 Forbidden';
                }
            }
        }
    }
?>