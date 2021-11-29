<?php
  class Database
  {
    // DB Params
    private $host = 'localhost';
    private $db_name = 'mylaptop';
    private $username = 'root';
    private $password = '';
    private $conn;

    // DB Connect
    public function connect()
    {
      $this->conn = null;

      try {
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
      } catch (Exception $e) {
        echo 'Connection Error: ' . $e->getMessage();
      }

      return $this->conn;
    }
  }
?>