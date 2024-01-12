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
//TÍNH TIỀN CÁP
