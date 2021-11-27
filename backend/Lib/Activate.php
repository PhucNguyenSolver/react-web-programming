<?php
    include_once 'Connection.php';

    if(isset($_GET['code'])){
        $code = $_GET['code'];
        $conn = connect();
        $sql = "SELECT * FROM account WHERE isAdmin='$code' LIMIT 1";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            $row = $result->fetch_assoc();
            $id = $row['accId'];
            $sql = "UPDATE account SET isAdmin=0 WHERE accId='$id'";
            $result = $conn->query($sql);
            if($result){
                echo "<script>
                    alert('Kích hoạt tài khoản thành công!');
                </script>";
            }
            else{
                echo "<script>
                    alert('Kích hoạt tài khoản thất bại!');
                </script>";
            }
        }
    }
?>