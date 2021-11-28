<?php
  class News
  {
    // DB stuff
    private $conn;
    private $table = 'news';

    // News Properties
    public $newsId;
    public $admId;
    public $title;
    public $timeStamp;
    public $content;
    public $imgUrl;

    // Constructor with DB
    public function __construct($db)
    {
      // MOck: TODO: remove 2 line below
      $this->conn = $db;
    }

    // Get Newss
    public function read()
    {
      // Create query
      $query = 'SELECT newsId, admId, title, `timeStamp`, content, imgUrl
        FROM ' . $this->table . '
        ORDER BY
          timeStamp DESC';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();
      
      $stmt->bind_result(
        $this->newsId,
        $this->admId,
        $this->title,
        $this->timeStamp,
        $this->content,
        $this->imgUrl
      );
      return $stmt;
    }

    // Get Single News
    public function read_single()
    {
      $query = 'SELECT newsId, admId, title, `timeStamp`, content, imgUrl
        FROM ' . $this->table . '
        WHERE
          newsId = ?
        ORDER BY
          `timeStamp` DESC
        LIMIT 0,1';

      // Prepare statement
      $stmt = $this->conn->prepare($query) or die('Cannot prepare query');

      // Bind ID
      $stmt->bind_param('i', $this->newsId);

      // Execute query
      $stmt->execute();
      
      $stmt->store_result(); 
      if ($stmt->num_rows == 0) die('No news match id');
      
      $stmt->bind_result(
        $this->newsId,
        $this->admId,
        $this->title,
        $this->timeStamp,
        $this->content,
        $this->imgUrl
      );
      $stmt->fetch();
    }

  // Create News
    public function create()
    {
      // Create query
      $query = 'INSERT INTO ' . $this->table . ' SET title = ?, body = ?, author = ?, category_id = ?';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->newsId = htmlspecialchars(strip_tags($this->newsId));
      $this->admId = htmlspecialchars(strip_tags($this->admId));
      $this->title = htmlspecialchars(strip_tags($this->title));
      $this->timeStamp = htmlspecialchars(strip_tags($this->timeStamp));
      $this->content = htmlspecialchars(strip_tags($this->content)); // TODO: can html passed this way
      $this->imgUrl = htmlspecialchars(strip_tags($this->imgUrl));

      // Bind data // TODO
      $stmt->bind_params('iissss,',
        $this->newsId,
        $this->admId,
        $this->title,
        $this->timeStamp,
        $this->content,
        $this->imgUrl,
      );
      
      // Execute query
      if ($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Update News
    public function updateContent()
    {
      // Create query
      $query = 'UPDATE ' . $this->table . '
        SET content = ?
        WHERE newsId = ?';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->content = htmlspecialchars(strip_tags($this->content)); // TODO:

      // Bind data
      $stmt->bind_param('si', $this->content, $this->newsId);

      // Execute query
      if ($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Delete News
    public function delete()
    {
      // Create query
      $query = 'DELETE FROM ' . $this->table . ' WHERE newsId = ?';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->newsId = htmlspecialchars(strip_tags($this->newsId));

      // Bind data
      $stmt->bind_param('i', $this->newsId);

      // Execute query
      if ($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }
  }
?>