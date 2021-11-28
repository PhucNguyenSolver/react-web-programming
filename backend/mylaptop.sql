-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2021 lúc 08:00 PM
-- Phiên bản máy phục vụ: 10.6.3-MariaDB
-- Phiên bản PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `mylaptop`
--

DELIMITER $$
--
-- Các hàm
--
CREATE DEFINER=`root`@`localhost` FUNCTION `calAveRating` (`prId` INT UNSIGNED) RETURNS FLOAT UNSIGNED BEGIN
	DECLARE numOfRating int;
    DECLARE tong FLOAT;
    
    CREATE TEMPORARY TABLE ratingTable
    SELECT ratingPoint
    FROM orderhasproduct
    WHERE ratingPoint is not null
    AND productId = prId;
    
    SET numOfRating =
    (
        SELECT COUNT(ratingPoint)
        FROM ratingTable
    );  

	SET tong =
    (
    	SELECT SUM(ratingPoint)
        FROM ratingTable
    );
    return FORMAT(tong/numOfRating,2);
    
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `accId` int(10) UNSIGNED NOT NULL,
  `userName` varchar(128) NOT NULL,
  `email` varchar(320) NOT NULL,
  `password` varchar(256) NOT NULL,
  `isAdmin` varchar(20) NOT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT 'https://i.imgur.com/AxnVk1a.png',
  `code` varchar(20) DEFAULT NULL COMMENT 'đổi mk'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`accId`, `userName`, `email`, `password`, `isAdmin`, `avatar`, `code`) VALUES
