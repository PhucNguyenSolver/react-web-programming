<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../Model/Comment.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog comment object
  $comment = new Comment($db);

  // Query all comment in page
  if (isset($_GET["newsId"])) {
    $comment->type = "news";
    $comment->newsId = isset($_GET['newsId']) ? $_GET['newsId'] : die('Invalid id');
  } elseif (isset($_GET["productId"])) {
    $comment->type = "product";
    $comment->productId = isset($_GET['productId']) ? $_GET['productId'] : die('Invalid id');
  } else {
    die('Invalid get typte');
  }

  $stmt = $comment->read();

  // Check if any comments
  $stmt->store_result();

  if($stmt->num_rows() > 0) {
    // Post array
    $comments_arr = array();
    // $comments_arr['data'] = array();

    while($stmt->fetch()) {
      $comment_item = array(
        'cmtId' => $comment->cmtId,
        'accId' => $comment->accId,
        'newsId' => $comment->newsId,
        'timeStamp' => $comment->timeStamp,
        'content' => $comment->content,
        'productId' => $comment->productId,
        'userName' => $comment->userName,
        'avatar' => $comment->avatar,
      );

      // Push to "data"
      array_push($comments_arr, $comment_item);
      // array_push($comments_arr['data'], $comment_item);
    }

    // Turn to JSON & output
    echo json_encode($comments_arr);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No Comments Found')
    );
  }
?>