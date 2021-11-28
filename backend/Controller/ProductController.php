<?php
    include '../Model/ProductModel.php';
    //header json
    header('Content-Type: application/json');
    $productModel = new ProductModel();
    
    //if request is get, have one parameter name rq=deal
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['rq'])){
            if ($_GET['rq'] == 'deal'){//?rq=deal
                echo $productModel->getDealHot();
            }
            else if($_GET['rq'] == 'rate'){
                echo $productModel->getTopRating();
            }
            else if($_GET['rq'] == 'manu' && isset($_GET['name'])){//?rq=manu&name=dell
                echo $productModel->getAllByManu($_GET['name']);
            }
            //else echo 404 not found
            else{
                http_response_code(404);
                echo '404 not found';
            } 
        }
        else if(isset($_GET['orderby'])){//?orderby=newCost&a=0$b=15&asc=desc
            if(isset($_GET['a']) && isset($_GET['b']) && isset($_GET['asc'])){
                echo $productModel->getTopBy($_GET['orderby'], $_GET['a'], $_GET['b'], $_GET['asc']);
            }
            else{
                http_response_code(404);
                echo '404 not found';
            }
        }
        else if(isset($_GET['id'])){//?id=1
            echo $productModel->getProductByID($_GET['id']);
        }
        else{//404 not found
            http_response_code(404);
            echo '404 not found';   
        }
    }


    //request = delete:
    else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        if(isset($_GET['id'])){
            echo $productModel->deleteProduct($_GET['id']);
        }
        else{
            http_response_code(404);
            echo '404 not found';
        }
    }


    

?>