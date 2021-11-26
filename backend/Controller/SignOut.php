<?php
    session_start();
    //remove cookie in browser name is 'SESSID'
    setcookie('SESSID', '', time() - 3600, '/');
    session_destroy();
?>