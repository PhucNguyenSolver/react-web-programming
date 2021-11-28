<?php
    session_start();
    if (!isset($_SESSION['email'])) {
        echo 'Bạn đã đăng xuất rồi';
        return;
    }
    //remove cookie in browser name is 'SESSID'
    setcookie('PHPSESSID', '', time() - 3600, '/');
    setcookie('id', '', time() - 3600, '/');
    setcookie('email', '', time() - 3600, '/');
    setcookie('isAdmin', '', time() - 3600, '/');
    echo $_SESSION['email']." đã đăng xuất!";
    session_unset();
    session_destroy();
?>