(1, 'hieuvo', 'hieu.vo@gmail.com', 'sdfvsvksh1sdvf', '1', 'https://i.imgur.com/AxnVk1a.png', NULL),
(2, 'phucnguye123', 'nguyenphuc@gmail.com', 'iquegrbilwurgb', '0', 'https://i.imgur.com/AxnVk1a.png', NULL),
(3, 'anhnguyen', 'anh@gmail.com', '006841606861', '0', 'https://i.imgur.com/AxnVk1a.png', NULL),
(4, 'anlam00', 'admin@gmail.com', '25f43b1486ad95a1398e3eeb3d83bc4010015fcc9bedb35b432e00298d5021f7', '1', 'https://i.imgur.com/AxnVk1a.png', NULL),
(5, 'thaooo', 'thaodoan@gmail.com', '1988248618919168', '0', 'https://i.imgur.com/AxnVk1a.png', NULL),
(6, 'mainguyen', 'maihoang@gmail.com', 'gewrthtyjnxn61s3ebstsb', '1', 'https://i.imgur.com/AxnVk1a.png', NULL),
(7, 'anotherbao', 'user2@gmail.com', '481f6cc0511143ccdd7e2d1b1b94faf0a700a8b49cd13922a70b5ae28acaa8c5', '0', 'https://i.imgur.com/AxnVk1a.png', NULL),
(8, 'sonhoang', 'sonnguyen@gmail.com', 'sdbsrt1981531', '0', 'https://i.imgur.com/AxnVk1a.png', NULL),
(9, 'phatnguyen', 'tanphat2k@gmail.com', 'sbrtboihbwifbwi174619242937rfgbfgsrg', '0', 'https://i.imgur.com/AxnVk1a.png', NULL),
(10, 'anhduy', 'anhlu@gmail.com', 'wgbvdsvouerbivverbwt12523erwgf', '1', 'https://i.imgur.com/AxnVk1a.png', NULL),
(17, 'bao1', 'user1@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '0', 'https://i.imgur.com/AxnVk1a.png', NULL),
(25, 'Viost1637985471', 'vios.tee97@gmail.com', '238b65dd20e09a48067858a0c303c49b62bc1dd7e8d63ce66909be58c899d812', '0', 'https://lh3.googleusercontent.com/a-/AOh14Gi-zo5p41WDS_VRMpim7R-nia5JfiFA7KkocdhVGw=s96-c', NULL),
(26, 'Bao_Nguyen_Huu1637985561', 'bao.nguyen.huu@hcmut.edu.vn', '0fe99c91511dfbd377a3aadbc1074c92ded25169d8cfe19e9ef7acb6c080c261', '0', 'https://lh3.googleusercontent.com/a-/AOh14GjrIxUJ5v6m4VF6u_v-ASis7Nfd-yRQw_2rC7YLAw=s96-c', NULL),
(27, 'Viost1637985922', 'vios.tee979@gmail.com', '82b94b3d127e9e471b1824f6953991831d2bebd7b93367bd952e19b2197c2f0f', '0', 'https://lh3.googleusercontent.com/a-/AOh14GhtEweZ2PGMw6VsfShyiqkUKX0GngnLFy-epUio=s96-c', NULL);


--
-- Bẫy `account`
--
DELIMITER $$
CREATE TRIGGER `insert_id_to_adm` AFTER INSERT ON `account` FOR EACH ROW BEGIN
	IF new.isAdmin = '1' then
    	INSERT INTO admin(admId)
        VALUES(new.accId);
    ELSE
       	INSERT INTO user(userId)
        VALUES(new.accId);
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `admId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`admId`) VALUES
(1),
(4),
(6),
(10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `cmtId` int(10) UNSIGNED NOT NULL,
  `accId` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `newsId` int(10) UNSIGNED DEFAULT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`cmtId`, `accId`, `productId`, `newsId`, `timeStamp`, `content`) VALUES
(1, 3, 6, 1, '2021-07-23', 'AloAlo'),
(2, 1, 1, 5, '2021-09-15', 'Hàng chất lượng'),
(3, 5, 9, 7, '2021-01-10', 'Bao giờ có hàng'),
(4, 9, 7, 1, '2021-11-30', 'Hello'),
(5, 8, 5, 7, '2021-04-01', 'Sản phẩm bị lỗi'),
(6, 10, 3, 7, '2021-06-09', 'Bao giờ giao vậy'),
(7, 1, 4, 2, '2021-07-20', 'Còn hàng không shop'),
(8, 2, 6, 7, '2021-08-21', 'Có khuyến mãi không vậy'),
(9, 27, 7, 6, '2021-09-15', 'Hàng đẹp, giao đúng hạn'),
(10, 17, 10, 1, '2021-07-30', 'Còn màu khác không');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `newsId` int(10) UNSIGNED NOT NULL,
  `admId` int(10) UNSIGNED NOT NULL,
  `title` varchar(64) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `content` text NOT NULL DEFAULT '<div>this is content</div>' COMMENT 'dạng html',
  `imgUrl` varchar(2048) NOT NULL DEFAULT 'https://i.imgur.com/i2OSbQx.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`newsId`, `admId`, `title`, `timeStamp`, `content`, `imgUrl`) VALUES
(1, 4, 'Up date lên Win11', '2021-11-28 09:50:50', '<div>Win 11 có lỗi</div>', 'https://cdn.tgdd.vn/Files/2021/07/21/1369862/win11-2_1280x720-800-resize.png'),
(2, 6, 'Sửa lỗi phần cứng Dell', '2021-07-07 10:15:55', '<div>Sửa dễ dàng ở nhà</div>', 'https://anphat.com.vn/media/product/38537_dell_inspiron_13_5310_i3_n3i3116w_600x600.jpg'),
(3, 1, 'Dell ra sản phẩm mới', '2021-11-10 15:30:02', '<div>Sản phẩm cho sinh viên</div>', 'https://anphat.com.vn/media/product/38537_dell_inspiron_13_5310_i3_n3i3116w_600x600.jpg'),
(4, 1, 'Asus ra laptop gaming', '2021-07-21 16:05:30', '<div>hàng bền</div>', 'https://cdn.tgdd.vn/Products/Images/44/251247/Slider/vi-vn-asus-tuf-gaming-fx516pm-i7-hn002t-1.jpg'),
(5, 6, 'Test lỗi trên laptop Dell', '2021-02-06 07:05:20', '<div>Dễ tiếp cận</div>', 'https://anphat.com.vn/media/product/38537_dell_inspiron_13_5310_i3_n3i3116w_600x600.jpg'),
(6, 10, 'Sản phẩm mới của Dell', '2021-02-07 07:21:28', '<div>Sản phẩm Gaming</div>', 'https://cdn.tgdd.vn/Products/Images/44/250657/Slider/vi-vn-dell-gaming-g3500b-i7-p89f002g3500b-1.jpg'),
(7, 1, 'Dòng sản phẩm sử dụng chip Intel', '2021-11-20 09:10:51', '<div>Dòng chip phổ biến</div>', 'https://cellphones.com.vn/sforum/wp-content/uploads/2021/09/00-Intel-Core-i7-1140x570.png'),
(8, 10, 'Card đô họa gaming', '2021-07-15 15:20:50', '<div>Dành cho máy bàn</div>', 'https://www.hanoicomputer.vn/media/lib/29-07-2020/card-do-hoa-la-gi.jpg'),
(9, 6, 'Các lỗi phổ biến trên Win 11', '2021-11-20 18:42:23', '<div>Lỗi nhiều vl</div>', 'https://cdn.tgdd.vn/Files/2021/07/21/1369862/win11-2_1280x720-800-resize.png'),
(10, 4, 'Dòng máy chơi game của Dell', '2021-06-06 16:25:21', '<div>Cân mọi loại game</div>', 'https://kimlongcenter.com/upload/image/top-3-laptop-dell-gaming-hot-nhat-2021.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderhasproduct`
--

CREATE TABLE `orderhasproduct` (
  `productId` int(10) UNSIGNED NOT NULL,
  `orderId` int(10) UNSIGNED NOT NULL,
  `quanlity` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `productCost` int(16) UNSIGNED DEFAULT NULL COMMENT 'tổng giá của 1 loại sản phẩm',
  `ratingContent` text DEFAULT NULL,
  `ratingPoint` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orderhasproduct`
--

INSERT INTO `orderhasproduct` (`productId`, `orderId`, `quanlity`, `productCost`, `ratingContent`, `ratingPoint`) VALUES
(1, 1, 1, 22790000, NULL, NULL),
(3, 2, 1, 7000000, NULL, NULL),
(6, 3, 1, 1000000, NULL, NULL),
(7, 3, 1, 1000000, NULL, NULL),
(4, 4, 3, 3000000, NULL, NULL),
(4, 5, 1, 1000000, NULL, NULL),
(6, 6, 1, 1000000, NULL, NULL),
(4, 7, 2, 2000000, NULL, NULL),
(1, 8, 1, 22790000, NULL, NULL),
(16, 9, 1, 30000000, NULL, NULL),
(18, 1, 1, 30000000, NULL, NULL);


--
-- Bẫy `orderhasproduct`
--
DELIMITER $$
CREATE TRIGGER `calAveRating` AFTER UPDATE ON `orderhasproduct` FOR EACH ROW BEGIN
    UPDATE product AS p
    SET p.aveRating = calAveRating(p.productId)
    WHERE p.productId = new.productId;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `calAveRatingCheck` BEFORE UPDATE ON `orderhasproduct` FOR EACH ROW BEGIN
	IF
    (
    	SELECT `status`
        FROM orders
        WHERE orderId = new.orderId
        LIMIT 1
    ) != 3 AND
    (old.ratingContent != new.ratingContent or old.ratingPoint != new.ratingPoint
     or old.ratingContent is null AND new.ratingContent is not null
     or old.ratingPoint is null and new.ratingPoint is not null) THEN
    
    	SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Không thể đánh giá khi chưa nhận hàng';
        
    ELSEIF
    (
    	SELECT `status`
        FROM orders
        WHERE orderId = new.orderId
        LIMIT 1
    ) = 3
    AND
    (old.ratingContent != new.ratingContent or old.ratingPoint != new.ratingPoint) THEN
    
    	SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Đã đánh giá rồi';       
    END IF;

END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `cal_productCost` BEFORE INSERT ON `orderhasproduct` FOR EACH ROW BEGIN
	SET NEW.productCost =
    (
    	SELECT oldCost*(1-0.01*discount)*NEW.quanlity
        FROM product
        WHERE NEW.productId = productId
        LIMIT 1
    );
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `cal_totalCost` AFTER INSERT ON `orderhasproduct` FOR EACH ROW BEGIN
	DECLARE total int;
	SET total =
    (
        SELECT SUM(productCost)
     	FROM orderhasproduct
     	WHERE orderId = new.orderId
    );
    UPDATE orders
    SET totalCost = total
    WHERE orderId = new.orderId;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `reduce_quanlity` AFTER INSERT ON `orderhasproduct` FOR EACH ROW BEGIN
	UPDATE product as p
    SET p.numInStock = p.numInStock - new.quanlity
    WHERE p.productId = new.productId;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_productCost (for test)` BEFORE UPDATE ON `orderhasproduct` FOR EACH ROW BEGIN
	SET NEW.productCost =
    (
    	SELECT oldCost*(1-0.01*discount)*NEW.quanlity
        FROM product
        WHERE NEW.productId = productId
        LIMIT 1
    );
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_quanlity (for test)` AFTER UPDATE ON `orderhasproduct` FOR EACH ROW BEGIN
	UPDATE product as p
    SET p.numInStock = p.numInStock - new.quanlity + old.quanlity
    WHERE p.productId = new.productId;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_totalCost (for test)` AFTER UPDATE ON `orderhasproduct` FOR EACH ROW BEGIN
	DECLARE total int;
	SET total =
    (
        SELECT SUM(productCost)
     	FROM orderhasproduct
     	WHERE orderId = new.orderId
    );
    UPDATE orders
    SET totalCost = total
    WHERE orderId = new.orderId;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `orderId` int(10) UNSIGNED NOT NULL,
  `userId` int(10) UNSIGNED NOT NULL,
  `status` int(10) NOT NULL DEFAULT 1 COMMENT '1 đã đặt 2 đang giao 3 đã giao 4 đã huỷ',
  `timeStamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `note` text DEFAULT NULL COMMENT 'ghi chú',
  `totalCost` int(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`orderId`, `userId`, `status`, `timeStamp`, `note`, `totalCost`) VALUES
(1, 5, 1, '2021-11-10', NULL, 22790000),
(2, 7, 1, '2021-07-07', NULL, 7000000),
(3, 7, 1, '2021-10-05', NULL, 2000000),
(4, 25, 1, '2021-08-11', NULL, 3000000),
(5, 2, 1, '2021-05-22', NULL, 1000000),
(6, 3, 1, '2021-10-15', NULL, 1000000),
(7, 26, 1, '2021-09-26', NULL, 2000000),
(8, 27, 1, '2021-11-24', NULL, 22790000),
(9, 2, 1, '2021-11-28', NULL, 30000000),
(10, 3, 1, '2021-10-30', NULL, 30000000);



--
-- Bẫy `orders`
--
DELIMITER $$
CREATE TRIGGER `ad_delete_order(for test)` BEFORE DELETE ON `orders` FOR EACH ROW BEGIN
	IF old.status != 4 THEN
    	UPDATE product as p
        SET p.numInStock = p.numInStock +
        (
            SELECT quanlity
            FROM orderhasproduct as o
            WHERE old.orderId = orderId AND p.productId = productId
            LIMIT 1
        )
        WHERE p.productId = 
        (
            SELECT productId
            FROM orderhasproduct
            WHERE p.productId = productId
            LIMIT 1
        );
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `cancel_order` AFTER UPDATE ON `orders` FOR EACH ROW BEGIN
	IF new.status = 4 THEN
    	UPDATE product as p
        SET p.numInStock = p.numInStock +
        (
            SELECT quanlity
            FROM orderhasproduct as o
            WHERE new.orderId = orderId AND p.productId = productId
            LIMIT 1
        )
        WHERE p.productId = 
        (
            SELECT productId
            FROM orderhasproduct
            WHERE p.productId = productId
            LIMIT 1
        );
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `productId` int(10) UNSIGNED NOT NULL,
  `name` varchar(32) NOT NULL,
  `manu` varchar(16) NOT NULL COMMENT 'hãng sản xuất',
  `numInStock` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `oldCost` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `discount` int(3) NOT NULL DEFAULT 0 COMMENT 'giảm giá nhiêu %',
  `descr` text DEFAULT NULL COMMENT 'mô tả',
  `aveRating` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`productId`, `name`, `manu`, `numInStock`, `oldCost`, `discount`, `descr`, `aveRating`) VALUES
(1, 'Laptop Dell Vostro V3510', 'DELL', 90, 22790000, 10, NULL, NULL),
(2, 'Laptop Dell Inspiron 3505 Y1N1T5', 'DELL', 90, 15299000, 10, NULL, 5),
(3, 'Laptop Dell Vostro V3400', 'DELL', 90, 7000000, 10, 'Laptop DELL', NULL),
(4, 'Laptop Asus FLow Gaming GV301QC-K6052T R9 5900HS', 'Asus', 90, 1000000, 10, NULL, NULL),
(5, 'Laptop Asus Vivobook A515EA-L11970T', 'Asus', 90, 1000000, 10, 'laptop asus', 4.5),
(6, 'Laptop ASUS Gaming Zephyrus GA401IHR-HZ009T R7', 'Asus', 90, 1000000, 10, 'Asus', NULL),
(7, 'Laptop Acer Nitro Gaming AN515 57 74NU', 'Acer', 90, 1000000, 10, NULL, NULL),
(8, 'Laptop Acer Aspire 3 A315 56 37DV', 'Acer', 90, 1000000, 10, 'Laptop Acer', NULL),
(9, 'Laptop Acer Predator Helios Gaming PH315-54-75YD', 'Acer', 100, 2000000, 20, 'Laptop Gaming Acer', NULL),
(10, 'Laptop MSI Modern 14 B11MOU 852VN', 'MSI', 90, 18000000, 30, NULL, NULL),
(11, 'Laptop MSI Gaming GF63 Thin 10SC-481VN', 'MSI', 90, 23000000, 30, NULL, NULL),
(12, 'Laptop MSI Gaming Katana GF66 11UD 697VN', 'MSI', 90, 31000000, 30, NULL, NULL),
(13, 'Laptop Lenovo ThinkBook 14 G3 ACL R7', 'Lenovo', 90, 24000000, 30, NULL, NULL),
(14, 'Laptop IdeaPad Slim 3 15ITL6', 'Lenovo', 90, 18000000, 30, NULL, NULL),
(15, 'Laptop Lenovo Gaming 3 15IHU6', 'Lenovo', 90, 29000000, 30, NULL, NULL),
(16, 'Laptop HP Envy 13 ba1535TU', 'HP', 90, 30000000, 30, NULL, NULL),
(17, 'Laptop HP Pavilion 15 eg0509TU', 'HP', 90, 16000000, 30, NULL, NULL),
(18, 'Laptop HP ZBook Firefly 14 G8', 'HP', 90, 35000000, 30, NULL, NULL);


--
-- Bẫy `product`
--
DELIMITER $$
CREATE TRIGGER `insert_4_default_image` AFTER INSERT ON `product` FOR EACH ROW BEGIN
	INSERT INTO productimages(productId,imgUrl) VALUES (new.productId,'https://i.imgur.com/GCV59zF.jpg');
    	INSERT INTO productimages(productId,imgUrl) VALUES (new.productId,'https://i.imgur.com/GCV59zF.jpg');
        	INSERT INTO productimages(productId,imgUrl) VALUES (new.productId,'https://i.imgur.com/GCV59zF.jpg');
            	INSERT INTO productimages(productId,imgUrl) VALUES (new.productId,'https://i.imgur.com/GCV59zF.jpg');
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `productimages`
--

CREATE TABLE `productimages` (
  `imageId` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED NOT NULL,
  `imgUrl` varchar(2048) NOT NULL DEFAULT 'https://i.imgur.com/GCV59zF.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `productimages`
--

INSERT INTO `productimages` (`imageId`, `productId`, `imgUrl`) VALUES
(1, 1, 'https://product.hstatic.net/1000026716/product/dell-3510_7768cc940e6b4de58af197d1e1fb3df6.jpg'),
(2, 1, 'https://product.hstatic.net/1000026716/product/dell-vostro-3510_99c033ea721544008c66559f668f3cf3.jpg'),
(3, 1, 'https://product.hstatic.net/1000026716/product/dv3510nt_cnb_90000td110_gy_712fc688cad046c6848ef4acc7356d86.jpg'),
(4, 1, 'https://product.hstatic.net/1000026716/product/laptop-vostro-3510-pdp-mod-1-bk_50cdd45dff8f40afb03bc3e896621c62.jpg'),
(5, 2, 'https://product.hstatic.net/1000026716/product/laptop_dell_inspiron_3505_y1n1t5_6bfb651afcb24c22b6662895cddb22c2.jpg'),
(6, 2, 'https://product.hstatic.net/1000026716/product/ell-inspiron-15-3505-y1n1t1-hieu-nang_daba1d99f7d84a9fbbd6c4f629fa8469_2c0f6ceeb50944da8e5a9a182caba5bc.jpg'),
(7, 2, 'https://product.hstatic.net/1000026716/product/dell-inspiron-15-3505-y1n1t1-thiet-ke_1295505a01e44f4fa06c8a8b51187960_9d77b657918b4024afa73e434c214d64.jpg'),
(8, 2, 'https://product.hstatic.net/1000026716/product/dell-inspiron-15-3505-y1n1t1-man-hinh_5cd3accb059f42c9acccb8c6dc084cc1_b00617c0ae55492896e57d8f557ef0e3.jpg'),
(9, 3, 'https://product.hstatic.net/1000026716/product/laptop_dell_vostro_3400_70253899_404187b9cca241f28ba323f4ce7b95af.jpg'),
(10, 3, 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__1__fcf178dc8bf14b6b8bf5c28e52d97ddf.png'),
(11, 3, 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__1__fcf178dc8bf14b6b8bf5c28e52d97ddf.png'),
(12, 3, 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__3__e229125ccbe14c338dc0d3b8ebe0ac28.png'),
(13, 4, 'https://product.hstatic.net/1000026716/product/rog_flow_x13_gv301qc_k6052t_677c9340e31741f8a5b12383c9774aa2.png'),
(14, 4, 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-gaming-asus-rog-flow-x13-gv301qc-k6052t-2_c2bb7c8a12044c9f99a108a9396565c6.png'),
(15, 4, 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-gaming-asus-rog-flow-x13-gv301qc-k6052t-4_a201c84a62f5497b972f1f71925cb355.png'),
(16, 4, 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-gaming-asus-rog-flow-x13-gv301qc-k6052t-5_cd7876779fa1434598182e1af58afb5f.png'),
(17, 5, 'https://product.hstatic.net/1000026716/product/laptop_asus_vivobook_a515ea_l12033w_6e88e3f77c5a4dd0b95344b82ef42f2c.jpg'),
(18, 6, 'https://product.hstatic.net/1000026716/product/laptop_asus_vivobook_a515ea_l11171t_be80491f2a074d598c048c2f2b5b1d8e.jpg'),
(19, 7, 'https://product.hstatic.net/1000026716/product/laptop_asus_vivobook_a515ea_l11171t_be80491f2a074d598c048c2f2b5b1d8e.jpg'),
(20, 8, 'https://product.hstatic.net/1000026716/product/laptop_asus_vivobook_a515ea_l11171t_be80491f2a074d598c048c2f2b5b1d8e.jpg'),
(21, 9, 'https://product.hstatic.net/1000026716/product/laptop_asus_vivobook_a515ea_l11171t_be80491f2a074d598c048c2f2b5b1d8e.jpg'),
(22, 10, 'https://product.hstatic.net/1000026716/product/laptop_asus_vivobook_a515ea_l11171t_be80491f2a074d598c048c2f2b5b1d8e.jpg'),
(23, 11, 'https://product.hstatic.net/1000026716/product/laptop_asus_vivobook_a515ea_l11171t_be80491f2a074d598c048c2f2b5b1d8e.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `specs`
--

CREATE TABLE `specs` (
  `productId` int(10) UNSIGNED NOT NULL,
  `RAM` varchar(10) NOT NULL DEFAULT '4 GB DDR3L',
  `CPU` varchar(32) NOT NULL DEFAULT 'i5-6200U' COMMENT 'i5-6200U',
  `screen` varchar(255) NOT NULL DEFAULT 'FHD' COMMENT 'HD,FHD,2K,4K',
  `battery` varchar(10) NOT NULL DEFAULT 'Li-Ion' COMMENT 'Li-Ion,Li-Po',
  `weight` int(10) NOT NULL DEFAULT 2500 COMMENT 'g',
  `size` varchar(255) NOT NULL DEFAULT 'dài: 25, rộng: 25, dày: 25' COMMENT 'mm',
  `OS` varchar(64) NOT NULL DEFAULT 'Microsoft Windows 10 Home' COMMENT 'tên hệ điều hành',
  `port` varchar(255) NOT NULL DEFAULT '1x USB 2.0, 2x USB 3.0',
  `drive` varchar(255) NOT NULL DEFAULT '1x SSD 256GB, 2x HDD 512GB',
  `GPU` varchar(255) NOT NULL DEFAULT '1x RTX R5M335, 1x AMD radeon',
  `color` varchar(255) NOT NULL DEFAULT 'đỏ, vàng, đen'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `specs`
--

INSERT INTO `specs` (`productId`, `RAM`, `CPU`, `screen`, `battery`, `weight`, `size`, `OS`, `port`, `drive`, `GPU`, `color`) VALUES
(1, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(2, '8', 'i5-8000U', 'FHD', 'Li-Ion', 2800, '250', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(3, '4', 'i5-7000U', 'HD', 'Li-Ion', 2500, '285', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(4, '4', 'i5-8200H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(5, '16', 'i7-6200H', 'FHD', 'Li-Ion', 2900, '295', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(6, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(7, '4', 'i3-6200U', 'FHD', 'Li-Ion', 3000, '280', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(8, '4', 'i5-6200U', 'FHD', 'Li-Ion', 2000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(9, '8', 'i3-3200U', 'HD', 'Li-Ion', 2800, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(10, '8', 'i7-6200U', 'FHD', 'Li-Ion', 4000, '255', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(11, '8', 'i5-6200U', 'FHD', 'Li-Ion', 2700, '310', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(12, '8', 'i3-3200U', 'FHD', 'Li-Ion', 4000, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(13, '4', 'i5-6200U', 'HD', 'Li-Ion', 3000, '285', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(14, '4', 'i3-3200U', 'HD', 'Li-Ion', 3500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(15, '16', 'i7-6200H', 'FHD', 'Li-Ion', 4500, '255', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(16, '4', 'i5-6200U', 'HD', 'Li-Ion', 2700, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(17, '16', 'i5-6200U', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen'),
(18, '4', 'i5-6200U', 'HD', 'Li-Ion', 2800, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen');


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `userId` int(10) UNSIGNED NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `phoneNumber` varchar(16) DEFAULT NULL,
  `address` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`userId`, `name`, `phoneNumber`, `address`) VALUES
(2, NULL, NULL, NULL),
(3, NULL, NULL, NULL),
(5, NULL, NULL, NULL),
(7, NULL, NULL, NULL),
(8, NULL, NULL, NULL),
(9, NULL, NULL, NULL),
(25, NULL, NULL, NULL),
(26, NULL, NULL, NULL),
(27, NULL, NULL, NULL);


--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`accId`),
  ADD UNIQUE KEY `userName` (`userName`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admId`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`cmtId`),
  ADD KEY `comment_newId` (`newsId`),
  ADD KEY `comment_accId` (`accId`),
  ADD KEY `comment_productId` (`productId`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsId`),
  ADD KEY `new_admId` (`admId`);

--
-- Chỉ mục cho bảng `orderhasproduct`
--
ALTER TABLE `orderhasproduct`
  ADD UNIQUE KEY `productId_orderId_uq` (`productId`,`orderId`),
  ADD KEY `orderId` (`orderId`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `orders_userId` (`userId`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`),
  ADD UNIQUE KEY `name_u` (`name`);

--
-- Chỉ mục cho bảng `productimages`
--
ALTER TABLE `productimages`
  ADD PRIMARY KEY (`imageId`),
  ADD KEY `productId` (`productId`);

--
-- Chỉ mục cho bảng `specs`
--
ALTER TABLE `specs`
  ADD PRIMARY KEY (`productId`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `phoneNumber` (`phoneNumber`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `accId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `cmtId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `newsId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `productimages`
--
ALTER TABLE `productimages`
  MODIFY `imageId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1029;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admId` FOREIGN KEY (`admId`) REFERENCES `account` (`accId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `account_accId` FOREIGN KEY (`accId`) REFERENCES `account` (`accId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_newId` FOREIGN KEY (`newsId`) REFERENCES `news` (`newsId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_productId` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `new_admId` FOREIGN KEY (`admId`) REFERENCES `admin` (`admId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orderhasproduct`
--
ALTER TABLE `orderhasproduct`
  ADD CONSTRAINT `orderhasproduct_orderId` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderhasproduct_productId` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `productimages`
--
ALTER TABLE `productimages`
  ADD CONSTRAINT `productimages_productId` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `specs`
--
ALTER TABLE `specs`
  ADD CONSTRAINT `specs_productId` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `account` (`accId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
