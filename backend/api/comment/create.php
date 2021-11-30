<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../Model/Comment.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog comment object
  $comment = new Comment($db);



  if (isset($_POST["newsId"])) {
    $comment->type = "news";
    $comment->newsId = $_POST['newsId'];
  } elseif (isset($_POST["productId"])) {
    $comment->type = "product";
    $comment->productId = $_POST['productId'];
  } else {
    die('Invalid comment type');
  }

  $comment->accId = isset($_POST['accId']) ? $_POST['accId'] : die('Invalid account');
  $comment->content = isset($_POST['content']) ? $_POST['content'] : die('Invalid content');
  // $comment->accId = $_POST['accId'] + 1 - 1;
  // $comment->productId = $_POST['productId'];
  // $comment->newsId = $_POST['newsId'];

  // Create comment
  if($comment->create()) {
    echo json_encode(
      array('message' => 'Comment Created')
    );
  } else {
    echo json_encode(
      array('message' => 'Comment Not Created')
    );
  }
?>