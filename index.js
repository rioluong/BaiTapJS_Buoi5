var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
//-------------------------------------------------//
//QUẢN LÍ TUYỂN SINH
$('.txt-btn1').onclick = function () {
var diemChuan = $("#txt-diemChuan").value * 1;
var khuVuc = $("#txt-khuVuc").value *1;
var doiTuong = $("#txt-doiTuong").value * 1; 
var diem1 = $("#txt-diem1").value * 1; 
var diem2 = $("#txt-diem2").value * 1; 
var diem3 = $("#txt-diem3").value * 1; 
var ketQua = $(".txt-ketQua1");
var diemTB = 0;
var xetDiem = "";

 diemTB = khuVuc + doiTuong + (diem1 + diem2 + diem3);
 if (diem1 === 0 || diem2 === 0 || diem3 === 0){
    dienTB = "0";
 }
 if(diemTB >= diemChuan){
    xetDiem = "Đậu";
 } else {
    xetDiem = "Rớt";
 }
    ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right text-light"></i> Tổng điểm: ${diemTB} Bạn đã: ${xetDiem}`;
 };
 //--------------------------------------//
 //TÍNH TIỀN ĐIỆN
 $(".txt-btn2").onclick = function () {
    var hoTen = $('#txt-hoTen').value;
    var soKw = $('#txt-soKw').value * 1;
    var ketQua = $('.txt-ketQua2');
    var tong = 0;
    
    switch (true) {
        case soKw <= 50:
          tong = soKw * 500; 
          break;
        case soKw <= 100:
          tong = 50 * 500 + (soKw - 50) * 650; 
          break;
        case soKw <= 200:
          tong = 50 * 500 + 50 * 650 + (soKw - 100) * 850; 
          break;
        case soKw <= 350:
          tong = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100; 
          break;
        default:
          tong = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300; 
          break;
      }
      ketQua.innerHTML = `  <i class="fa-solid fa-circle-arrow-right text-light"></i> Họ tên: ${hoTen} - Tiền điện:  ${new Intl.NumberFormat(
        "vn-VN"
      ).format(tong)} VNĐ `;
    };
//TÍNH TIỀN THUẾ
$(".txt-btn3").onclick = function() {
    var hoTen = $('#txt-hoTen');
    var thuNhap = $('#txt-thuNhap').value * 1;
    var soNguoi = $('#txt-soNguoi').value * 1;
    var tong = 0;
    var ketQua = $('.ketQua3');

}



// TÍNH TIỀN CÁP
$(".txt-btn4").onclick = () => {
    var select = $("#txt-select").value;
  
    var maKh = $("#txt-maKhachHang").value * 1;
    var maSoKenh = $("#txt-soKenh").value * 1;
    var soKetNoi = $("#txt-soKetNoi").value * 1;
    var ketQua = $(".txt-ketQua4");
  
    var tinhTien = 0;
    var giaTienMacDinhNha = 25000;
    var giaTienMacDinhCongTy = 90000;
   
    if (select === "user" && maSoKenh === 0) {
      tinhTien = giaTienMacDinhNha;
    } else if (select === "user" && maSoKenh >= 1) {
      tinhTien = giaTienMacDinhNha + maSoKenh * 7500;
    } else if (select === "company" && soKetNoi > 10) {
      tinhTien =
        giaTienMacDinhCongTy + (soKetNoi * 5000 - 50000) + maSoKenh * 50000;
    } else if (select === "company" && soKetNoi <= 10) {
      tinhTien = giaTienMacDinhCongTy;
    }
    ketQua.innerHTML = ` <i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i> Mã khách hàng ${maKh}; Tiền cáp ${new Intl.NumberFormat(
      "vn-VN"
    ).format(tinhTien)} VNĐ `;
  };
  // onChange
  var myFunc = () => {
    var select = $("#txt-select").value;
    var soKetNoi = $("#txt-soKetNoi");
    if (select === "company") {
      soKetNoi.style.display = "block";
    } else {
      soKetNoi.style.display = "none";
    }
  };