<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../Model/News.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog news object
  $news = new News($db);

  // Get new title
  $news->title = $_POST['title'];
  echo $news->title;
  
  // Get new imgUrl
  $news->imgUrl = $_POST['imgUrl'];
  echo $news->imgUrl;
  
  // Set ID to update
  $news->newsId = $_POST['id'];
  echo $news->newsId;
  
  // Update news
  if($news->updateBasicInfo()) {
    echo json_encode(
      array('message' => 'News Updated')
    );
  } else {
    echo json_encode(
      array('message' => 'News Not Updated')
    );
  }
?>