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
        public function getOrderById($id){//admin làm, bấm nút xem đơn hàng, khách cũng dc
            $conn = connect();
            $query = "SELECT orders.*,user.name FROM `orders`,user WHERE orderId = '$id' AND orders.userId=user.userId";
            $result = $conn->query($query);
            $order = $result->fetch_assoc();

            //get all product in order
            $query = "SELECT orderhasproduct.*,product.name FROM `orderhasproduct`,product WHERE orderhasproduct.orderId = '$id' and orderhasproduct.productId=product.productId";
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
            //take status of order
            $query = "SELECT status FROM `orders` WHERE orderId = '$id'";
            $result = $conn->query($query);
            $status = $result->fetch_assoc();
            //if status = 2 or 3 or 4, can't delete
            if($status['status'] == 2 || $status['status'] == 3 || $status['status'] == 4){
                return false;
            }
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

        //get all order by userId
        public function getAllOrderByUserId($userId){//khách xem hàng mình
            $conn = connect();
            $query = "SELECT * FROM `orders` where userId='$userId'";
            $result = $conn->query($query);
            $order = array();
            while($row = $result->fetch_assoc()){
                $order[] = $row;
            }
            return json_encode($order);
        }

        //get order by userId and orderId
        public function getOrderByUserIdAndOrderId($userId, $orderId){//khách xem hàng mình
            $conn = connect();
            $query = "SELECT orders.*,user.name FROM `orders`,user where orders.userId='$userId' and orderId='$orderId' and orders.userId=user.userId";
            $result = $conn->query($query);
            $order = $result->fetch_assoc();

            //get all product in order
            $query = "SELECT orderhasproduct.*,product.name FROM `orderhasproduct`,product WHERE orderhasproduct.orderId = '$orderId' and orderhasproduct.productId=product.productId";
            $result = $conn->query($query);
            $orderHasProduct = array();
            while($row = $result->fetch_assoc()){
                $orderHasProduct[] = $row;
            }
            $order['list'] = $orderHasProduct;
            return json_encode($order);
        }

        //make order
        public function makeOrder($userId, $data){//khách làm
            $conn = connect();
            $note = $data['note'];
            $list = $data['list'];//list is a array of productId and quantity
            //make new order
            $query = "INSERT INTO `orders`(`userId`, `note`) VALUES ('$userId', '$note')";
            //take orderId
            $result = $conn->query($query);
            $orderId = $conn->insert_id;
            //make order has product
            foreach($list as $item){
                $productId = $item['productId'];
                $quantity = $item['quantity'];
                $query = "INSERT INTO `orderhasproduct`(`orderId`, `productId`, `quantity`) VALUES ('$orderId', '$productId', '$quantity')";
                $result = $conn->query($query);
                if(!$result){
                    //rollback query
                    $query = "DELETE FROM `orders` WHERE `orderId` = '$orderId'";
                    $result = $conn->query($query);
                    //take name from productId
                    $query = "SELECT name FROM `product` WHERE productId = '$productId'";
                    $result = $conn->query($query);
                    $name = $result->fetch_assoc()['name'];
                    return $name;
                    
                }
            }
            return "OK";
            
        }

        //can order by userId and orderId
        public function canOrderByUserIdAndOrderId($userId, $orderId){//khách làm
            $conn = connect();
            //take status of order
            $query = "SELECT status FROM `orders` WHERE orderId = '$orderId'";
            $result = $conn->query($query);
            $status = $result->fetch_assoc();
            //if status = 2 or 3 or 4, can't delete
            if($status['status'] == 2 || $status['status'] == 3 || $status['status'] == 4){
                return "cantcancel";
            }
            //update status to 4
            $query = "UPDATE `orders` SET `status` = '4' WHERE `orderId` = '$orderId' AND `userId` = '$userId'";
            $result = $conn->query($query);
            return "OK";
        }

        

    }
?>
