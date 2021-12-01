-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 01, 2021 lúc 02:52 PM
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
(4, 'anlam00', 'admin@gmail.com', 'acc505a1a9d9d3cfd7a9f2cc7237dc77a25aafc74502bcef541a79b3192e9fb3', '1', 'https://i.imgur.com/h8nIsKZ.png', NULL),
(26, 'Bao_Nguyen_Huu1637985561', 'bao.nguyen.huu@hcmut.edu.vn', '0fe99c91511dfbd377a3aadbc1074c92ded25169d8cfe19e9ef7acb6c080c261', '0', 'https://lh3.googleusercontent.com/a-/AOh14GjrIxUJ5v6m4VF6u_v-ASis7Nfd-yRQw_2rC7YLAw=s96-c', NULL),
(27, 'Viost1637985922', 'vios.tee979@gmail.com', '82b94b3d127e9e471b1824f6953991831d2bebd7b93367bd952e19b2197c2f0f', '0', 'https://lh3.googleusercontent.com/a-/AOh14GhtEweZ2PGMw6VsfShyiqkUKX0GngnLFy-epUio=s96-c', NULL),
(33, 'Viost1638259561', 'vios.tee973@gmail.com', 'd21327c32c19459cabfa8d6ce01f9f580203b0d9d8d8b655c81d8796cc3d68eb', '0', 'https://lh3.googleusercontent.com/a-/AOh14Gh2D32D8KjY4-WcGswXd8j1Pdn1UWF8ep7_DIjn=s96-c', NULL),
(34, 'vios.tee974', 'vios.tee974@gmail.com', '8bb0cf6eb9b17d0f7d22b456f121257dc1254e1f01665370476383ea776df414', '0', 'https://i.imgur.com/AxnVk1a.png', NULL),
(35, 'Viost1638271017', 'vios.tee975@gmail.com', 'c789743f0bc1d20b3ac5a362952ea44cf2da26422f9a0329849147dbd506170b', '0', 'https://lh3.googleusercontent.com/a-/AOh14GinFbKP2nPoIXyBAnY7s7aeT06lK8H1tmnS--NC=s96-c', NULL),
(36, 'vios.tee97', 'vios.tee97@gmail.com', 'c789743f0bc1d20b3ac5a362952ea44cf2da26422f9a0329849147dbd506170b', '0', 'https://i.imgur.com/AxnVk1a.png', NULL);

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
  `admId` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`admId`, `name`, `phoneNumber`, `address`) VALUES
