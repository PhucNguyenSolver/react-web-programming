<?php
    include_once '../Lib/Connection.php';
    include_once 'Account.php';
    class Log{       
        function checkLogin($email, $password){
            $email = strip_tags(addslashes(trim($email)));
            $password = strip_tags(addslashes(trim($password)));

            $conn = connect();
            $sql = "SELECT * FROM account WHERE email='".$email."' AND password='".$password."'";
            $result = $conn->query($sql);
            if ($result){
                if($result->num_rows > 0){
                    $row = $result->fetch_assoc();
                    $account = new Account($row['accId'],$row['userName'],$row['email'],$row['password'],$row['isAdmin']);
                    return $account;
                }
            }
            return null;
        }

        function signUp($userName, $email, $password){
            $conn = connect();
        }
    }

?>