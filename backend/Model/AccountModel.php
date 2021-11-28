<?php
    include "../Lib/Connection.php";

    class AccountModel{
        //constructor
        public function __construct(){
            session_start();
        }
        //xem thông tin tài khoản của mình return json
        public function getAccount(){
            $id = $_SESSION['id'];
            $sql = "SELECT * FROM account WHERE id = '$id'";
            $result = connect()->query($sql);
            $data = $result->fetch_assoc();
            return json_encode($data);
        }
    }
?>