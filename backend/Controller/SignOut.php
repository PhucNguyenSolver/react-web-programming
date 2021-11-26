<?php
    session_start();
    //remove cookie in browser name is 'SESSID'
    setcookie('PHPSESSID', '', time() - 3600, '/');
    setcookie('email', '', time() - 3600, '/');
    echo $_SESSION['email']." đã đăng xuất!";
    session_destroy();
?>