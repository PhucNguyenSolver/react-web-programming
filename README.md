# react-web-programming

# **Cài đặt**

Ứng dụng sử dụng ReactJS cho frontend và PHP kết hợp MySQL cho backend. Sử dụng XAMPP app cho Web Server. 

Đầu tiên cần cài đặt và thiết lập ban đầu cho XAMPP. Chi tiết xem trong bài viết [XAMPP](https://www.ionos.com/digitalguide/server/tools/xampp-tutorial-create-your-own-local-test-server/)

Các bước cài đặt ứng dụng như sau:

## **Bước 1: Clone source code từ thư mục GitHub**
Chuyển đến thư mục cần cài đặt ứng dụng:
```console
git clone https://github.com/PhucNguyenSolver/react-web-programming.git
```

# **Bước 2: Thiết lập lại XAMPP**
Thiết lập lại XAMPP để trỏ documentRoot tới thư mục backend. Sau đó cấu hình mail function trong php.ini.

# **Bước 3: Tạo Schema mylaptop**
Sử dụng công cụ phpMyAdmin để tạo schema mylaptop và import file mylaptop.sql
(đính kèm trong thư mục backend)


## **Bước 4: Chuyển đến thư mục frontend**
Chuyển đến thư mục cần cài đặt ứng dụng và cài đặt các package cần thiết:
```console
npm install
```
## **Bước 4: Khởi chạy ứng dụng**
```console
npm start
```
Ứng dụng React được chạy mặc định trên [localhost](http://localhost:3000) port 3000. 
