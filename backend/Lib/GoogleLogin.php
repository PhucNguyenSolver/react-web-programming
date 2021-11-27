<?php

    include_once 'Connection.php';
    include_once 'Function.php';
    require_once 'google_api/login/vendor/autoload.php';
    include_once 'SendMail.php';

    session_start();

    $client_id = '155293163360-f052p16tjdrs4fk17l3uadapt0pp0pcl.apps.googleusercontent.com'; 
    $client_secret = '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';
    $redirect_uri = 'http://localhost/Lib/GoogleLogin.php';

    $client = new Google_Client();
    $client->setClientId($client_id);
    $client->setClientSecret($client_secret);
    $client->setRedirectUri($redirect_uri);
    $client->addScope("email");
    $client->addScope("profile");

    $service = new Google_Service_Oauth2($client);

    if (isset($_SESSION['email']) && $_SESSION['email']) {
        // $client->setAccessToken($_SESSION['access_token']);
        echo '<script>window.location.href="http://localhost:3000"</script>';
    }

    // Nếu kết nối thành công, sau đó xử lý thông tin và lưu vào database
    else if (isset($_GET['code'])) {

        $client->authenticate($_GET['code']);
        // $_SESSION['access_token'] = $client->getAccessToken();
        
        
        $user = $service->userinfo->get(); //lấy thông tin user
    
        // connect to database
        $conn = connect();
    
        //Kiểm tra xem nếu user này đã tồn tại, sau đó login tự động
        $result = $conn->query("SELECT * FROM account WHERE email='$user->email'");
    
        if($result->num_rows>0) // Nếu user tồn tại thì show thông tin hiện có
        {          
            $row = $result->fetch_assoc();
            $_SESSION['email'] = $user->email;
            setcookie('email', $_SESSION['email'], time() + (86400 * 30), "/");
            $_SESSION['isAdmin'] = $row['isAdmin'];
            setcookie('isAdmin', $_SESSION['isAdmin'], time() + (86400 * 30), "/");
     
            echo $user->email . ' đã đăng nhập thành công!';
            sleep(1);
            echo '<script>window.location.href="http://localhost:3000"</script>';
        }
        else //Ngược lại tạo mới 1 user vào database
        { 
            //add to db
            $userName = removeSign($user->name) . time();//bỏ dấu tên và thêm thời gian
            $password = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 8);//tạo mật khẩu ngẫu nhiên        
            $hash_password = hash('sha256',$password);//mã hóa mật khẩu
            $res = $conn->query("INSERT INTO account(userName, email, password, isAdmin, avatar) VALUES ('$userName','$user->email','$hash_password','0','$user->picture')");
            echo $conn->error;

            sendMail2($user->email, $password);//gửi email với mật khẩu mặc định
            echo 'Chào '.$user->name.', một email chứa thông tin đăng nhập đã được gửi đến mail của bạn.';

            $_SESSION['email'] = $user->email;
            setcookie('email', $_SESSION['email'], time() + (86400 * 30), "/");
            $_SESSION['isAdmin'] = '0';//dang nhap kiểu này auto là khách
            setcookie('isAdmin', $_SESSION['isAdmin'], time() + (86400 * 30), "/");
            
            echo '<script>window.location.href="http://localhost:3000"</script>';
      
        }
        return;
    }


?>