<?php
    include '../Model/ProductModel.php';
    //header json
    header('Content-Type: application/json');
    $productModel = new ProductModel();
    echo $productModel->getProductById(1);

?>