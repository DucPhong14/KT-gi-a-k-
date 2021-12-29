let bnt_Dong_y = document.getElementById("bnt_Dong_y");

let txt_Ten = document.getElementById("txt_Ten");
let txt_DiaChi = document.getElementById("txt_DiaChi");
let txt_SDT = document.getElementById("txt_SDT");
let slg_Nguoi_lon = document.getElementById("slg_Nguoi_lon");
let slg_Tre_em = document.getElementById("slg_Tre_em");

function check_ten(a) {
  let ho_ten = /[a-z]/;
  if (ho_ten.test(a)) {
    document.getElementById("txt_TenHelp").textContent = "OK";
    return true;
  } else {
    document.getElementById("txt_TenHelp").textContent =
      "Bạn nhập chưa đúng định dạng Họ và tên yêu cầu";
    document.getElementById("txt_TenHelp").style.color = "red";
  }
}
function check_diachi(a) {
  let dia_chi = /[!@#$%^&*_=+-]/;
  if (!dia_chi.test(a)) {
    document.getElementById("txt_DiaChiHelp").textContent = "OK";
    return true;
  } else {
    document.getElementById("txt_DiaChiHelp").textContent =
      "Bạn nhập chưa đúng định dạng địa chỉ yêu cầu";
    document.getElementById("txt_DiaChiHelp").style.color = "red";
  }
}
function check_sdt(a) {
  let sdt = /[0-9]{10}/;
  if (sdt.test(a)) {
    document.getElementById("txt_SDTHelp").textContent = "OK";
    return true;
  } else {
    document.getElementById("txt_SDTHelp").textContent =
      "Bạn nhập chưa đúng định dạng số điện thoại yêu cầu";
    document.getElementById("txt_SDTHelp").style.color = "red";
  }
}
function check_khach(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    document.getElementById("slg_NguoiHelp").textContent = "OK";
    return true;
  } else {
    document.getElementById("slg_NguoiHelp").textContent =
      "Bạn nhập chưa đúng định dạng số lượng khách hàng yêu cầu";
    document.getElementById("slg_NguoiHelp").style.color = "red";
  }
}

bnt_Dong_y.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    check_ten(txt_Ten.value) &&
    check_diachi(txt_DiaChi.value) &&
    check_sdt(txt_SDT.value) &&
    check_khach(slg_Tre_em.value, slg_Nguoi_lon.value)
  ) {
    document.getElementById("Thanh_cong").textContent =
      "Bạn đã đăng ký thàng công!!!";
  }
});
