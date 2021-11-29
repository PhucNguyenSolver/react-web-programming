<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../Model/News.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog news object
  $news = new News($db);

  $news->admId = $_POST['admId'] + 1 - 1;
  $news->title = $_POST['title'];
  $news->imgUrl = $_POST['imgUrl'];

  // Create news
  if($news->create()) {
    echo json_encode(
      array('message' => 'News Created')
    );
  } else {
    echo json_encode(
      array('message' => 'News Not Created')
    );
  }
?>