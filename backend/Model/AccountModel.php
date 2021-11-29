<?php
    include "../Lib/Connection.php";

    class AccountModel{
        //constructor
        public function __construct(){
            session_start();
        }

        //get account by id
        public function getInfoById($id){
            $sql = "SELECT * FROM acc WHERE accId = '$id'";
            $result = connect()->query($sql);
            $data = $result->fetch_assoc();
            return json_encode($data);
        }

        //get all account
        public function getAllInfo(){

            $sql = "SELECT * FROM acc";
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
            if($arr['changePass']){
                $sql = "UPDATE account SET password = '$arr[password]', avatar = '$arr[avatar]', email = '$arr[email]' WHERE accId = '$id'"; 
                $result = connect()->query($sql);
            }
            else{
                $sql = "UPDATE account SET avatar = '$arr[avatar]', email = '$arr[email]' WHERE accId = '$id'"; 
                $result = connect()->query($sql);
            }
            
            if($result){
                $sql = "UPDATE user SET name = '$arr[name]', phoneNumber = '$arr[phone]', address = '$arr[address]' WHERE userId = '$id'";
                $result = connect()->query($sql);
                $sql = "UPDATE admin SET name = '$arr[name]', phoneNumber = '$arr[phone]', address = '$arr[address]' WHERE admId = '$id'";
                $result = connect()->query($sql);
            }  
            else {
                return false;
            }   
        }

        //delete account
        public function deleteAccount($id){
            $sql = "DELETE FROM account WHERE accId = '$id'";
            $result = connect()->query($sql);
        }

        
    }
?>