<?php
    function connect() {
        $host = "localhost";
        $user = "root";
        $pass = "";
        $db = "mylaptop";

        $conn = new mysqli($host, $user, $pass, $db);

        if ($conn->connect_error) {
            die("Kết nối thất bại: " . $conn->connect_error);
        }

        return $conn;
    }

    function disconnect($conn) {
        $conn->close();
    }
?>