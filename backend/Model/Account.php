<?php
    class Account{
        var $id;
        var $userName;
        var $email;
        var $password;
        var $isAdmin = 0;
        var $avatar;

        function __construct($id,$userName,$email,$password,$isAdmin,$avatar){
            $this->id = $id;
            $this->userName = $userName;
            $this->email = $email;
            $this->password = $password;
            $this->isAdmin = $isAdmin;
            $this->avatar = $avatar;
        }
    }

    class User extends Account{
        var $name;
        var $phoneNumber;
        var $address;

        function __construct($name,$phoneNumber,$address,$id,$userName,$email,$password,$isAdmin,$avatar){
            $this->name = $name;
            $this->phoneNumber = $phoneNumber;
            $this->address = $address;
            parent::__construct($id,$userName,$email,$password,$isAdmin,$avatar);
        }
    }

    class Admin extends Account{
        function __construct($id,$userName,$email,$password){
            parent::__construct($id,$userName,$email,$password,1,null);
        }  
    }

?>