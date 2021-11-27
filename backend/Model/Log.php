<?php
    include_once '../Lib/Connection.php';
    include_once 'Account.php';
    include_once '../Lib/SendMail.php';
    class Log{       
        function checkLogin($email, $password){

            $conn = connect();
            $sql = "SELECT * FROM account WHERE email='$email' AND password='$password'";
            $result = $conn->query($sql);

            if($result->num_rows > 0){
                $row = $result->fetch_assoc();
                $account = new Account($row['accId'],$row['userName'],$row['email'],$row['password'],$row['isAdmin']);
                return $account;
            }
            return null;
        }

        function signUp($userName, $email, $password){
            $conn = connect();
            //anti sql injection
            $username = strip_tags(addslashes(trim($userName)));
            $email = strip_tags(addslashes(trim($email)));
            $ori_password = $password;
            $password = strip_tags(addslashes(trim(hash('sha256', $password))));
            //check username in database
            $sql =  "SELECT * FROM account WHERE userName='$username'";
            $result = $conn->query($sql);
            if($result->num_rows > 0){
                return 'username'; //username is exist
            }
            //check email in database
            $sql =  "SELECT * FROM account WHERE email='$email'";
            $result = $conn->query($sql);
            if($result->num_rows > 0){
                return 'email'; //email is exist
            }


            //insert to database
            //chuỗi số là chưa kích hoạt tài khoản
            //generate a random string with length = 20
            $code = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 20); 
            $sql = "INSERT INTO account(userName,email,password,isAdmin) VALUES('".$username."','".$email."','".$password."','".$code."')";
            $result = $conn->query($sql);
            if($result){         
                if(sendMail($email, $ori_password, $code))
                    return 'OK';
            }
            return 'fail';

        }

        function forgot($email){
            $conn = connect();
            //anti sql injection
            $email = strip_tags(addslashes(trim($email)));

            //check email in database
            $sql =  "SELECT * FROM account WHERE email='".$email."'";
            $result = $conn->query($sql);
            if($result->num_rows <= 0){
                return 'email'; //email is not exist
            }

            //update in database
            //chuỗi số là mã khôi phục mk tài khoản
            //generate a random string with length = 20
            $code = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 20); 
            //update column code in account table where email = $email
            $sql = "UPDATE account SET code='".$code."' WHERE email='".$email."'";
            
            $result = $conn->query($sql);
            if($result){         
                if(recoverMail($email, $code))
                    return 'OK';
            }
            return 'fail';

        }
    }

?>