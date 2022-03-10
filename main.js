// Bài Tập 1 : Tính Lương Nhân Viên
document.getElementById("tinhluong").onclick = function () {

    //Đầu Vào : DOM tới thẻ input ngayluong lấy value
    var soNgay = document.getElementById("txtsn").value * 1;
    console.log("txtsn");

    // Xử Lý : công thức và kết quả

    var luong1Ngay = 100000;
    var tongLuong = soNgay * luong1Ngay;
    var tongKet = " Tổng Lương Là : " + tongLuong;

    //Đầu Ra : hiển thị kết quả 
    document.getElementById("thongbaobt1").innerHTML = tongKet;
    document.getElementById("thongbaobt1").style.backgroundColor = "green";
    document.getElementById("thongbaobt1").style.Color = "White";
    document.getElementById("thongbaobt1").style.fontSize = "30px";
    document.getElementById("thongbaobt1").style.textAlign = "Center";
}   

// Bài tập 2 : Tính Giá Trị Trung Bình
document.getElementById("ketqua").onclick = function () {

    //Đầu Vào : DOM tới thẻ 5 thẻ input
    var number1= document.getElementById("sothuc1").value * 1;
    console.log("sothuc1");
    var number2= document.getElementById("sothuc2").value * 1;
    console.log("sothuc2");
    var number3= document.getElementById("sothuc3").value * 1;
    console.log("sothuc3");
    var number4= document.getElementById("sothuc4").value * 1;
    console.log("sothuc4");
    var number5= document.getElementById("sothuc5").value * 1;
    console.log("sothuc5");

    
    // Xử Lý : công thức và kết quả
    var congthuc= number1 + number2 + number3 + number4 + number5/5
    var hienThi = " Kết Quả Là: " + congthuc;

    //Đầu Ra : hiển thị kết quả 
    document.getElementById("thongbaobt2").innerHTML = hienThi;
    document.getElementById("thongbaobt2").style.backgroundColor = "red";
    document.getElementById("thongbaobt2").style.Color = "White";
    document.getElementById("thongbaobt2").style.fontSize = "30px";
    document.getElementById("thongbaobt2").style.textAlign = "Center";
} 

// Bài Tập 3 : Quy Đổi Tiền
document.getElementById("tienviet").onclick = function () {

    //Đầu Vào : DOM tới thẻ 1 thẻ input
    var usd = document.getElementById("txtusd").value * 1;
    console.log("txtusd");


    // Xử Lý : công thức và kết quả
    var vnd = 23500;
    var quyDoi= usd * vnd;
    var ketQua = " Quy đổi được : " + quyDoi + "VNĐ";

    //Đầu Ra : hiển thị kết quả 
    document.getElementById("thongbaobt3").innerHTML = ketQua;
    document.getElementById("thongbaobt3").style.backgroundColor = "blue";
    document.getElementById("thongbaobt3").style.Color = "White";
    document.getElementById("thongbaobt3").style.fontSize = "30px";
    document.getElementById("thongbaobt3").style.textAlign = "Center";
} 

// Bài Tập 4 : Tích Chu Vi và Diện Tích Hình Chữ Nhật
/* Tính Chu Vi */
document.getElementById("chuvi").onclick = function () {

    //Đầu Vào : DOM tới thẻ 2 thẻ input
    var chieuRong = document.getElementById("txtChieuRong").value * 1;
    console.log("txtChieuRong");
    var chieuDai = document.getElementById("txtChieuDai").value * 1;
    console.log("txtChieuDai");

    // Xử Lý : công thức và kết quả
    var hcnchuvi = chieuRong * 2 + chieuDai * 2 ;
    var kqchuvi = " Chu Vi Hình Chữ Nhật Là : " + hcnchuvi;

    //Đầu Ra : hiển thị kết quả 
    document.getElementById("thongbaochuvi").innerHTML = kqchuvi;
    document.getElementById("thongbaochuvi").style.backgroundColor = "yellow";
    document.getElementById("thongbaochuvi").style.Color = "White";
    document.getElementById("thongbaochuvi").style.fontSize = "30px";
    document.getElementById("thongbaochuvi").style.textAlign = "Center";

}
/* Tính Diện Tích */
document.getElementById("dientich").onclick = function () {

    //Đầu Vào : DOM tới thẻ 2 thẻ input
    var chieuRong = document.getElementById("txtChieuRong").value * 1;
    console.log("txtChieuRong");
    var chieuDai = document.getElementById("txtChieuDai").value * 1;
    console.log("txtChieuDai");

    // Xử Lý : công thức và kết quả
    var hcndientich = chieuRong * chieuDai ;
    var kqdientich = " Diện Tích Hình Chữ Nhật Là : " + hcndientich ;

    //Đầu Ra : hiển thị kết quả 
    document.getElementById("thongbaodientich").innerHTML = kqdientich ;
    document.getElementById("thongbaodientich").style.backgroundColor = "teal";
    document.getElementById("thongbaodientich").style.Color = "White";
    document.getElementById("thongbaodientich").style.fontSize = "30px";
    document.getElementById("thongbaodientich").style.textAlign = "Center";

}

// Bài Tập 5 : Tích Chu Vi và Diện Tích Hình Chữ Nhật
document.getElementById("tongso").onclick = function () {

    //Đầu Vào : DOM tới thẻ 1 thẻ input
    var kyso = document.getElementById("txt2chuso").value * 1;
    console.log("txt2chuso");

    // Xử Lý : công thức và kết quả
    var sohangchuc = Math.floor(kyso%100/10);
    var sohangdv = kyso%10; 
    var tongkyso = sohangchuc + sohangdv;

    //Đầu Ra : hiển thị kết quả 
    document.getElementById("thongbaobt5").innerHTML = tongkyso ;
    document.getElementById("thongbaobt5").style.backgroundColor = "pink";
    document.getElementById("thongbaobt5").style.Color = "White";
    document.getElementById("thongbaobt5").style.fontSize = "30px";
    document.getElementById("thongbaobt5").style.textAlign = "Center";

}