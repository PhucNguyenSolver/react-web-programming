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

  // Get raw newsed data
  $data = json_decode(file_get_contents("php://input"));

  $news->newsId = $data->newsId;
  $news->admId = $data->admId;
  $news->title = $data->title;
  $news->timeStamp = $data->timeStamp;
  $news->content = $data->content;
  $news->imgUrl = $data->imgUrl;

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