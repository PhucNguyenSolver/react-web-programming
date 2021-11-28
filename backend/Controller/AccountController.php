<?php
    include_once '../Model/AccountModel.php';

    //header json
    header('Content-Type: application/json');

    $model = new AccountModel();
    $data = $model->getAccount();
?>