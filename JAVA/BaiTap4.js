function tinhToan() {
  var chieuDai = +document.getElementById("chieuDai").value;
  var chieuRong = +document.getElementById("chieuRong").value;

  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;

  var ketQuaEL = document.getElementById("KetQua");
  ketQuaEL.innerHTML = "";

  var chuViEL = document.createElement("p");
  chuViEL.innerHTML = "Chu vvi:" + chuVi;

  var dienTichEL = document.createElement("p");
  dienTichEL.innerHTML = "Diện tích:" + dienTich;

  ketQuaEL.appendChild(chuViEL);
  ketQuaEL.appendChild(dienTichEL);
}