(4, 'Nguyễn Hữu Bảo', '0905', 'ktx khu a');

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `adtable`
-- (See below for the actual view)
--
CREATE TABLE `adtable` (
`accId` int(10) unsigned
,`userName` varchar(128)
,`email` varchar(320)
,`password` varchar(256)
,`isAdmin` varchar(20)
,`avatar` varchar(255)
,`code` varchar(20)
,`admId` int(10) unsigned
,`name` varchar(255)
,`phoneNumber` varchar(255)
,`address` varchar(255)
);

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
(10, 4, 'Dòng máy chơi game của Dell', '2021-06-06 16:25:21', '<div>Cân mọi loại game</div>', 'https://kimlongcenter.com/upload/image/top-3-laptop-dell-gaming-hot-nhat-2021.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderhasproduct`
--

CREATE TABLE `orderhasproduct` (
  `productId` int(10) UNSIGNED NOT NULL,
  `orderId` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `productCost` int(16) UNSIGNED DEFAULT NULL COMMENT 'tổng giá của 1 loại sản phẩm',
  `ratingContent` text DEFAULT NULL,
  `ratingPoint` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
    ) != '3' AND
    (old.ratingContent != new.ratingContent or old.ratingPoint != new.ratingPoint
     or old.ratingContent is null AND new.ratingContent is not null
     or old.ratingPoint is null and new.ratingPoint is not null) THEN
    
    	SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'statusmust3';
        
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
        SET MESSAGE_TEXT = 'ratedbefore';       
    END IF;

END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `cal_productCost` BEFORE INSERT ON `orderhasproduct` FOR EACH ROW BEGIN
	SET NEW.productCost =
    (
    	SELECT oldCost*(1-0.01*discount)*NEW.quantity
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
    SET p.numInStock = p.numInStock - new.quantity
    WHERE p.productId = new.productId;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_productCost (for test)` BEFORE UPDATE ON `orderhasproduct` FOR EACH ROW BEGIN
	SET NEW.productCost =
    (
    	SELECT oldCost*(1-0.01*discount)*NEW.quantity
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
    SET p.numInStock = p.numInStock - new.quantity + old.quantity
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
  `newCost` int(10) GENERATED ALWAYS AS (`oldCost` * (100 - `discount`) / 100) STORED,
  `discount` int(3) NOT NULL DEFAULT 0 COMMENT 'giảm giá nhiêu %',
  `aveRating` float DEFAULT NULL,
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
  `color` varchar(255) NOT NULL DEFAULT 'đỏ, vàng, đen',
  `image1` varchar(255) NOT NULL DEFAULT 'https://i.imgur.com/GCV59zF.jpg',
  `image2` varchar(255) NOT NULL DEFAULT 'https://i.imgur.com/GCV59zF.jpg',
  `image3` varchar(255) NOT NULL DEFAULT 'https://i.imgur.com/GCV59zF.jpg',
  `image4` varchar(255) NOT NULL DEFAULT 'https://i.imgur.com/GCV59zF.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`productId`, `name`, `manu`, `numInStock`, `oldCost`, `discount`, `aveRating`, `RAM`, `CPU`, `screen`, `battery`, `weight`, `size`, `OS`, `port`, `drive`, `GPU`, `color`, `image1`, `image2`, `image3`, `image4`) VALUES
(1, 'Laptop Dell Vostro 3510 7T2YC1', 'DELL', 95, 22790000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_dell_vostro_3510_7t2yc1_e4a6b5c3385b4e4980d1b78b738a1966.jpg', 'https://product.hstatic.net/1000026716/product/dell-vostro-3510_2477f226217a4e358c100275093e27c7.jpg', 'https://product.hstatic.net/1000026716/product/dv3510nt_cnb_00000ff090_gy_f576d5c94b31473a9fa203a13bb98dc7.jpg', 'https://product.hstatic.net/1000026716/product/bkp_dv3510nt_cnb_90000td110_gy_34e83e4f40b240959c03b51b7ee1a813.jpg'),
(2, 'Laptop Dell Inspiron 3505 Y1N1T5', 'DELL', 95, 15299000, 10, 5, '8', 'i5-8000U', 'FHD', 'Li-Ion', 2800, '250', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_dell_inspiron_3505_y1n1t5_6bfb651afcb24c22b6662895cddb22c2.jpg', 'https://product.hstatic.net/1000026716/product/ell-inspiron-15-3505-y1n1t1-hieu-nang_daba1d99f7d84a9fbbd6c4f629fa8469_2c0f6ceeb50944da8e5a9a182caba5bc.jpg', 'https://product.hstatic.net/1000026716/product/dell-inspiron-15-3505-y1n1t1-thiet-ke_1295505a01e44f4fa06c8a8b51187960_9d77b657918b4024afa73e434c214d64.jpg', 'https://product.hstatic.net/1000026716/product/dell-inspiron-15-3505-y1n1t1-man-hinh_5cd3accb059f42c9acccb8c6dc084cc1_b00617c0ae55492896e57d8f557ef0e3.jpg'),
(3, 'Laptop Dell Vostro 14 3400 YX51W', 'DELL', 94, 7000000, 10, 5, '4', 'i5-7000U', 'HD', 'Li-Ion', 2500, '285', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_dell_vostro_14_3400_yx51w2_c33f52b520c34a5fbaf0a6df8f8fd37a.jpg', 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__1__0d08a2a888864e16b3bc348516da2470.png', 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__2__f7ace594d6f34eef827d1bc43d982bcc.png', 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__3__8705f3379d6c4b399e44ad43d603ea4b.png'),
(4, 'Laptop Gaming Asus ROG Flow X13 ', 'Asus', 100, 1000000, 10, NULL, '4', 'i5-8200H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/rog_flow_x13_gv301qc_k6052t_677c9340e31741f8a5b12383c9774aa2.png', 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-gaming-asus-rog-flow-x13-gv301qc-k6052t-1_e565276cf9214c5aacfb91fda3a6c3d3.png', 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-gaming-asus-rog-flow-x13-gv301qc-k6052t-3_6cc903bbc9df454e9c2281329eb60003.png', 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-gaming-asus-rog-flow-x13-gv301qc-k6052t-8_1ba098d2c3a0464a97cb01aacb80fffb.jpg'),
(5, 'Laptop Asus Vivobook A515EA L120', 'Asus', 100, 1000000, 10, 4.5, '16', 'i7-6200H', 'FHD', 'Li-Ion', 2900, '295', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_asus_vivobook_a515ea_l12033w_6e88e3f77c5a4dd0b95344b82ef42f2c.jpg', 'https://product.hstatic.net/1000026716/product/asus_vivobook_a515__1__ab33f22cee6f490691b6fa7dabe78bca.jpg', 'https://product.hstatic.net/1000026716/product/asus_vivobook_a515__2__c19fda3304744ae689beee5ae86deb9c.jpg', 'https://product.hstatic.net/1000026716/product/asus_vivobook_a515__3__0864ccff8be44764a8a9d3ec25047bea.jpg'),
(6, 'Laptop Gaming Asus ROG Zephyrus ', 'Asus', 100, 1000000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_asus_rog_zephyrus_g14_ga401qe_k2097t_52a34ad4779f4bbfa6832d860db42ed9.jpg', 'https://product.hstatic.net/1000026716/product/g14-grey-01-light-2021_4cbf28cc17a6479d87443a0fd66095d6.jpg', 'https://product.hstatic.net/1000026716/product/g14-grey-05-light-2021_d46930009539467ab7729d61cc46e39f.jpg', 'https://product.hstatic.net/1000026716/product/g14-grey-11-light-2021_0988a532dab8496ca6d0404f32c24c77.jpg'),
(7, 'Laptop Gaming Acer Nitro 5 AN515', 'Acer', 100, 1000000, 10, NULL, '4', 'i3-6200U', 'FHD', 'Li-Ion', 3000, '280', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_an515_57_71vv_cddfd6676f77448586f41248955dbe63.jpg', 'https://product.hstatic.net/1000026716/product/nitro_5_eagle__3__7064eb7d2bff4de68babb10d5cae7c3b.png', 'https://product.hstatic.net/1000026716/product/nitro_5_eagle__4__5f598ab3e5474b92ba96cceedcacec62.png', 'https://product.hstatic.net/1000026716/product/nitro_5_eagle__5__2b1955c56004495abe9a275bfb437f62.png'),
(8, 'Laptop Acer Aspire 3 A315 56 37D', 'Acer', 100, 1000000, 10, NULL, '4', 'i5-6200U', 'FHD', 'Li-Ion', 2000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop-acer-aspire-3-a315-56-37dv-1_14c2a4369f244da3a18a6a9884da2f0a_2d6425a24d4e40bea850a55c2ff54d59.jpg', 'https://product.hstatic.net/1000026716/product/p-acer-aspire-3-a315-42-r8px-1_14c2a4369f244da3a18a6a9884da2f0a_grande_990d111a99f9421ab10e7a8a31b3dc12.jpg', 'https://product.hstatic.net/1000026716/product/p-acer-aspire-3-a315-42-r8px-2_437eed7003ca40a2a05a60d2356089c6_grande_ec84095863e94a38a2aa943d27b28e49.jpg', 'https://product.hstatic.net/1000026716/product/p-acer-aspire-3-a315-42-r8px-3_bd4b9739a36844b49d68768112cc346b_grande_5f5448b3f14e4ec7943d4bb0701d253b.jpg'),
(9, 'Laptop Gaming Acer Predator Heli', 'Acer', 100, 2000000, 20, NULL, '8', 'i3-3200U', 'HD', 'Li-Ion', 2800, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/predator_helios_300_ph315_54_75yd_7183d2fdd4e643ad81182e0efe78bb9c.png', 'https://product.hstatic.net/1000026716/product/predator-helios-300-02_60efc2e699084caab27c3da8ea0b40f2.png', 'https://product.hstatic.net/1000026716/product/predator-helios-300-03_5aa47cf1ed12470dbcd8a19ad6ae34d9.png', 'https://product.hstatic.net/1000026716/product/predator-helios-300-04_0a597c0a8a1449a18e6063f9d39ddba4.png'),
(10, 'Laptop MSI Modern 14 B11MOU 851V', 'MSI', 65, 18000000, 30, NULL, '8', 'i7-6200U', 'FHD', 'Li-Ion', 4000, '255', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/msi_modern_14_gray_ddde8da8544f45388ae9be9877d67555.jpg', 'https://product.hstatic.net/1000026716/product/90b1670b_m14gray-productphoto3_ad88d26a626640088748bc663cc9e5ff.jpg', 'https://product.hstatic.net/1000026716/product/90b1670b_m14gray-productphoto2_29ff64a212044a8d91c6d88273113fa3.jpg', 'https://product.hstatic.net/1000026716/product/90b1670b_m14gray-productphoto_31aaca0dc0924b03a619510f57a1de7b.jpg'),
(11, 'Laptop Gaming MSI GF63 Thin 10SC', 'MSI', 87, 23000000, 30, 5, '8', 'i5-6200U', 'FHD', 'Li-Ion', 2700, '310', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/020vn_369aa2108cb74e37995c52c5c9bd13b5.png', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-gaming-msi-gf63-thin-10sc-020vn_8faaaaaf90924edda84d5d4a83d984dc.png', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-gaming-msi-gf63-thin-10sc-020vn-3_d13f3014957c4fa2b2934df24e4ff43b.png', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-gaming-msi-gf63-thin-10sc-020vn-1_379e38006b304942b4016a090c918aa8.png'),
(12, 'Laptop Gaming MSI Katana GF66 11', 'MSI', 80, 31000000, 30, 5, '8', 'i3-3200U', 'FHD', 'Li-Ion', 4000, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/3060_4eeae60dcd7146a9958df27ada7c3592.jpg', 'https://product.hstatic.net/1000026716/product/laptop_msi_gf66_-_77_a90bf596501649338c3f40867bd75898.jpg', 'https://product.hstatic.net/1000026716/product/laptop_msi_gf66_-_75_326d936b20714fc5a9fcdcbed0cf19be.jpg', 'https://product.hstatic.net/1000026716/product/laptop_msi_gf66_-_76_ca3f2cd81b024f32b892d35160e8d9ee.jpg'),
(13, 'Laptop LENOVO ThinkBook 15 G2 IT', 'Lenovo', 87, 24000000, 30, NULL, '4', 'i5-6200U', 'HD', 'Li-Ion', 3000, '285', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_lenovo_thinkbook_15_g2_itl_20ve006wvn_2330cc1438304a66a4b80cf800d95e6c.jpg', 'https://product.hstatic.net/1000026716/product/thinkbook_15_g2_itl_ct2_01_471fdf1f157148d1b15c26e0eb28fa7c.jpg', 'https://product.hstatic.net/1000026716/product/thinkbook_15_g2_itl_ct2_02_5fa0d3b9c8a9420eba323d28de60cae2.jpg', 'https://product.hstatic.net/1000026716/product/thinkbook_15_g2_itl_ct1_02_94de4917eed94fd5b787fe018984b99c.jpg'),
(14, 'Laptop Lenovo IdeaPad 3 15ITL6 8', 'Lenovo', 90, 18000000, 30, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_lenovo_ideapad_3_15itl6_82h800m4vn_21aa3c1baa4b4eb283f49600b1465f29.jpg', 'https://product.hstatic.net/1000026716/product/-15itl6-82h800m4vn-i3-1115g4-1_ce062b82e1cb4421b05de0dc5a7d379f_master_ec14fa097f47416f8001f8163398f0e5.jpg', 'https://product.hstatic.net/1000026716/product/-15itl6-82h800m4vn-i3-1115g4-2_164bd1dbc67448eaae89fb3fee2d6753_grande_2d21afb57edb40e693ea03ad12473ecf.jpg', 'https://product.hstatic.net/1000026716/product/-15itl6-82h800m4vn-i3-1115g4-2_164bd1dbc67448eaae89fb3fee2d6753_grande_2d21afb57edb40e693ea03ad12473ecf.jpg'),
(15, 'Laptop gaming Lenovo Legion 5 15', 'Lenovo', 90, 29000000, 30, NULL, '16', 'i7-6200H', 'FHD', 'Li-Ion', 4500, '255', 'Microsoft Windows 10 Pro', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_lenovo_legion_5_15ach6a_82nw003cvn_f8f2a243d03d400bb66495bae181c44f.jpg', 'https://product.hstatic.net/1000026716/product/legion_5__3__4e075f0602474577bf98216c4fa6c7d2.png', 'https://product.hstatic.net/1000026716/product/legion_5__4__88c14ffb798d492bb17ea6d2d8068063.png', 'https://product.hstatic.net/1000026716/product/legion_5__5__a60196e078a84618a534d255b45d91e4.png'),
(16, 'Laptop HP Envy 13 BA1534TU 4U6M3', 'HP', 90, 30000000, 30, NULL, '4', 'i5-6200U', 'HD', 'Li-Ion', 2700, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_hp_envy_13_ba1534tu_4u6m3pa_de75920088e4443098152b6472bf48fd.jpg', 'https://product.hstatic.net/1000026716/product/hp_envy_13__5__6da0e4fd80b14e3880e3a362cf2ba195.png', 'https://product.hstatic.net/1000026716/product/hp_envy_13__1__38c7e774a3cc44ad83f0915028e7eac4.png', 'https://product.hstatic.net/1000026716/product/hp_envy_13__3__752360fa7e9b47a8924a605e08de4b95.png'),
(17, 'Laptop HP Pavilion 15 eg0505TX 4', 'HP', 90, 16000000, 30, NULL, '16', 'i5-6200U', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_hp_pavilion_15_eg0505tx_46m03pa_434e4d9bd2db4913933977335a73a93f.jpg', 'https://product.hstatic.net/1000026716/product/hp_pavilion_15_2021__1__e1a9393628614cbbb50472fa47bbfb39.png', 'https://product.hstatic.net/1000026716/product/hp_pavilion_15_2021__3__5586741a16354976be1da2957f7a1573.png', 'https://product.hstatic.net/1000026716/product/hp_pavilion_15_2021__4__de22a99938454e0ab3a5a4833de20c7f.png'),
(18, 'Laptop Gaming HP Omen 16 b0127TX', 'HP', 90, 35000000, 30, NULL, '4', 'i5-6200U', 'HD', 'Li-Ion', 2800, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_hp_omen_16_b0127tx_4y0w7pa_e051faac2a334d37b8c9e0afe678bd0e.jpg', 'https://product.hstatic.net/1000026716/product/_nonnumpad_4zone_lcd_shadowblack_nt_hdcam_nonodd_win_10_coreset_34rear_dbab584eab334f64b4da80b41b0dcde6.jpg', 'https://product.hstatic.net/1000026716/product/w_nonnumpad_4zone_lcd_shadowblack_nt_hdcam_nonodd_win_10_coreset_front_5c4565d7a8d84205a56a217bae4e91b3.jpg', 'https://product.hstatic.net/1000026716/product/nnumpad_4zone_lcd_shadowblack_nt_hdcam_nonodd_win_10_coreset_frontleft_c77c093c6c4e40e89840156668992423.jpg'),
(19, 'Laptop Dell Inspiron 3511 P112F0', 'DELL', 90, 22790000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00055rf110_bk_5db59fe6aa0847f3b3cdef9951a3a1b6.jpg', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00055lf110_bk_d364cf2dbc814923a9a4f63b19bd7dde.jpg', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00055rf110_bk_5db59fe6aa0847f3b3cdef9951a3a1b6.jpg', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00060lb055_bk_df3c9935af314ab08905866d04be0fb0.jpg'),
(20, 'Laptop Dell Inspiron 15 3505 Y1N', 'DELL', 90, 22790000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_dell_inspiron_15_3505_y1n1t1_91fc74eb241145e09005fe960af79bc8.jpg', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-dell-inspiron-15-3505-y1n1t1-hieu-nang_daba1d99f7d84a9fbbd6c4f629fa8469.jpg', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-dell-inspiron-15-3505-y1n1t1-man-hinh_5cd3accb059f42c9acccb8c6dc084cc1.jpg', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-dell-inspiron-15-3505-y1n1t1-thiet-ke_1295505a01e44f4fa06c8a8b51187960.jpg'),
(21, 'Laptop Dell Inspiron 14 5415 702', 'DELL', 90, 22790000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/dell_inspiron_14_5415_70262929_161dfc9e598d4b7d941d90982a2d9d2d.jpg', 'https://product.hstatic.net/1000026716/product/dell_inspiron_14_5415__1__13c3ead284ad4d2e8f6b371e41b76309.jpg', 'https://product.hstatic.net/1000026716/product/dell_inspiron_14_5415__2__f7f0cfb1c8e24f5fa5b50e1be904d51a.jpg', 'https://product.hstatic.net/1000026716/product/dell_inspiron_14_5415__6__9e2cc0370baf46ac9e18225da01e5bf5.jpg'),
(22, 'Laptop Dell Vostro 3510 (P112F00', 'DELL', 90, 22790000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/dell-3510_7768cc940e6b4de58af197d1e1fb3df6.jpg', 'https://product.hstatic.net/1000026716/product/dell-vostro-3510_99c033ea721544008c66559f668f3cf3.jpg', 'https://product.hstatic.net/1000026716/product/dv3510nt_cnb_90000td110_gy_712fc688cad046c6848ef4acc7356d86.jpg', 'https://product.hstatic.net/1000026716/product/laptop-vostro-3510-pdp-mod-1-bk_50cdd45dff8f40afb03bc3e896621c62.jpg'),
(23, 'Laptop Dell Inspiron 3511 P112F0', 'DELL', 90, 19290000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_dell_inspiron_3511_p112f001bbl__black__5f4631e4456f4ce7aa54308a364b80d8.jpg', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00055lf110_bk_34db105f3dc74adead34a205ae232bdd.jpg', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00055rf110_bk_d592f136bb924f709cf998bf166de28d.jpg', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00060lb055_bk_ac83294c4afe492783fc7003e93ffacf.jpg'),
(24, 'Laptop Gaming Dell Alienware M15', 'DELL', 90, 57990000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_dell_alienware_m15_r6_p109f004bbl_e9c1f4cdd3d24a238442333904656ec1.jpg', 'https://product.hstatic.net/1000026716/product/m15-r6-p109f004bbl-i7-11800h-1_17cc514142fe470096ed9328f6473b5b_master_8df26ca0300448199d13efb98b8ea97d.png', 'https://product.hstatic.net/1000026716/product/m15-r6-p109f004bbl-i7-11800h-2_0045940f69e5452ab63f28916c551813_master_a2257fb2a84a4538b4fb347661273f1e.png', 'https://product.hstatic.net/1000026716/product/m15-r6-p109f004bbl-i7-11800h-3_44d5d038b83f4879bb60ffe4fab9e19a_master_bdca31bd1b4a497bacb76bbf133ad53e.png'),
(25, 'Laptop Dell Inspiron 3505 Y1N1T3', 'DELL', 90, 14990000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_dell_inspiron_3505_y1n1t3_829f542ed4044e64a101eadfc41f4593.jpg', 'https://product.hstatic.net/1000026716/product/ell-inspiron-15-3505-y1n1t1-hieu-nang_daba1d99f7d84a9fbbd6c4f629fa8469_d0a2022dbec9462eb972b6e5f324423c.jpg', 'https://product.hstatic.net/1000026716/product/dell-inspiron-15-3505-y1n1t1-thiet-ke_1295505a01e44f4fa06c8a8b51187960_94e150fc431c4c77a6fa15005c6b379e.jpg', 'https://product.hstatic.net/1000026716/product/dell-inspiron-15-3505-y1n1t1-man-hinh_5cd3accb059f42c9acccb8c6dc084cc1_b372695378c249d0b9045971312dcf19.jpg'),
(26, 'Laptop Dell Vostro 3400 70253899', 'DELL', 90, 14990000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_dell_vostro_3400_70253899_404187b9cca241f28ba323f4ce7b95af.jpg', 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__1__fcf178dc8bf14b6b8bf5c28e52d97ddf.png', 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__2__29709aacc6174eb3b7297595d803a7a7.png', 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__3__e229125ccbe14c338dc0d3b8ebe0ac28.png'),
(27, 'Laptop Dell Vostro 3400 70235020', 'DELL', 90, 15190000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_dell_vostro_3400_70235020_fde1a7bcd34a436e8186f0e7b52404c6.jpg', 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__1__0820b82e9a794277866f9835f112487b.png', 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__2__c359b5f641b64917915821ddab22054a.png', 'https://product.hstatic.net/1000026716/product/dell-vostro-3400__3__4e136117d0244779a89865ae195f4d43.png'),
(28, 'Laptop Dell 15 Inspiron 3501 P90', 'DELL', 90, 17790000, 10, NULL, '4', 'i3-3200U', 'HD', 'Li-Ion', 3000, '300', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/dell_15_inspiron_3501_p90f005n3501b_b0fc3939615c4e3c85aa85bc94f833c2.jpg', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00055lf110_bk_34db105f3dc74adead34a205ae232bdd.jpg', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00055rf110_bk_d592f136bb924f709cf998bf166de28d.jpg', 'https://product.hstatic.net/1000026716/product/in3511nt_cnb_00060lb055_bk_ac83294c4afe492783fc7003e93ffacf.jpg'),
(29, 'Laptop ASUS Vivobook X515EA BQ10', 'Asus', 90, 13190000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/asus_x515_m515_product_photo_1s_transparent_silver_13_fingerprint_f26c7c75d1454b6ea3a91a10012b04ad.jpg', 'https://product.hstatic.net/1000026716/product/asus_x515_m515_product_photo_1s_transparent_silver_09_fingerprint_a72934baafc3401aa5315794d3c21c84.jpg', 'https://product.hstatic.net/1000026716/product/asus_x515_m515_product_photo_1s_transparent_silver_10_fingerprint_3df82b80361c411bae9986341df4e534.jpg', 'https://product.hstatic.net/1000026716/product/asus_x515_m515_product_photo_1s_transparent_silver_12_fingerprint_463e44b88eff401fb0f76772d3a7bbb6.jpg'),
(30, 'Laptop ASUS Vivobook A515EA BQ15', 'Asus', 90, 15190000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_asus_vivobook_a515ea_bq1530t_5d3c105833c040869c23b55d2af132ac.jpg', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-a515ea-bq1530t-1_af9e1d1b6c634f1b9fe241b91557276e.png', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-a515ea-bq1530t-2_cec98a2126274c748bf4a5b7c4a5a230.png', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-a515ea-bq1530t-3_b90bc9817aca462c83573cc01a884e3c.png'),
(31, 'Laptop ASUS Vivobook Flip 14 TP4', 'Asus', 90, 15990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/khunglaptopwebsite_27c0d944526348dba92b421c5329ac68.jpg', 'https://product.hstatic.net/1000026716/product/icon_badge_opt2_0f1274ce3a4541798dc440b2cb390e07.jpg', 'https://product.hstatic.net/1000026716/product/asus_tp470_product_photo__2s_transparent_silver_09_8b519295cf9a409e974c622b12deb872.jpg', 'https://product.hstatic.net/1000026716/product/asus_tp470_product_photo__2s_transparent_silver_12_b89a7eb24a504d6ba0d56f1c6fbadaab.jpg'),
(32, 'Laptop ASUS X515EA EJ1046T', 'Asus', 90, 16590000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/x515ea_3539618a4ecd4bc18958e0ad55d1388d.jpg', 'https://product.hstatic.net/1000026716/product/asus_x515_m515_product_photo_1s_transparent_silver_07_fingerprint_b73c07fcb1234cfd948f647cdc3a0d3e.jpg', 'https://product.hstatic.net/1000026716/product/asus_x515_m515_product_photo_1s_transparent_silver_09_fingerprint_d4f16830c5ee4fdab2087bf51c59b3f3.jpg', 'https://product.hstatic.net/1000026716/product/asus_x515_m515_product_photo_1s_transparent_silver_12_fingerprint_38a8f81307174a29b596c803dc4b0911.jpg'),
(33, 'Laptop Asus Vivobook A515EA L120', 'Asus', 90, 18290000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/asus_vivobook_a515ea_l12033t_7f6dc1b44ff647e387cc0996566998a9.jpg', 'https://product.hstatic.net/1000026716/product/asus_vivobook_a515__1__92abcabcb54c4967961e2f43fdad6559.jpg', 'https://product.hstatic.net/1000026716/product/asus_vivobook_a515__2__77a143019e72417883192d594044ca69.jpg', 'https://product.hstatic.net/1000026716/product/asus_vivobook_a515__3__194f24e566124ab38048273793cd93eb.jpg'),
(34, 'Laptop Asus Zenbook UX425EA KI81', 'Asus', 90, 23590000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/zenbook_ux425__1__2fb9f6b417c345609e9b1b0800a8d57e.jpg', 'https://product.hstatic.net/1000026716/product/zenbook_ux425__1__9ef373474f734b79ac91843ad9bd3d66.png', 'https://product.hstatic.net/1000026716/product/zenbook_ux425__2__10106f9f4af34af39f57369ca5ee046f.png', 'https://product.hstatic.net/1000026716/product/zenbook_ux425__3__0e1e279e7f9e40cda1a4ec1ef00cda40.png'),
(35, 'Laptop Gaming Asus ROG Strix G15', 'Asus', 90, 23290000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/rog_strix_g15_g513ih_hn015t_9e61847a6b8245e9ab9fa32cc2ffb6ba.png', 'https://product.hstatic.net/1000026716/product/01_strixg_15_grey_0b72c5f88cbc4dc991be35ba30a65f70.png', 'https://product.hstatic.net/1000026716/product/02_strixg_15_grey_l_b33b3e528c024d20839282ac2258c0b0.png', 'https://product.hstatic.net/1000026716/product/11_strixg_15_grey_l_addd2ae810814df6b5d6fb94bb04e6bb.png'),
(36, 'Laptop Gaming Asus TUF Dash F15 ', 'Asus', 90, 24490000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/tuf_dash_f15_fx516pc_hn002t_66447d72b92c47d1bda542de985c48e8.png', 'https://product.hstatic.net/1000026716/product/gnbps2d5a11_2decb521ed074efe9ede5cfaf9e7c23a.jpg', 'https://product.hstatic.net/1000026716/product/gnbps3z69d1_f97da8f764314afab9503116662a345e.jpg', 'https://product.hstatic.net/1000026716/product/gnbps51afo1_d09e31b16df0479c8adc76d917564b8e.jpg'),
(37, 'Laptop Gaming Asus ROG Strix G15', 'Asus', 90, 25690000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/g513ic_639da597b0f442ada1c893e95032237a.jpg', 'https://product.hstatic.net/1000026716/product/04_strixg_15_grey_l_7cc6ce0aa8d44443b112ee5526d58d35.jpg', 'https://product.hstatic.net/1000026716/product/05_strixg_15_grey_l_9a086eeb4225492db929b4326c42b6b0.jpg', 'https://product.hstatic.net/1000026716/product/10_strixg_15_grey_l_8dbf1d6fcf6b41138f75c5a98e0fc25b.jpg'),
(38, 'Laptop Gaming Asus ROG Zephyrus ', 'Asus', 90, 33990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_asus_rog_zephyrus_g15_ga503qc_hn074t_b2b8c8f86e884497999c729c7588d5cb.jpg', 'https://product.hstatic.net/1000026716/product/g15-gray-02_e48d2db494d34fb0aa39cc331c3a2079.jpg', 'https://product.hstatic.net/1000026716/product/g15-gray-04_13326d86cec54a98883c95dbdd7f67c4.jpg', 'https://product.hstatic.net/1000026716/product/g15-gray-01_1a934845bcfb417c9625ab3e7bc82474.jpg'),
(39, 'Laptop Acer Aspire 3 A315 58 393', 'Acer', 90, 11590000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_acer_aspire_3_a315_58_3939_05f238da8e5b46e893b725d5eaf5f8ca.jpg', 'https://product.hstatic.net/1000026716/product/aspire-3-a315-58-sv-03c_fb35d8d29d434f2f8999b8f6f9f6b8dc.png', 'https://product.hstatic.net/1000026716/product/aspire-3-a315-58-sv-05_4a53983dfd364c99923fd1f7e82d0afc.png', 'https://product.hstatic.net/1000026716/product/aspire-3-a315-58-sv-05_4a53983dfd364c99923fd1f7e82d0afc.png'),
(40, 'Laptop Acer Aspire 3 A315 57G 31', 'Acer', 90, 12490000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/khunglaptopwebsite_31yd_1679f22c67464f26a81ed10a8855d86e.jpg', 'https://product.hstatic.net/1000026716/product/35172_acer_aspire_3_a315_57g_black_gallery_03_a75128cf692e47718771b1b677224127.png', 'https://product.hstatic.net/1000026716/product/35172_acer_aspire_3_a315_57g_black_gallery_07_0b68b7e50df8480eb42992d0e2a7a84d.png', 'https://product.hstatic.net/1000026716/product/35172_acer_aspire_3_a315_57g_black_gallery_08_bddde165d71843a3ba0628ce62820e8a.png'),
(41, 'Laptop Acer Aspire 3 A315 56 502', 'Acer', 90, 12790000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_acer_aspire_3_a315_56_502x_7e1e6090319b4b3784e3a281034e1d2e.jpg', 'https://product.hstatic.net/1000026716/product/35172_acer_aspire_3_a315_57g_black_gallery_03_a75128cf692e47718771b1b677224127.png', 'https://product.hstatic.net/1000026716/product/35172_acer_aspire_3_a315_57g_black_gallery_07_0b68b7e50df8480eb42992d0e2a7a84d.png', 'https://product.hstatic.net/1000026716/product/35172_acer_aspire_3_a315_57g_black_gallery_08_bddde165d71843a3ba0628ce62820e8a.png'),
(42, 'Laptop Acer Aspire A315 57G 524Z', 'Acer', 90, 15590000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/acer_aspire_a315_57g_524z_074bc20fe40c4496890e1df9c1ea9521.jpg', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-acer-aspire-a315-57g-524z-01_1684a3e848774ba886eddc121a5f487a.jpg', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-acer-aspire-a315-57g-524z-02_85c2b188237145a2a9ca7af3e80d2b41.jpg', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-acer-aspire-a315-57g-524z-03_d7e3ddf5aa034c95986331e910562bbb.jpg'),
(43, 'Laptop Acer Swift 3 SF314 43 R4X', 'Acer', 90, 20990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/20801_laptop_acer_swift_3_sf314_43_r4x3_3_c0fdd5aed2444f83af7138c622228726.jpg', 'https://product.hstatic.net/1000026716/product/20801_laptop_acer_swift_3_sf314_43_r4x3__5_e08a121460b941bb95599f92c7814a4b.jpg', 'https://product.hstatic.net/1000026716/product/20801_laptop_acer_swift_3_sf314_43_r4x3_2_7cf37ac87f434d3d92d351f8e9178125.jpg', 'https://product.hstatic.net/1000026716/product/20801_laptop_acer_swift_3_sf314_43_r4x3_3_c0fdd5aed2444f83af7138c622228726.jpg'),
(44, 'Laptop Acer Swift 3 Evo SF314 51', 'Acer', 90, 20990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_acer_swift_3_evo_sf314_511_59lv_1ae2e79cdacf49af9fd6a55d55b40d64.jpg', 'https://product.hstatic.net/1000026716/product/evo-sf314-511-59lv-i5-1135g7-1_737f1a0c67374134b401c5217c39ac51_grande_74411cfe88af4d919af61f49e20eba2e.png', 'https://product.hstatic.net/1000026716/product/evo-sf314-511-59lv-i5-1135g7-2_20a70657e6c640f485df2259d993544f_master_18b22faacdbd46e9aeb598ba4ea2ce65.png', 'https://product.hstatic.net/1000026716/product/evo-sf314-511-59lv-i5-1135g7-3_dcc938ba7004421cae0c79b8d57e91a3_master_31d171c393d349f19c71b557faf4b846.png'),
(45, 'Laptop Gaming Acer Aspire 7 A715', 'Acer', 90, 18390000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_acer_aspire_7_a715_42g_r4xx_b5656df4f39f42189a030191ded5604f.jpg', 'https://product.hstatic.net/1000026716/product/aspire_a715__3__7cddf7dd053c444f9ca44f30fcd70d67.jpg', 'https://product.hstatic.net/1000026716/product/aspire_a715__4__5e6798250ed04a5bbbb4ac673cb567b9.jpg', 'https://product.hstatic.net/1000026716/product/aspire_a715__5__c9cb4a90a5b74f8cb236cd9a2f69daae.jpg'),
(46, 'Laptop gaming Acer Nitro 5 AN515', 'Acer', 90, 32490000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_an515_45_r86d_d2021b48c438403f9025b1587cb52c83.jpg', 'https://product.hstatic.net/1000026716/product/acer_nitro_5__7__535c5f6b4e8048959db7c236fff43ad6.jpg', 'https://product.hstatic.net/1000026716/product/acer_nitro_5__2__1f1d168d3d9341fe8ed7b9f434bd6a15.jpg', 'https://product.hstatic.net/1000026716/product/acer_nitro_5__5__57570c3b897f4eefbd0ee33ce71f0d9d.jpg'),
(47, 'Laptop Gaming Acer Nitro 5 Eagle', 'Acer', 90, 27990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_eagle_an515_57_720a_a1fd2c10a46d4240a6bb2a12c61d907a.jpg', 'https://product.hstatic.net/1000026716/product/nitro_5_eagle__3__0969ba58c5d34020991662a423538097.png', 'https://product.hstatic.net/1000026716/product/nitro_5_eagle__5__df5b16e515914341bf3195fc6d548657.png', 'https://product.hstatic.net/1000026716/product/nitro_5_eagle__4__b11f1f16ca1a4e3b9a66de996ee4ca2e.png'),
(48, 'Laptop Acer Aspire 5 A514 54 540', 'Acer', 90, 17090000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/5_a514-54-540f_0c896d57eae342aea08f8b943b3302c3.jpg', 'https://product.hstatic.net/1000026716/product/6_1e69a3dad33c4fbc8ccafb6b7f8e8435.png', 'https://product.hstatic.net/1000026716/product/20801_laptop_acer_swift_3_sf314_43_r4x3_3_c0fdd5aed2444f83af7138c622228726.jpg', 'https://product.hstatic.net/1000026716/product/20801_laptop_acer_swift_3_sf314_43_r4x3_2_7cf37ac87f434d3d92d351f8e9178125.jpg'),
(49, 'Laptop MSI Modern 14 B10MW 646VN', 'MSI', 90, 16790000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_msi_modern_14_b10mw_646vn_d6ede02ae7ec49bfaee882c002d3f8d8.jpg', 'https://product.hstatic.net/1000026716/product/90b1670b_m14gray-productphoto_2179e981f5d54803bb76353ba1bba0bc.jpg', 'https://product.hstatic.net/1000026716/product/90b1670b_m14gray-productphoto2_4e7721dc4c9040c48dc5a4e0246266d3.jpg', 'https://product.hstatic.net/1000026716/product/90b1670b_m14gray-productphoto3_7359d4c4fe4d41998550e8526e667743.jpg'),
(50, 'Laptop MSI Modern 14 B11MOU 848V', 'MSI', 90, 20490000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_msi_modern_14_b11mou_848vn_6b5e2ac7486448aa9d95bfe1bde1ef16.jpg', 'https://product.hstatic.net/1000026716/product/90b1670b_m14gray-productphoto_a2418ba1e74847ab80cf0f6185e3bf01.jpg', 'https://product.hstatic.net/1000026716/product/90b1670b_m14gray-productphoto2_3cecb075641f42a29e171488045312f9.jpg', 'https://product.hstatic.net/1000026716/product/90b1670b_m14gray-productphoto3_9f9b127fab6f4d708753883ab3d811b9.jpg'),
(51, 'Laptop MSI Modern 14 B11SBU 668V', 'MSI', 90, 20490000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_msi_modern_14_b11sbu_668vn_197c30cd01b84916ae9a57c9102839e8.jpg', 'https://product.hstatic.net/1000026716/product/msi_modern_b11__1__10bbe6ad98e3453ba9828cb542a98a0f.png', 'https://product.hstatic.net/1000026716/product/msi_modern_b11__2__d5e637a3e5804190a0fb8b5ac7dd8cd4.png', 'https://product.hstatic.net/1000026716/product/msi_modern_b11__3__abb1f5e209b44ceea86b06f7d48b976e.png'),
(52, 'Laptop MSI Modern 14 B5M 064VN', 'MSI', 90, 16990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_msi_modern_14_b5m_064vn_76e4ffa6f7f140b389843afcf7e0dc5d.jpg', 'https://product.hstatic.net/1000026716/product/modern_14_b5m_064vn_r5_5500u_1_1bf542c6d5be4d58a8f16e3a75313425_master_5fc1af6e677943949fa6253185a5f406.png', 'https://product.hstatic.net/1000026716/product/-b5m-064vn-r5-5500u-8gb-512gb-amd-radeon-graphics-14-fhd-win-10-4-900x_58422d0e8a164aad98d021edf5c0f9d0.jpg', 'https://product.hstatic.net/1000026716/product/modern_14_b5m_064vn_r5_5500u_2_5b90f29a7aa5498f8ffd1044a83ac6ab_master_845323aebe294d1692039d88bb2017b6.png'),
(53, 'Laptop MSI Summit E13 Flip Evo A', 'MSI', 90, 37990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_msi_summit_e13_flip_evo_a11mt_211vn_557678a60ddc4c29800f9879c2280a92.jpg', 'https://product.hstatic.net/1000026716/product/7424139_o51_et_7646586_de66a38d7f734cd08d063553e697550b.jpeg', 'https://product.hstatic.net/1000026716/product/images_74a374004d4c4d7a8efdc8ee53f98af5.jpeg', 'https://product.hstatic.net/1000026716/product/7424139_o51_et_7646586_de66a38d7f734cd08d063553e697550b.jpeg'),
(54, 'Laptop MSI Modern 15 A11MU 678VN', 'MSI', 90, 18790000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_msi_modern_15_a11mu_678vn_14673822d21b4deebfc8725be55879cd.jpg', 'https://product.hstatic.net/1000026716/product/msi_modern_15__2__c6d31921ec0f438893c62b1ca53f8504.jpg', 'https://product.hstatic.net/1000026716/product/msi_modern_15__3__e74abe94a2f948bbb3a6baa3357b0e71.jpg', 'https://product.hstatic.net/1000026716/product/msi_modern_15__5__a694664d16d84b74856e41f909baf9b0.jpg'),
(55, 'Laptop Gaming MSI Bravo 15 B5DD ', 'MSI', 90, 20790000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_msi_bravo_15_b5dd_276vn_d4c9121fa7844b5fa0aea1ac183b41da.jpg', 'https://product.hstatic.net/1000026716/product/msi_bravo_15__1__7da290e311a240a8b28664568a432437.jpg', 'https://product.hstatic.net/1000026716/product/msi_bravo_15__2__4ba3b596fb25406f9afcdd4865269928.jpg', 'https://product.hstatic.net/1000026716/product/msi_bravo_15__6__d97a407f0c7b4ca3b16844861a16b46e.jpg'),
(56, 'Laptop Gaming MSI Bravo 15 B5DD ', 'MSI', 90, 23990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_msi_bravo_15_b5dd_275vn_6ff38c3511e8492aaed42c6f3df7c6e1.jpg', 'https://product.hstatic.net/1000026716/product/msi_bravo_15__1__5c1c9deb46b84608a521703fc26da48f.jpg', 'https://product.hstatic.net/1000026716/product/msi_bravo_15__2__e94d4e01095449568d6c6c08077bd51c.jpg', 'https://product.hstatic.net/1000026716/product/msi_bravo_15__6__a5ffee7a625e40abb7caf1120d702c44.jpg'),
(57, 'Laptop Gaming MSI Katana GF66 11', 'MSI', 90, 24390000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/katana_gf66_11uc_676vn_00a102859c0c4cfb823ef6fa113c2c81.png', 'https://product.hstatic.net/1000026716/product/laptop_msi_gf66_-_74_3b010f2791fe4d3081bdfe3ec877b12c.jpg', 'https://product.hstatic.net/1000026716/product/laptop_msi_gf66_-_75_551b1849744c4b8f91c011f869282198.jpg', 'https://product.hstatic.net/1000026716/product/laptop_msi_gf66_-_77_dc0a1de53c27445ea74e8d08d59a7714.jpg'),
(58, 'Laptop MSI Creator Z16 A11UET 21', 'MSI', 90, 66990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_msi_creator_z16_a11uet_218vn_0ecdea36646f43d3bbffab6046602a1e.jpg', 'https://product.hstatic.net/1000026716/product/1024__1__bebff7b7618a4878a9008bd6d267becf.png', 'https://product.hstatic.net/1000026716/product/1024__2__e9c4305fa00b4c6b92692fa30258f971.png', 'https://product.hstatic.net/1000026716/product/1024__3__87e020feffdd45d6b4d8129ac1fe22a6.png'),
(59, 'Laptop Lenovo IdeaPad 5 Pro 16AC', 'Lenovo', 90, 23990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/lenovo-ideapad-5-pro_fc42af3853414dbfba9fee69d8bcc21f.jpg', 'https://product.hstatic.net/1000026716/product/lenovo-ideapad-5-pro__5__f12192a323f84328b1c53ac0531b423e.jpg', 'https://product.hstatic.net/1000026716/product/lenovo-ideapad-5-pro__1__e0c83ee7b6684d2b91ac975615d202da.jpg', 'https://product.hstatic.net/1000026716/product/lenovo-ideapad-5-pro__3__30d70ccab1a4491e84e7e76bf3e875c8.jpg'),
(60, 'Laptop gaming Lenovo Legion 5 15', 'Lenovo', 90, 34990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/lenovo_legion_5_15ach6a_82nw003bvn_5b3f3d99802e4e89be5ec2f00adda2ce.jpg', 'https://product.hstatic.net/1000026716/product/legion_5__3__f8a5404293c0439e9696a661f18e4c77.png', 'https://product.hstatic.net/1000026716/product/legion_5__4__871881e978024dea9ed5dd9381df2222.png', 'https://product.hstatic.net/1000026716/product/legion_5__5__cbe482c72afd4177bac78e316278b7d6.png'),
(61, 'Laptop Lenovo IP1 11IGL05 81VT00', 'Lenovo', 90, 8890000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_lenovo_ip1_11igl05_81vt006fvn_d4204a9f3387474f8ab3cc121a5736c8.jpg', 'https://product.hstatic.net/1000026716/product/lenovo_ideapad_ip1__1__bab68e23015b4bf580f1082eefb8a7f7.jpg', 'https://product.hstatic.net/1000026716/product/gearvn-laptop-lenovo-ip1-11igl05-81vt006fvn-1_4d00ea43b58a4230bc28e6646719da38.png', 'https://product.hstatic.net/1000026716/product/lenovo_ideapad_ip1__2__1413eab1e64e4329992e5e10fe42b417.jpg'),
(62, 'Laptop Lenovo IdeaPad Slim 3 14I', 'Lenovo', 90, 16190000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/lenovo_ideapad_slim_3_14itl6_82h700g1vn_2c063e332a034e2198f28e6b75be8c36.jpg', 'https://product.hstatic.net/1000026716/product/19646_laptop_lenovo_ideapad_slim_3_14itl6_82h700g1vn_2_0a03e9cf9b8a490abb38bbdf2a6b2d9d.jpg', 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-lenovo-ideapad-slim-3-14itl6-82h700g1vn__6_cf91b5931ca643f6b1744b4333c0379f.jpg', 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-lenovo-ideapad-slim-3-14itl6-82h700g1vn_1_01fbbf9f1a2b4e8184a7d75c765d1c77.jpg'),
(63, 'Laptop Lenovo IdeaPad 5 15ITL05 ', 'Lenovo', 90, 18490000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_lenovo_ideapad_5_15itl05_82fg00m5vn_e6a9fabc087847aba6f21fca4e7c9b68.jpg', 'https://product.hstatic.net/1000026716/product/58429_idealpad5__1__d0c78ad5ed014e5cbe96a908178e120b.png', 'https://product.hstatic.net/1000026716/product/58429_idealpad5__2__109edef52c514a598cb2b8783167b846.png', 'https://product.hstatic.net/1000026716/product/58429_idealpad5__3__8ffbbc26d70a4806ad63359791efebe6.png'),
(64, 'Laptop LENOVO ThinkPad L13 Gen 2', 'Lenovo', 90, 24490000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_lenovo_thinkpad_l13_gen_2_20vh0049va_5015bf8735474d57af6dd7d1554104da.jpg', 'https://product.hstatic.net/1000026716/product/thinkpad_l13_gen_2_intel_ct1_01_81575d692a654301998555262378f1c7.png', 'https://product.hstatic.net/1000026716/product/thinkpad_l13_gen_2_intel_ct2_01_f4bc5446f9964423b8a69ec0a953188c.png', 'https://product.hstatic.net/1000026716/product/thinkpad_l13_gen_2_intel_ct2_02_b4deba67400442df9d6793c181a7ab93.png'),
(65, 'Laptop LENOVO ThinkPad L13 Gen 2', 'Lenovo', 90, 27290000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_lenovo_thinkpad_l13_gen_2_20vh004ava_6025c5f973f448f58d51fed7bc258cee.jpg', 'https://product.hstatic.net/1000026716/product/thinkpad_l13_gen_2_intel_ct1_01_076beed749134b1fb0982e49a7d8cf4b.png', 'https://product.hstatic.net/1000026716/product/thinkpad_l13_gen_2_intel_ct1_03_4e86b3b5026a4b2abc7aa100c13892f0.png', 'https://product.hstatic.net/1000026716/product/thinkpad_l13_gen_2_intel_ct2_01_775f324ffd2e44029b830cfbfa09f4b2.png'),
(66, 'Laptop Lenovo V15 G2 ITL 82KB00C', 'Lenovo', 90, 19990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_lenovo_v15_g2_itl_82kb00ckvn_505d3e9f89bf4c3388f97f6198967423.jpg', 'https://product.hstatic.net/1000026716/product/lenovo_v15_g2_itl_ct1_02_58135ef66a85408a806d8d0123ae200c.jpg', 'https://product.hstatic.net/1000026716/product/lenovo_v15_g2_itl_ct1_03_cb9bf3dcc24344de990079e6e2ac81f9.jpg', 'https://product.hstatic.net/1000026716/product/lenovo_v15_g2_itl_ct1_04_66a7367c79b34df4a42a0c3971a4db27.jpg'),
(67, 'Laptop IdeaPad 5 14ALC05 82LM00D', 'Lenovo', 90, 18390000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_ideapad_5_14alc05_82lm00d5vn_b109c827a5944d90b2070626808bc1b5.jpg', 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-ideapad-5-14alc05-82lm00d5vn-2_9196779ea5f24c97abb7d17f000b9473.jpg', 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-ideapad-5-14alc05-82lm00d5vn-3_e7365ee8997944d1bee8b1be59d8a638.jpg', 'https://product.hstatic.net/1000026716/product/gearvn.com-products-laptop-ideapad-5-14alc05-82lm00d5vn-4_c844c1b601c847d89f4a0e64cc0e1e98.jpg');
INSERT INTO `product` (`productId`, `name`, `manu`, `numInStock`, `oldCost`, `discount`, `aveRating`, `RAM`, `CPU`, `screen`, `battery`, `weight`, `size`, `OS`, `port`, `drive`, `GPU`, `color`, `image1`, `image2`, `image3`, `image4`) VALUES
(68, 'Laptop Lenovo IdeaPad 5 15ALC05 ', 'Lenovo', 90, 18790000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_lenovo_ideapad_5_15alc05_82ln00cdvn_4f7799b9e8ca43a3b35df408e8e1474b.jpg', 'https://product.hstatic.net/1000026716/product/20418_laptop_lenovo_ideapad_5_15alc05_82ln00cdvn_2_b62b5bcd8e4f4183b849bbf675822852.jpg', 'https://product.hstatic.net/1000026716/product/20418_laptop_lenovo_ideapad_5_15alc05_82ln00cdvn_3_31208bc5ffbe4ea788c9e587c6069e86.jpg', 'https://product.hstatic.net/1000026716/product/20418_laptop_lenovo_ideapad_5_15alc05_82ln00cdvn_4_b4719e48ff254af0a4937dc4c63b3e03.jpg'),
(69, 'Laptop Gaming HP VICTUS 16 e0175', 'HP', 90, 24990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/hp_victus_16_e0175ax_4r0u8pa_a_bbd482f144c146b4afcc1c2c567167d3.png', 'https://product.hstatic.net/1000026716/product/victus-mica_silver-1_4380411e0aeb48f694d1eee2b04b80b7.png', 'https://product.hstatic.net/1000026716/product/victus-mica_silver-3_b187bf67be774d3895abddc198b6b85f.png', 'https://product.hstatic.net/1000026716/product/victus-mica_silver-6_5a1768f3ada44af282be6cd0232aa9cf.png'),
(70, 'Laptop Gaming HP Omen 16 b0142TX', 'HP', 90, 39990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_gaming_hp_omen_16_b0142tx_4y0z8pa_4a26dffe04b0453f80a9a71b6c9f98a1.jpg', 'https://product.hstatic.net/1000026716/product/nnumpad_4zone_lcd_shadowblack_nt_hdcam_nonodd_win_10_coreset_frontleft_8e98d1899f054f80a5cbf1d0f201537f.jpg', 'https://product.hstatic.net/1000026716/product/numpad_4zone_lcd_shadowblack_nt_hdcam_nonodd_win_10_coreset_frontright_f747e358eba94d668e53a14143eb7024.jpg', 'https://product.hstatic.net/1000026716/product/numpad_rgb_lcd_shadowblack_nt_hdcam_nonodd_sscreen_hero_floatingfaceup_50d274d65ff148e389e28de8b65776e2.jpg'),
(71, 'Laptop Gaming HP VICTUS 16 e0177', 'HP', 90, 22490000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/hp_victus_16_e0177ax_4r0u9pa_a_4234f78875e047b6bcebd643f31b72ec.png', 'https://product.hstatic.net/1000026716/product/victus-mica_silver-1_afb0954c33544b029f5efdb473cf1016.png', 'https://product.hstatic.net/1000026716/product/victus-mica_silver-3_727127b1abf342e8be19231da54e6dce.png', 'https://product.hstatic.net/1000026716/product/victus-mica_silver-6_eae75d4f03624ebfa146b532982067d1.png'),
(72, 'Laptop HP 15s FQ2602TU 4B6D3PA', 'HP', 90, 15990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_hp_15s_fq2602tu_4b6d3pa_e743c40eacfb4783a187185daa2ab4d0.jpg', 'https://product.hstatic.net/1000026716/product/hp_15s__1__dafe9f90ac6440639bf27d26ecb4b74f.jpg', 'https://product.hstatic.net/1000026716/product/hp_15s__2__425ea2a34ef947b7b4a177a6b6ef7e11.jpg', 'https://product.hstatic.net/1000026716/product/hp_15s__3__ad6315852132460a986eb23b1c50ab18.jpg'),
(73, 'Laptop HP 240 G8 518V5PA', 'HP', 90, 16490000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/hp_240_g8_518v5pa_36991c809ec54bc097a640aa6bb9df68.jpg', 'https://product.hstatic.net/1000026716/product/hp_240___2__45f240e1086346f6a71c36aebf90f4eb.jpg', 'https://product.hstatic.net/1000026716/product/hp_240___3__567ebf85ab364682a3e43f180d80c64e.jpg', 'https://product.hstatic.net/1000026716/product/hp_240___4__f9956f33534749948080a46489a79108.jpg'),
(74, 'Laptop Asus Zenbook Flip UX363EA', 'HP', 90, 27990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/asus_zenbook_flip_ux363ea_hp726w_0b642f006e8a40829500cfffe252d964.jpg', 'https://product.hstatic.net/1000026716/product/ok_flip_13_oled_ux363_product_photo_2g_pine_grey_23__oled_refresh___1__20c25d07b2d241bab19a350ed2bcaa7e.jpg', 'https://product.hstatic.net/1000026716/product/p_13_oled_ux363_product_photo_2g_pine_grey_13_numberpad__oled_refresh__b3208c2554ce417e98f9cba491954d10.jpg', 'https://product.hstatic.net/1000026716/product/enbook_flip_13_oled_ux363_product_photo_2g_pine_grey_21__oled_refresh__364070dd384243cfa279c85b5f058a8f.jpg'),
(75, 'Laptop ASUS Zenbook Flip UX363EA', 'HP', 90, 30990000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_asus_zenbook_flip_ux363ea_hp548t_a5207ac4dfcd4dbdb9c6af4e57492c8a.jpg', 'https://product.hstatic.net/1000026716/product/ok_flip_13_oled_ux363_product_photo_2g_pine_grey_23__oled_refresh___1__e71b22ad4ad2437b839f9b3e0e24c322.jpg', 'https://product.hstatic.net/1000026716/product/ok_flip_13_oled_ux363_product_photo_2g_pine_grey_06__oled_refresh___1__79115ef969e44eb2b40a9e39f9f6baaa.jpg', 'https://product.hstatic.net/1000026716/product/p_13_oled_ux363_product_photo_2g_pine_grey_13_numberpad__oled_refresh__3716977a324843c4adafc866694142d5.jpg'),
(76, 'Laptop HP 240 G8 3D3H7PA', 'HP', 90, 17690000, 10, NULL, '8', 'i7-8000H', 'FHD', 'Li-Ion', 2500, '255', 'Microsoft Windows 10 Home', '1x USB 2.0, 2x USB 3.0', '1x SSD 256GB, 2x HDD 512GB', '1x RTX R5M335, 1x AMD radeon', 'đỏ, vàng, đen', 'https://product.hstatic.net/1000026716/product/laptop_hp_240_g8_3d3h7pa_680f6604c0764997bfb99774e8b60d49.jpg', 'https://product.hstatic.net/1000026716/product/hp_240___2__9baca643893442a3b16bda0aa7e73d97.jpg', 'https://product.hstatic.net/1000026716/product/hp_240___3__46d7993b39ae48cea177ce417d70cd11.jpg', 'https://product.hstatic.net/1000026716/product/hp_240___4__da38073e58834197b8f356591ddb1300.jpg');

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
(26, 'hiếu', NULL, NULL),
(27, 'bình', NULL, NULL),
(33, NULL, NULL, NULL),
(34, 'bao', '', ''),
(35, NULL, NULL, NULL),
(36, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `usertable`
-- (See below for the actual view)
--
CREATE TABLE `usertable` (
`accId` int(10) unsigned
,`userName` varchar(128)
,`email` varchar(320)
,`password` varchar(256)
,`isAdmin` varchar(20)
,`avatar` varchar(255)
,`code` varchar(20)
,`userId` int(10) unsigned
,`name` varchar(32)
,`phoneNumber` varchar(16)
,`address` varchar(32)
);

-- --------------------------------------------------------

--
-- Cấu trúc cho view `adtable`
--
DROP TABLE IF EXISTS `adtable`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `adtable`  AS SELECT `account`.`accId` AS `accId`, `account`.`userName` AS `userName`, `account`.`email` AS `email`, `account`.`password` AS `password`, `account`.`isAdmin` AS `isAdmin`, `account`.`avatar` AS `avatar`, `account`.`code` AS `code`, `admin`.`admId` AS `admId`, `admin`.`name` AS `name`, `admin`.`phoneNumber` AS `phoneNumber`, `admin`.`address` AS `address` FROM (`account` join `admin`) WHERE `account`.`accId` = `admin`.`admId` ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `usertable`
--
DROP TABLE IF EXISTS `usertable`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `usertable`  AS SELECT `account`.`accId` AS `accId`, `account`.`userName` AS `userName`, `account`.`email` AS `email`, `account`.`password` AS `password`, `account`.`isAdmin` AS `isAdmin`, `account`.`avatar` AS `avatar`, `account`.`code` AS `code`, `user`.`userId` AS `userId`, `user`.`name` AS `name`, `user`.`phoneNumber` AS `phoneNumber`, `user`.`address` AS `address` FROM (`account` join `user`) WHERE `account`.`accId` = `user`.`userId` ;



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
  MODIFY `accId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `cmtId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `newsId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

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
  ADD CONSTRAINT `orderhasproduct_productId` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `account` (`accId`) ON DELETE CASCADE ON UPDATE CASCADE;
	

DROP TABLE IF EXISTS `acc`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `acc`  AS SELECT * FROM adtable UNION SELECT * FROM usertable;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
