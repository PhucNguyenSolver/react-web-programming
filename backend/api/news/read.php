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

  // Blog post query
  $stmt = $news->read();

  // Mock
  // $stmt = new mysqli_stmt();

  // Check if any newss
  $stmt->store_result();

  if($stmt->num_rows() > 0) {
    // Post array
    $newss_arr = array();
    // $newss_arr['data'] = array();

    while($stmt->fetch()) {
      $news_item = array(
        'newsId' => $news->newsId,
        'admId' => $news->admId,
        'title' => $news->title,
        'timeStamp' => $news->timeStamp,
        'content' => json_encode($news->content),
        'imgUrl' => $news->imgUrl
      );

      // Push to "data"
      array_push($newss_arr, $news_item);
      // array_push($newss_arr['data'], $news_item);
    }

    // Turn to JSON & output
    echo json_encode($newss_arr);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No Posts Found')
    );
  }
?>