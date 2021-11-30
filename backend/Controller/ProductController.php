<?php
    include '../Model/ProductModel.php';
    include '../Lib/Function.php';
    //header json
    // header('Access-Control-Allow-Origin: *');
    // header('Content-Type: application/json');
    // header('Access-Control-Allow-Methods: POST');
    // header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    $productModel = new ProductModel();
    
    //if request is get, have one parameter name rq=deal
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['id'])){
            echo $productModel->getProductById($_GET['id']);    
        }
        else if(isset($_GET['rq'])){
            if ($_GET['rq'] == 'deal'){//?rq=deal
                echo $productModel->getDealHot();
            }
            else if($_GET['rq'] == 'rate'){
                echo $productModel->getTopRating();
            }
            else if($_GET['rq'] == 'manu' && isset($_GET['name'])){//?rq=manu&name=dell
                echo $productModel->getAllByManu($_GET['name']);
            }
            else if($_GET['rq'] == 'all') {
                echo $productModel->getAll();
            }
            //else echo 404 not found
            else{
                http_response_code(404);
                echo '404 not found';
            } 
        }
        else if(isset($_GET['orderby'])){//?orderby=newCost&a=0$b=15&asc=desc
            if(isset($_GET['a']) && isset($_GET['b']) && isset($_GET['asc']) && isset($_GET['manu'])){ //?orderby=newCost&a=0$b=15&asc=desc&groupby=manu //Sắp xếp theo hãng
                echo $productModel->getTopByManu($_GET['orderby'], $_GET['a'], $_GET['b'], $_GET['asc'], $_GET['manu']);
            }
            else if(isset($_GET['a']) && isset($_GET['b']) && isset($_GET['asc'])){
                echo $productModel->getTopBy($_GET['orderby'], $_GET['a'], $_GET['b'], $_GET['asc']);
            }
            else{
                http_response_code(404);
                echo '404 not found';
            }
        }
        else if(isset($_GET['find'])){//?find=dell //đây là thanh tìm kiếm
            echo $productModel->searchByName($_GET['find']);
        }

        else{//404 not found
            http_response_code(404);
            echo '404 not found';   
        }
    }

    //request = post for add
    else if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isAdmin()){
            if(isset($_POST['rq'])){//rq=add, data=json
                if($_POST['rq'] == 'add' && isset($_POST['data'])){
                    
                    $arr=json_decode($_POST['data'],true);
                    echo $productModel->addProduct($arr);
                }
                else if($_POST['rq'] == 'update' && isset($_POST['data'])){
                    $arr=json_decode($_POST['data'],true);
                    echo $productModel->updateProduct($arr);
                }

                else if($_POST['rq'] == 'delete' && isset($_POST['id'])){
                    echo $productModel->deleteProduct($_POST['id']);
                }
                
                else{
                    http_response_code(404);
                    echo '1';
                }
            }
            else{
                http_response_code(404);
                echo '2';
            }
        }
        else{
            echo '403 forbidden';
            session_destroy();//giả cookie
        }
        
    }

?>