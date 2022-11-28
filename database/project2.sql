-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 28, 2022 lúc 06:04 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `project2`
--
CREATE DATABASE IF NOT EXISTS `project2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `project2`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner`
--

CREATE TABLE `banner` (
  `MaBanner` int(11) NOT NULL,
  `HinhAnh` varchar(255) DEFAULT NULL,
  `SuDung` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `banner`
--

INSERT INTO `banner` (`MaBanner`, `HinhAnh`, `SuDung`) VALUES
(1, '1667452820903.jpg', 1),
(2, '1667456848443.png', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `MaDanhMuc` int(11) NOT NULL,
  `DanhMuc` varchar(100) DEFAULT NULL,
  `DanhMucURL` varchar(255) DEFAULT NULL,
  `HinhAnh` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`MaDanhMuc`, `DanhMuc`, `DanhMucURL`, `HinhAnh`) VALUES
(1, 'Áo', 'ao', NULL),
(2, 'Quần', 'quan', NULL),
(3, 'Phụ kiện', 'phukien', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhanh`
--

CREATE TABLE `hinhanh` (
  `MaHinhAnh` int(11) NOT NULL,
  `MaSanPham` int(11) NOT NULL,
  `HinhAnh` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `hinhanh`
--

INSERT INTO `hinhanh` (`MaHinhAnh`, `MaSanPham`, `HinhAnh`) VALUES
(1, 9, '1669606509725.jpg'),
(2, 2, '1669610400767.jpg'),
(3, 3, '1669610459556.jpg'),
(4, 4, '1669610472713.jpg'),
(5, 5, ''),
(6, 6, '1669610541523.jpg'),
(7, 8, '1669610555124.jpg'),
(8, 8, '1669610603826.jpg'),
(9, 9, '1669610619124.jpg'),
(10, 10, '1669610635299.jpg'),
(11, 11, '1669610649342.jpg'),
(12, 12, '1669610668154.jpg'),
(13, 13, '1669610689143.jpg'),
(14, 14, '1669610702392.jpg'),
(15, 15, '1669610717684.jpg'),
(16, 16, '1669610760176.jpg'),
(17, 17, '1669610800379.jpg'),
(18, 18, '1669610815255.jpg'),
(19, 19, '1669610824986.jpg'),
(20, 20, '1669610845931.jpg'),
(21, 21, '1669610855790.jpg'),
(22, 22, '1669610869931.jpg'),
(23, 23, '1669610898063.jpg'),
(24, 24, '1669610919057.jpg'),
(25, 25, '1669610931551.jpg'),
(26, 26, '1669610942492.jpg'),
(27, 27, '1669610955417.jpg'),
(28, 28, '1669610970998.jpg'),
(29, 29, '1669610983350.jpg'),
(30, 30, '1669610994252.jpg'),
(31, 38, '1669611028160.jpg'),
(32, 39, '1669611043143.jpg'),
(33, 40, '1669611052225.jpg'),
(34, 41, '1669611063167.jpg'),
(35, 42, '1669611083511.jpg'),
(36, 43, '1669611095772.jpg'),
(37, 44, '1669611107083.jpg'),
(38, 49, '1669611144936.jpg'),
(39, 50, '1669611159063.jpg'),
(40, 51, '1669611207385.jpg'),
(41, 52, '1669611233266.jpg'),
(42, 53, '1669611251758.jpg'),
(43, 54, '1669611267631.jpg'),
(44, 55, '1669611279565.jpg'),
(45, 56, '1669611290867.jpg'),
(46, 57, '1669611308574.jpg'),
(47, 58, '1669611319427.jpg'),
(48, 59, ''),
(49, 60, '1669611352800.jpg'),
(50, 61, '1669611364792.jpg'),
(51, 62, '1669611394250.jpg'),
(52, 63, '1669611405786.jpg'),
(53, 64, '1669611420482.jpg'),
(54, 52, '1669611440207.jpg'),
(55, 66, '1669611452904.jpg'),
(56, 67, '1669611468978.jpg'),
(57, 68, '1669611483241.jpg'),
(58, 75, '1669611526528.jpg'),
(59, 76, '1669611539014.jpg'),
(60, 77, '1669611549806.jpg'),
(61, 78, '1669611563725.jpg'),
(62, 79, '1669611596110.jpg'),
(63, 80, '1669611613387.jpg'),
(64, 86, '1669611629637.jpg'),
(65, 87, '1669611650743.jpg'),
(66, 88, '1669611670337.jpg'),
(67, 89, '1669611681329.jpg'),
(68, 90, '1669611695539.jpg'),
(69, 91, '1669611723362.jpg'),
(70, 92, '1669611743529.jpg'),
(71, 93, '1669611755035.jpg'),
(72, 94, '1669611766624.jpg'),
(73, 95, '1669611776912.jpg'),
(74, 96, '1669611789610.jpg'),
(75, 97, '1669611801825.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `MaLoaiSanPham` int(11) NOT NULL,
  `MaDanhMuc` int(11) NOT NULL,
  `LoaiSanPham` varchar(100) DEFAULT NULL,
  `LoaiSanPhamURL` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `loaisanpham`
--

INSERT INTO `loaisanpham` (`MaLoaiSanPham`, `MaDanhMuc`, `LoaiSanPham`, `LoaiSanPhamURL`) VALUES
(1, 1, 'Áo thun', 'ao-thun'),
(2, 2, 'Quần jeans', 'quan-jean'),
(3, 3, 'Thắt lưng', 'that-lung'),
(4, 1, 'Áo sơ mi', 'ao-so-mi'),
(5, 1, 'Áo Polo', 'ao-polo'),
(6, 1, 'Áo khoác', 'ao-khoac'),
(7, 1, 'Áo vest', 'ao-vest'),
(8, 1, 'Áo ghi lê', 'ao-gile'),
(9, 1, 'Áo len', 'ao-len'),
(10, 2, 'Quần Tây', 'quan-tay'),
(11, 2, 'Quần Kaki', 'quan-kaki'),
(12, 2, 'Quần Jogger', 'quan-jogger'),
(13, 2, 'Quần short', 'quan-short'),
(14, 2, 'Quần lót', 'quan-lot'),
(15, 3, 'Ví Da', 'vi-da'),
(16, 3, 'Vớ', 'vo'),
(17, 3, 'Nón', 'non'),
(18, 3, 'Túi', 'tui'),
(19, 3, 'Balo', 'ba-lo');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quyenhan`
--

CREATE TABLE `quyenhan` (
  `MaQuyenHan` int(11) NOT NULL,
  `QuyenHan` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `quyenhan`
--

INSERT INTO `quyenhan` (`MaQuyenHan`, `QuyenHan`) VALUES
(1, 'admin'),
(2, 'staff'),
(3, 'user');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `MaSanPham` int(11) NOT NULL,
  `TenSanPham` varchar(100) DEFAULT NULL,
  `MaLoaiSanPham` int(11) NOT NULL,
  `MaSize` int(11) NOT NULL,
  `DonGia` int(11) DEFAULT NULL,
  `SoLuong` int(11) DEFAULT 0,
  `DaBan` tinyint(4) NOT NULL DEFAULT 0,
  `MaTinhTrang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`MaSanPham`, `TenSanPham`, `MaLoaiSanPham`, `MaSize`, `DonGia`, `SoLuong`, `DaBan`, `MaTinhTrang`) VALUES
(1, 'Áo thun SWE', 1, 1, 150000, 0, 1, 1),
(2, 'Áo Sơ mi S1', 4, 1, 35000, 1, 1, 1),
(3, 'Áo Sơ mi S2', 4, 1, 40000, 1, 1, 1),
(4, 'Áo Sơ mi S3', 4, 1, 45000, 1, 1, 1),
(5, 'Áo Sơ mi S4', 4, 1, 30000, 1, 1, 1),
(6, 'Áo Sơ mi S5', 4, 1, 35000, 1, 1, 1),
(7, 'Áo Sơ mi S6', 4, 1, 55000, 1, 1, 1),
(8, 'Áo Thun T01', 1, 1, 30000, 1, 1, 1),
(9, 'Áo thun T02', 1, 1, 35000, 1, 1, 1),
(10, 'Áo Thun T03', 1, 1, 20000, 1, 1, 1),
(11, 'Áo Thun T04', 1, 1, 45000, 1, 0, 1),
(12, 'Áo Thun T05', 1, 1, 40000, 1, 0, 1),
(13, 'Áo Thun T06', 1, 1, 35000, 1, 0, 1),
(14, 'Áo Thun T07', 1, 1, 40000, 1, 0, 1),
(15, 'Áo Thun T08', 1, 1, 30000, 1, 0, 1),
(16, 'Áo Polo P01', 5, 1, 35000, 1, 0, 1),
(17, 'Áo Polo P02', 5, 1, 30000, 1, 0, 1),
(18, 'Áo Polo P03', 5, 1, 55000, 1, 0, 1),
(19, 'Áo Polo P04', 5, 1, 35000, 1, 0, 1),
(20, 'Áo Polo P05', 5, 1, 20000, 1, 0, 1),
(21, 'Áo Polo P06', 5, 1, 60000, 1, 0, 1),
(22, 'Áo Polo P07', 5, 1, 40000, 1, 0, 1),
(23, 'Áo Khoác K01', 6, 1, 70000, 1, 0, 1),
(24, 'Áo Khoác K02', 6, 1, 75000, 1, 0, 1),
(25, 'Áo Khoác K03', 6, 1, 90000, 1, 0, 1),
(26, 'Áo Khoác K04', 6, 1, 85000, 1, 0, 1),
(27, 'Áo Khoác K05', 6, 1, 110000, 1, 0, 1),
(28, 'Áo Khoác K06', 6, 1, 95000, 1, 0, 1),
(29, 'Áo Khoác K07', 6, 1, 55000, 1, 0, 1),
(30, 'Áo Khoác K08', 6, 1, 75000, 1, 0, 1),
(31, 'Áo Vest V01', 7, 1, 150000, 1, 0, 1),
(32, 'Áo Vest V02', 7, 1, 200000, 1, 0, 1),
(33, 'Áo Vest V03', 7, 1, 250000, 1, 0, 1),
(34, 'Áo Len L01', 9, 1, 175000, 1, 0, 1),
(35, 'Áo Len L02', 9, 1, 195000, 1, 0, 1),
(36, 'Áo Len L03', 9, 1, 160000, 1, 0, 1),
(37, 'Áo Len L04', 9, 1, 145000, 1, 0, 1),
(38, 'Quần Jean J01', 2, 1, 95000, 1, 0, 1),
(39, 'Quần Jean J02', 2, 1, 120000, 1, 0, 1),
(40, 'Quần Jean J03', 2, 1, 135000, 1, 0, 1),
(41, 'Quần Jean J04', 2, 1, 80000, 1, 0, 1),
(42, 'Quần Jean J05', 2, 1, 55000, 1, 0, 1),
(43, 'Quần Jean J06', 2, 1, 110000, 1, 0, 1),
(44, 'Quần Jean J07', 2, 1, 155000, 1, 0, 1),
(45, 'Quần Tây T01', 10, 1, 80000, 1, 0, 1),
(46, 'Quần Tây T02', 10, 1, 90000, 1, 0, 1),
(47, 'Quần Tây T03', 10, 1, 135000, 1, 0, 1),
(48, 'Quần Tây T04', 10, 1, 95000, 1, 0, 1),
(49, 'Quần Kaki K01', 11, 1, 75000, 1, 0, 1),
(50, 'Quần Kaki K02', 11, 1, 70000, 1, 0, 1),
(51, 'Quần Kaki K03', 11, 1, 65000, 1, 0, 1),
(52, 'Quần Kaki K04', 11, 1, 85000, 1, 0, 1),
(53, 'Quần Kaki K05', 11, 1, 90000, 1, 0, 1),
(54, 'Quần Kaki K06', 11, 1, 55000, 1, 0, 1),
(55, 'Quần Kaki K07', 11, 1, 85000, 1, 0, 1),
(56, 'Quần Kaki K08', 11, 1, 75000, 1, 0, 1),
(57, 'Quần Jogger JG01', 12, 1, 65000, 1, 0, 1),
(58, 'Quần Jogger JG02', 12, 1, 75000, 1, 0, 1),
(59, 'Quần Jogger JG03', 12, 1, 55000, 1, 0, 1),
(60, 'Quần Jogger JG04', 12, 1, 35000, 1, 0, 1),
(61, 'Quần Jogger JG05', 12, 1, 40000, 1, 0, 1),
(62, 'Quần Short S01', 13, 1, 40000, 1, 0, 1),
(63, 'Quần Short S02', 13, 1, 35000, 1, 0, 1),
(64, 'Quần Short S03', 13, 1, 55000, 1, 0, 1),
(65, 'Quần Short S04', 13, 1, 50000, 1, 0, 1),
(66, 'Quần Short S05', 13, 1, 50000, 1, 0, 1),
(67, 'Quần Short S06', 13, 1, 40000, 1, 0, 1),
(68, 'Quần Short S07', 13, 1, 40000, 1, 0, 1),
(69, 'Quần Short S08', 13, 1, 35000, 1, 0, 1),
(70, 'Quần Lót L01', 14, 1, 15000, 1, 0, 1),
(71, 'Quần Lót L02', 14, 1, 10000, 1, 0, 1),
(72, 'Quần Lót L03', 14, 1, 20000, 1, 0, 1),
(73, 'Quần Lót L04', 14, 1, 15000, 1, 0, 1),
(74, 'Quần Lót L05', 14, 1, 20000, 1, 0, 1),
(75, 'Thắt Lưng TL01', 3, 1, 150000, 1, 0, 1),
(76, 'Thắt Lưng TL02', 3, 1, 120000, 1, 0, 1),
(77, 'Thắt Lưng TL03', 3, 1, 135000, 1, 0, 1),
(78, 'Thắt Lưng TL04', 3, 1, 145000, 1, 0, 1),
(79, 'Ví Da V01', 15, 1, 90000, 1, 0, 1),
(80, 'Ví Da V02', 15, 1, 75000, 1, 0, 1),
(81, 'Vớ 01', 16, 1, 10000, 1, 0, 1),
(82, 'Vớ 02', 16, 1, 15000, 1, 0, 1),
(83, 'Vớ 03', 16, 1, 20000, 1, 0, 1),
(84, 'Vớ 04', 16, 1, 15000, 1, 0, 1),
(85, 'Vớ 05', 16, 1, 15000, 1, 0, 1),
(86, 'Nón N01', 17, 1, 35000, 1, 0, 1),
(87, 'Nón N02', 17, 1, 40000, 1, 0, 1),
(88, 'Nón N03', 17, 1, 25000, 1, 0, 1),
(89, 'Nón N04', 17, 1, 25000, 1, 0, 1),
(90, 'Nón N05', 17, 1, 40000, 1, 0, 1),
(91, 'Túi T01', 18, 1, 110000, 1, 0, 1),
(92, 'Túi T02', 18, 1, 120000, 1, 0, 1),
(93, 'Túi T03', 18, 1, 135000, 1, 0, 1),
(94, 'Túi T04', 18, 1, 140000, 1, 0, 1),
(95, 'Balo B01', 19, 1, 150000, 1, 0, 1),
(96, 'Balo B02', 19, 1, 75000, 1, 0, 1),
(97, 'Balo B03', 19, 1, 190000, 1, 0, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `size`
--

CREATE TABLE `size` (
  `MaSize` int(11) NOT NULL,
  `Size` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `size`
--

INSERT INTO `size` (`MaSize`, `Size`) VALUES
(1, 'S');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `MaTaiKhoan` int(11) NOT NULL,
  `TenTaiKhoan` varchar(50) NOT NULL,
  `MatKhau` varchar(255) NOT NULL,
  `HoTen` varchar(200) DEFAULT NULL,
  `DiaChi` varchar(255) DEFAULT NULL,
  `SoDienThoai` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `MaQuyenHan` int(11) NOT NULL DEFAULT 3,
  `TinhTrang` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`MaTaiKhoan`, `TenTaiKhoan`, `MatKhau`, `HoTen`, `DiaChi`, `SoDienThoai`, `Email`, `MaQuyenHan`, `TinhTrang`) VALUES
(13, 'vinh', '$2b$10$jgcdsB9dFFrOiL1dqcEV5exwJKwHA8utFybqTtiX7QFBZvdivQqBm', 'Pham Lam Nguyen Vinh', 'Long Xuyên', '0849952219', 'dinhpoor0910@gmail.com', 3, 1),
(14, 'vinh1', '$2b$10$rVS5f/Ba/oKVOGqYHRohtuappysNch3MPEJ.BtQeMEs0Zp34NOE5q', 'Pham Lam Nguyen Vinh', 'Long Xuyên', '0849952219', 'dinhpoor0910@gmail.com', 3, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tinhtrang`
--

CREATE TABLE `tinhtrang` (
  `MaTinhTrang` int(11) NOT NULL,
  `TinhTrang` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tinhtrang`
--

INSERT INTO `tinhtrang` (`MaTinhTrang`, `TinhTrang`) VALUES
(1, 'Đã Sử Dụng');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`MaBanner`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`MaDanhMuc`);

--
-- Chỉ mục cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  ADD PRIMARY KEY (`MaHinhAnh`),
  ADD KEY `MaSanPham` (`MaSanPham`);

--
-- Chỉ mục cho bảng `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`MaLoaiSanPham`),
  ADD KEY `MaDanhMuc` (`MaDanhMuc`);

--
-- Chỉ mục cho bảng `quyenhan`
--
ALTER TABLE `quyenhan`
  ADD PRIMARY KEY (`MaQuyenHan`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`MaSanPham`),
  ADD KEY `MaLoaiSanPham` (`MaLoaiSanPham`),
  ADD KEY `MaSize` (`MaSize`),
  ADD KEY `MaTinhTrang` (`MaTinhTrang`);

--
-- Chỉ mục cho bảng `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`MaSize`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`MaTaiKhoan`),
  ADD KEY `MaQuyenHan` (`MaQuyenHan`);

--
-- Chỉ mục cho bảng `tinhtrang`
--
ALTER TABLE `tinhtrang`
  ADD PRIMARY KEY (`MaTinhTrang`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `banner`
--
ALTER TABLE `banner`
  MODIFY `MaBanner` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `MaDanhMuc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  MODIFY `MaHinhAnh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT cho bảng `loaisanpham`
--
ALTER TABLE `loaisanpham`
  MODIFY `MaLoaiSanPham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `quyenhan`
--
ALTER TABLE `quyenhan`
  MODIFY `MaQuyenHan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `MaSanPham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT cho bảng `size`
--
ALTER TABLE `size`
  MODIFY `MaSize` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `MaTaiKhoan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `tinhtrang`
--
ALTER TABLE `tinhtrang`
  MODIFY `MaTinhTrang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  ADD CONSTRAINT `hinhanh_ibfk_1` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`MaSanPham`);

--
-- Các ràng buộc cho bảng `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD CONSTRAINT `loaisanpham_ibfk_1` FOREIGN KEY (`MaDanhMuc`) REFERENCES `danhmuc` (`MaDanhMuc`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`MaLoaiSanPham`) REFERENCES `loaisanpham` (`MaLoaiSanPham`),
  ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`MaSize`) REFERENCES `size` (`MaSize`),
  ADD CONSTRAINT `sanpham_ibfk_3` FOREIGN KEY (`MaTinhTrang`) REFERENCES `tinhtrang` (`MaTinhTrang`);

--
-- Các ràng buộc cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD CONSTRAINT `taikhoan_ibfk_1` FOREIGN KEY (`MaQuyenHan`) REFERENCES `quyenhan` (`MaQuyenHan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
