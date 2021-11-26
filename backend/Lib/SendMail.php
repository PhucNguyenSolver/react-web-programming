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
?>
