<?php
    include "../Lib/Connection.php";

    class AccountModel{
        //constructor
        public function __construct(){
            session_start();
        }
        //xem thông tin tài khoản của mình return json
        public function getInfo(){
            $id = $_SESSION['id'];
            $sql = "SELECT * FROM account WHERE accId = '$id'";
            $result = connect()->query($sql);
            $data = $result->fetch_assoc();
            return json_encode($data);

        }

        //get account by id
        public function getInfoById($id){
            $sql = "SELECT * FROM account WHERE accId = '$id'";
            $result = connect()->query($sql);
            $data = $result->fetch_assoc();
            return json_encode($data);
        }

        //get all account
        public function getAllInfo(){
            $sql = "SELECT * FROM account";
            $result = connect()->query($sql);
            $data = [];
            while($row = $result->fetch_assoc()){
                $data[] = $row;
            }
            return json_encode($data);
        }

        //update account
        public function updateInfo($arr){
            $id = $_SESSION['id'];
            $sql = "UPDATE account SET password = '$arr[password]', avatar = '$arr[avatar]', email = '$arr[email]' WHERE accId = '$id'"; 
            $result = connect()->query($sql);
            if($result){
                $sql = "UPDATE user SET name = '$arr[name]', phoneNumber = '$arr[phone]', address = '$arr[address]' WHERE userId = '$id'";
                $result = connect()->query($sql);
            }
            
        }

        //delete account
        public function deleteAccount($id){
            $sql = "DELETE FROM account WHERE accId = '$id'";
            $result = connect()->query($sql);
        }

        
    }
?>