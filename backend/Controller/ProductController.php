<?php
    include '../Model/ProductModel.php';
    //header json
    header('Content-Type: application/json');
    $productModel = new ProductModel();
    
    //if request is get, have one parameter name rq=deal
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['rq'])){
            if ($_GET['rq'] == 'deal'){
                echo $productModel->getDealHot();
            }
            else if($_GET['rq'] == 'rate'){
                echo $productModel->getTopRating();
            }
            else if($_GET['rq'] == 'manu' && isset($_GET['name'])){
                echo $productModel->getAllByManu($_GET['name']);
            }
            //else echo 404 not found
            else{
                http_response_code(404);
                echo '404 not found';
            } 
        }
        else if(isset($_GET['orderby'])){
            if(isset($_GET['a']) && isset($_GET['b']) && isset($_GET['asc'])){
                echo $productModel->getTopBy($_GET['orderby'], $_GET['a'], $_GET['b'], $_GET['asc']);
            }
            else{
                http_response_code(404);
                echo '404 not found';
            }
        }
        else if(isset($_GET['id'])){
            echo $productModel->getProductByID($_GET['id']);
        }
        else{//404 not found
            http_response_code(404);
            echo '404 not found';   
        }
    }


    //request = post:

    

?>