# Tài Liệu Hệ Thống Layout Động

Tài liệu này cung cấp cái nhìn tổng quan về **Hệ Thống Layout Động**, bao gồm mục đích, cấu trúc, và chức năng của từng thành phần và trang.

---

## 1. Giới Thiệu

**Hệ Thống Layout Động** là một dự án dựa trên Next.js, được thiết kế để tạo các layout tương tác và có hiệu ứng chuyển động mượt mà. Hệ thống bao gồm các thành phần tái sử dụng, hiệu ứng động, và tích hợp API để quản lý dữ liệu.

---

## 2. Bắt Đầu

### Thiết Lập Môi Trường

Để khởi chạy server phát triển, chạy lệnh:

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
# hoặc
bun dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem ứng dụng.

### Chỉnh Sửa Ứng Dụng

Bạn có thể bắt đầu chỉnh sửa ứng dụng bằng cách thay đổi các file trong thư mục `app/`. Các thay đổi sẽ tự động được cập nhật trên trình duyệt.

---

## 3. Tổng Quan Dự Án

### Mục Đích

Dự án nhằm xây dựng một hệ thống layout động với các tính năng:
- Hiệu ứng chuyển động mượt mà cho các layout.
- Thành phần giao diện tương tác với hiệu ứng hover và scroll.
- Tích hợp API để quản lý dữ liệu.

---

## 4. Cấu Trúc Thư Mục

### Các Thư Mục và File Chính

- **`app/`**: Chứa logic và giao diện chính của ứng dụng.
  - **`component/`**: Các thành phần tái sử dụng.
    - **`box-1 → box-6/`**: Các khối giao diện động với hiệu ứng.
    - **`header/`, `nav/`**: Thành phần điều hướng.
  - **`section-1/`, `section-2/`**: Các phần nội dung chính với hiệu ứng chuyển động.
  - **`video-1/`, `video-2/`**: Các trang hiển thị video.
  - **`globals.css`**: CSS toàn cục.
  - **`layout.tsx`**: Bố cục chính của ứng dụng.
  - **`page.tsx`**: Trang chính của ứng dụng.

- **`public/`**: Chứa tài nguyên tĩnh như hình ảnh và favicon.

- **`src/`**: Mã nguồn chính của dự án.

---

## 5. Chức Năng Thành Phần và Trang

### 5.1 Thành Phần `box-4`

#### Mục Đích
Thành phần `box-4` là một khối giao diện động với hiệu ứng hover và scroll. Nó tự căn giữa sau một số lần scroll nhất định và bao gồm các hiệu ứng chuyển động mượt mà.

#### Tính Năng Chính
- **Hiệu Ứng Scroll**: Tự động căn giữa sau 4 lần scroll.
- **Hiệu Ứng Hover**: Phóng to và xoay khối khi hover.
- **Đánh Giá Động**: Hiển thị thanh tiến trình hình tròn với phần trăm.

#### Điểm Nổi Bật Trong Code
- **Xử Lý Scroll**: Logic scroll mượt mà sử dụng `setTimeout` và `scrollTo`.
- **Hiệu Ứng Hover**: CSS animation để phóng to và xoay khối.

---

### 5.2 Thành Phần `box-5`

#### Mục Đích
Thành phần `box-5` là một khối giao diện động tương tự `box-4`, nhưng có thêm các hiệu ứng và thiết kế độc đáo.

#### Tính Năng Chính
- **Hiệu Ứng Scroll**: Tự động căn giữa sau 6 lần scroll.
- **Hiệu Ứng Bounce**: Hình ảnh bên trong khối nhảy liên tục.
- **Hiệu Ứng Hover**: Phóng to và xoay khối với chuyển động mượt mà.

#### Điểm Nổi Bật Trong Code
- **Hiệu Ứng Bounce**: CSS `@keyframes` để tạo hiệu ứng nhảy liên tục.
- **Căn Giữa Động**: Sử dụng `requestAnimationFrame` để định vị mượt mà.

---
### 5.3 Các Trang Chính

#### `page.tsx`
- **Mục Đích**: Điểm vào chính của ứng dụng.
- **Chức Năng**: Hiển thị layout và tích hợp tất cả các thành phần.

#### `layout.tsx`
- **Mục Đích**: Định nghĩa bố cục toàn cục cho ứng dụng.
- **Chức Năng**: Bao gồm điều hướng, header, và các style toàn cục.

---

## 7. Tính Năng

### Tính Năng Chính
1. **Hệ Thống Layout Động**: Hiển thị các layout động với hiệu ứng mượt mà.
2. **Thành Phần Tương Tác**: Các thành phần UI với hiệu ứng hover và scroll.
3. **Tích Hợp Video**: Hiển thị và quản lý video trên trang web.

---


## 9. Kết Luận

Tài liệu này cung cấp tổng quan về **Hệ Thống Layout Động**, bao gồm cấu trúc thư mục, chức năng thành phần, và tích hợp API backend. Hệ thống được thiết kế để mang lại trải nghiệm người dùng mượt mà và tương tác với các layout động và hiệu ứng chuyển động.