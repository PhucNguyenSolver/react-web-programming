<?php
    include "../Lib/Connection.php";

    class OrderModel{
        //constructor
        public function __construct(){
            session_start();
        }

        //get all order
        public function getAllOrder(){//admin làm, trang quản lý đơn
            $conn = connect();
            $query = "SELECT orders.*,acc.name FROM `orders`,acc where orders.userId=acc.accId";
            $result = $conn->query($query);
            $order = array();
            while($row = $result->fetch_assoc()){
                $order[] = $row;
            }
            return json_encode($order);
        }

        //get order by id
        public function getOrderById($id){//admin làm, bấm nút xem đơn hàng
            $conn = connect();
            $query = "SELECT * FROM `orders` WHERE orderId = '$id'";
            $result = $conn->query($query);
            $order = $result->fetch_assoc();

            //get all product in order
            $query = "SELECT * FROM `orderhasproduct` WHERE orderId = '$id'";
            $result = $conn->query($query);
            $orderHasProduct = array();
            while($row = $result->fetch_assoc()){
                $orderHasProduct[] = $row;
            }
            $order['list'] = $orderHasProduct;
            return json_encode($order);
        }

        //del order by id
        public function delOrderById($id){//admin làm, nút đỏ
            $conn = connect();
            $query = "DELETE FROM `orders` WHERE `orderId` = '$id'";
            $result = $conn->query($query);
            return $result;
        }

        //update order by id
        public function updateOrderById($id, $status){//admin làm, nút lam
            $conn = connect();
            $query = "UPDATE `orders` SET `status` = '$status' WHERE `orderId` = '$id'";
            $result = $conn->query($query);
            return $result;
        }

    }
?>
