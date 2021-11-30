<?php
  class Comment
  {
    // DB stuff
    private $conn;
    private $table = 'comment';

    // Comment Properties
    public $cmtId;
    public $accId;
    public $productId;
    public $newsId;
    public $timeStamp;
    public $content;
    public $type; // Either "news" or "product"
    // Joined Properties
    // public $author; // TODO
    public $userName;
    public $avatar;
    
    // Constructor with DB
    public function __construct($db)
    {
      // MOck: TODO: remove 2 line below
      $this->conn = $db;
    }

    // Get Comments
    public function read()
    {
      // Create query
      $query = "";
      if ($this->type == "news") {
        $query = 'SELECT cmtId, a.accId, productId, `timeStamp`, content, newsId, a.userName, a.avatar
          FROM ' . $this->table . '
          LEFT JOIN `account` a
          ON ' . $this->table . '.accId = a.accId
          WHERE newsId = ?
          ORDER BY
            `timeStamp` ASC';
      }
      elseif ($this->type == "product") {
        $query = 'SELECT cmtId, a.accId, productId, `timeStamp`, content, newsId, a.userName, a.avatar
          FROM ' . $this->table . '
          LEFT JOIN `account` a
          ON ' . $this->table . '.accId = a.accId
          WHERE productId = ?
          ORDER BY
            `timeStamp` ASC';
      }
      else die("invalid type");
      
      // Prepare statement
      $stmt = $this->conn->prepare($query) or die('54 in model');
      
      if ($this->type == 'news') {
        $stmt->bind_param('i', $this->newsId);
      } elseif ($this->type == 'product') {
        $stmt->bind_param('i', $this->productId);
      }

      // Execute query
      $stmt->execute();

      $stmt->bind_result(
        $this->cmtId,
        $this->accId,
        $this->productId,
        $this->timeStamp,
        $this->content,
        $this->newsId,
        $this->userName,
        $this->avatar,
      );
      return $stmt;
    }

    // Create Comment
    public function create()
    {
      // Create query
      $query = "";
      if ($this->type == "news") {
        $query = 'INSERT INTO ' . $this->table . ' (accId, newsId, content)
        VALUES (?, ?, ?)';
      } elseif ($this->type == "product") {
        $query = 'INSERT INTO ' . $this->table . ' (accId, productId, content)
        VALUES (?, ?, ?)';
      } else die('Invalid type');

      // Prepare statement
      $stmt = $this->conn->prepare($query) or die('96 in model');

      // Clean data
      $this->accId = htmlspecialchars(strip_tags($this->accId));
      $this->productId = htmlspecialchars(strip_tags($this->productId));
      $this->newsId = htmlspecialchars(strip_tags($this->newsId));
      $this->content = htmlspecialchars(strip_tags($this->content));

      // Bind data // TODO
      if ($this->type == "news") {
        $stmt->bind_param('iis',
          $this->accId,
          $this->newsId,
          $this->content,
        );
      } elseif ($this->type == "product") {
        $stmt->bind_param('iis',
          $this->accId,
          $this->productId,
          $this->content,
        );
      }
      
      // Execute query
      if ($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Update Comment
    public function updateContent()
    {
      // Create query
      $query = 'UPDATE ' . $this->table . '
        SET content = ?
        WHERE cmtId = ?';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      // $this->content = htmlspecialchars(strip  _tags($this->content)); // TODO:

      // Bind data
      $stmt->bind_param('si', $this->content, $this->cmtId);

      // Execute query
      if ($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Update Comment
    public function updateBasicInfo()
    {
      // Create query
      $query = 'UPDATE ' . $this->table . '
        SET productId = ?, newsId = ?
        WHERE cmtId = ?';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      // $this->content = htmlspecialchars(strip  _tags($this->content)); // TODO:

      // Bind data
      $stmt->bind_param('ssi', $this->productId, $this->newsId, $this->cmtId);

      // Execute query
      if ($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Delete Comment
    public function delete()
    {
      // Create query
      $query = 'DELETE FROM ' . $this->table . ' WHERE cmtId = ?';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->cmtId = htmlspecialchars(strip_tags($this->cmtId));

      // Bind data
      $stmt->bind_param('i', $this->cmtId);

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