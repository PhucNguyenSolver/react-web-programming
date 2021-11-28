<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../Model/News.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog news object
  $news = new News($db);

  // Get ID
  $news->newsId = isset($_GET['id']) ? $_GET['id'] : die('Invalid id');

  // Get news
  $news->read_single();

  // Create array
  $news_arr = array(
    'newsId' => $news->newsId,
    'admId' => $news->admId,
    'title' => $news->title,
    'timeStamp' => $news->timeStamp,
    'content' => $news->content,
    'imgUrl' => $news->imgUrl,
    'author' => $news->author,
  );

  // Make JSON
  echo json_encode($news_arr);
?>