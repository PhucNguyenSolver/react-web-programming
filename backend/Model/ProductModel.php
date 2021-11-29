<?php
    include_once '../Lib/Connection.php';
    class ProductModel{
        
        //constructor
        public function __construct(){
            session_start();
        }

        //trang chủ
        //deal hot trong tháng, lấy tên, giá cũ, giá mới, ảnh đầu tiên của 5 sản phẩm có discount nhiều nhất
        public function getDealHot(){
            return $this->getTopBy('discount',0,5, 'DESC');

        }

        public function getTopRating(){
            return $this->getTopBy('aveRating',0,5, 'DESC');
        }

        //get all product where manu and $manu not sensitive and order by name
        public function getAllByManu($manu){

            $conn = connect();
            $sql = "SELECT * FROM product WHERE manu = '$manu' ORDER BY name";
            $result = $conn->query($sql);
            $products = array();
            while($row = $result->fetch_assoc()){
                $products[] = $row;
            }
            return json_encode($products);
        }

        //laptop gaming đổi thành top rating
        //này dành cho trang chủ và trang sản phẩm
        //select top a to b product sort by a string value and asc or desc
        public function getTopBy($orderBy,$a,$b,$ascOrDesc="ASC"){
            //ascOrDesc = ASC or DESC
            //orderBy điền tên theo cột muốn sắp xếp
            $sql = 
            "SELECT * 
            FROM product
            ORDER BY $orderBy $ascOrDesc LIMIT $a,$b";
            //return json
            $result = connect()->query($sql);
            $data = array();
            while($row = $result->fetch_assoc()){
                $data[] = $row;
            }
            return json_encode($data);

        }

        //trang thông tin sản phẩm
        //dành cho trang product-info
        //lấy thông tin sản phẩm theo id
        public function getProductById($productId){
            $sql = "SELECT * FROM product WHERE productId = '$productId'";
            $result = connect()->query($sql);
            $data = $result->fetch_assoc();
            // while($row = $result->fetch_assoc()){
            //     $data[] = $row;
            // }
            return json_encode($data);
        }

        //search product by name
        public function searchByName($name){
            $sql = "SELECT * FROM product WHERE name LIKE '%$name%'";
            $result = connect()->query($sql);
            $data = array();
            while($row = $result->fetch_assoc()){
                $data[] = $row;
            }
            return json_encode($data);
        }

        //insert product to database
        public function addProduct($arr){
            $sql = "INSERT INTO product(name,manu,CPU,RAM,drive,GPU,screen,battery,weight,color,size,port,OS,oldCost,discount,image1,image2,image3,image4)
            VALUES('$arr[name]','$arr[manu]','$arr[CPU]','$arr[RAM]','$arr[drive]','$arr[GPU]','$arr[screen]','$arr[battery]','$arr[weight]','$arr[color]','$arr[size]','$arr[port]','$arr[OS]','$arr[oldCost]','$arr[discount]','$arr[image1]','$arr[image2]','$arr[image3]','$arr[image4]')";
            connect()->query($sql);
        }

        //update product to database
        public function updateProduct($arr){
            $sql = "UPDATE product
            SET name='$arr[name]',manu='$arr[manu]',CPU='$arr[CPU]',RAM='$arr[RAM]',drive='$arr[drive]',GPU='$arr[GPU]',screen='$arr[screen]',battery='$arr[battery]',weight='$arr[weight]',color='$arr[color]',size='$arr[size]',port='$arr[port]',OS='$arr[OS]',oldCost='$arr[oldCost]',discount='$arr[discount]',image1='$arr[image1]',image2='$arr[image2]',image3='$arr[image3]',image4='$arr[image4]'
            WHERE productId='$arr[productId]'";
            connect()->query($sql);      
        }


        public function deleteProduct($productId){
            $sql = "DELETE FROM product WHERE productId='$productId'";
            connect()->query($sql);
        }


    }

?>