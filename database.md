# product

| Thuộc tính   | Kiểu dữ liệu |
| ------------ | ------------ |
| id           | id           |
| imgUrl       | string       |
| title        | string       |
| author       | string       |
| description  | string       |
| content      | script       |
| createdTime  | timestamps   |
| commentIdList| array[id]    |

**Giải thích**

*imgUrl chứa URL đến ảnh bìa của bài viết

# comment

| Thuộc tính | Kiểu dữ liệu |
| ---------- | ------------ |
| id         | id           |
| content    | string       |
| accountId  | id           |
| createdTime| timestamps   |

**Giải thích** 
*account không được lồng nhau, không có chức năng reply

# account

| Thuộc tính | Kiểu dữ liệu |
| ---------- | ------------ |
| id         | id           |
| email      | string       |
| name       | string       |
| username   | string       |
| password   | string       |
| role       | string       |

**Giải thích**

Account lưu giữ thông tin tài khoản của cả khách hàng và quản trị viên.

# user

| Thuộc tính | Kiểu dữ liệu |
| ---------- | ------------ |
| id         | id           |
| lastName   | string       |
| firstName  | string       |
| avatarUrl  | string       |
| phone      | string       |
| address    | string       |


* Lưu giữ các thông tin cơ bản của khách hàng đã tạo tài khoản

# admin
| Thuộc tính | Kiểu dữ liệu |
| ---------- | ------------ |
| id         | id           |

# news

| Thuộc tính   | Kiểu dữ liệu |
| ------------ | ------------ |
| id           | id           |
| imgUrl       | string       |
| title        | string       |
| author       | string       |
| description  | string       |
| content      | script       |
| createdTime  | timestamps   |
| commentIdList| array[id]    |

**Giải thích**

*imgUrl chứa URL đến ảnh bìa của bài viết
*description là mô tả ngắn gọn về bài viết
*content chứa nội dung bài đăng dạng script hoặc đơn giản hơn sẽ liên kết đến bài viết trên mạng.

