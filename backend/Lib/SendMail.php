<?php
    function sendMail($email, $password, $code) {
        $to = $email;
        $subject = "[Kích hoạt tài khoản]";
        $message = "
        <html>
        <head>
        <title>Thông tin đăng nhập</title>
        </head>
        <body>
        <h1>Kích hoạt tài khoản</h1>
        <p>Chào $email,</p>
        <p>Bạn đã đăng ký thành công với thông tin đăng nhập như sau:</p>
        <p>Email: $email</p>
        <p>Mật khẩu: $password</p>
        <p>Bấm vào link bên dưới để kích hoạt tài khoản:</p>
        <a href='http://localhost/Lib/Activate.php?code=$code'>Kích hoạt</a>
        </body>
        </html>
        ";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: mylaptop';
        return mail($to, $subject, $message, $headers);
    }

    function sendMail2($email, $password) {//để đăng nhập = gg
        $to = $email;
        $subject = "[Đăng nhập bằng email]";
        $message = "
        <html>
        <head>
        <title>Thông tin đăng nhập</title>
        </head>
        <body>
        <h1>Đăng nhập bằng email tài khoản</h1>
        <p>Chào $email,</p>
        <p>Bạn đã đăng nhập bằng email với thông tin đăng nhập mặc định như sau:</p>
        <p>Email: $email</p>
        <p>Mật khẩu mặc định: $password</p>
        </body>
        </html>
        ";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: mylaptop';
        return mail($to, $subject, $message, $headers);
    }

    function recoverMail($email, $code){
        $to = $email;
        $subject = "[Khôi phục mật khẩu]";
        $message = "
        <html>
        <head>
        <title>Khôi phục mật khẩu</title>
        </head>
        <body>
        <h1>Khôi phục mật khẩu</h1>
        <p>Chào $email,</p>
        <p>Bạn đã yêu cầu khôi phục mật khẩu, vui lòng bấm vào link bên dưới để tiếp tục:</p>
        <a href='http://localhost/Lib/Recover.php?email=$email&code=$code'>Khôi phục</a>
        </body>
        </html>
        ";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: mylaptop';
        return mail($to, $subject, $message, $headers);
    }

    function resetPassMail($email, $password){
        $to = $email;
        $subject = "[Khôi phục thành công]";
        $message = "
        <html>
        <head>
        <title>Khôi phục thành công</title>
        </head>
        <body>
        <h1>Khôi phục thành công</h1>
        <p>Chào $email,</p>
        <p>Bạn đã khôi phục mật khẩu thành công, mật khẩu mới là: $password</p>
        <p>Vui lòng đổi mật khẩu này khi đăng nhập</p>
        </body>
        </html>
        ";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: mylaptop';
        return mail($to, $subject, $message, $headers);
    }
?>
