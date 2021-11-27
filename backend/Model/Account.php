<?php
    class Account{
        var $id;
        var $userName;
        var $email;
        var $password;
        var $isAdmin = 0;

        function __construct($id,$userName,$email,$password,$isAdmin){
            $this->id = $id;
            $this->userName = $userName;
            $this->email = $email;
            $this->password = $password;
            $this->isAdmin = $isAdmin;
        }
    }

    class User extends Account{
        var $name;
        var $avatar;
        var $phoneNumber;
        var $address;

        function __construct($name,$avatar,$phoneNumber,$address,$id,$userName,$email,$password){
            $this->name = $name;
            $this->avatar = $avatar;
            $this->phoneNumber = $phoneNumber;
            $this->address = $address;
            parent::__construct($id,$userName,$email,$password,0);
        }
    }

    class Admin extends Account{
        function __construct($id,$userName,$email,$password){
            parent::__construct($id,$userName,$email,$password,1);
        }  
    }

?>