<?php
    include_once 'Connection.php';
    include_once 'SendMail.php';
    //recovery password

    if(isset($_GET['code'])){
        $code = $_GET['code'];
        $email = $_GET['email'];
        $conn = connect();
        $sql = "SELECT * FROM account WHERE code='$code' AND email='$email' LIMIT 1";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            $password = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 8);//tạo mật khẩu ngẫu nhiên        
            $hash_password = hash('sha256',$password);//mã hóa mật khẩu
            //update in account set code = null and password = hashpassword
            $sql = "UPDATE account SET code = null, password = '$hash_password' WHERE code = '$code' AND email = '$email'";
            $result = $conn->query($sql);
            if($result){

                if(resetPassMail($email,$password)){
                echo "<script>
                    alert('Khôi phục thành công, đã gửi mail chứa mật khẩu reset đến email của bạn');
                </script>";
                }
                else{
                    echo "<script>
                        alert('Gửi mail thất bại!');
                    </script>";
                }
            }
            else{
                echo "<script>
                    alert('Có lỗi xảy ra!');
                </script>";
            }
        }
    }
?>