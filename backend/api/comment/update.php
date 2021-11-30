<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../Model/Comment.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog comment object
  $comment = new Comment($db);

  // Get raw posted data
  $comment->content = $_POST['content'];
  echo $comment->content;
  
  // Set ID to update
  $comment->cmtId = $_POST['cmtId'];
  echo $comment->cmtId;
  
  // Update comment
  if($comment->updateContent()) {
    echo json_encode(
      array('message' => 'Comment Updated')
    );
  } else {
    echo json_encode(
      array('message' => 'Comment Not Updated')
    );
  }
?>