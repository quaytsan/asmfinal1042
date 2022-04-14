let slideIndex = 1;
showSlides(slideIndex = 1);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// document.getElementById("showcart").style.display = "none";
// var arrGH = new Array;

// function themvaogiohang(x) {
//     var nodeSP = x.parentElement.children;
//     var hinh = nodeSP[0].children[0].src;
//     var tensp = nodeSP[1].innerText;
//     var giasp = nodeSP[2].children[0].innerText;
//     var soluong = nodeSP[3].value;
//     var sp = [hinh, tensp, giasp, soluong];
//     arrGH.push(sp);
//     demgiohang();
//     showmycart();
//     //  console.log(arrGH);
//     // alert(soluong);
//     // console.log(nodeSP);
 
// }

// function demgiohang() {
//     var a = arrGH.length;
//     document.getElementById("countsp").innerText = a;
// }

// function showcart() {
//     var x = document.getElementById("showcart");
//     if (x.style.display == "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
//     showmycart();
// }

// function showmycart() {
//     var ttgh = "";
//     var tongtt = 0;
//     for (var i = 0; i < arrGH.length; i++) {
//         var tt = Number(arrGH[i][2]) * Number(arrGH[i][3]);
//         tongtt += tt;
//         ttgh += `
//         <tr>
//             <td>${i + 1}</td>
//             <td><img src='${arrGH[i][0]}'></td>
//             <td>${arrGH[i][1]}</td>
//             <td>${arrGH[i][2]}</td>
//             <td>${arrGH[i][3]}</td>
//             <td>${tt} (đ)</td>
//         </tr>
//         `
//     }
//     ttgh += `
//     <tr>
//         <td colspan="5">Tổng Đơn Hàng</td>
//         <td>${tongtt}</td>
//     </tr>
//     `
//     document.getElementById("mycart").innerHTML = ttgh;
// }

document.getElementById("showcart").style.display="none";
var giohang = new Array();
function themvaogiohang(x){
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = boxsp[3].value;
    var sp = new Array(hinh,gia,tensp,soluong);
    giohang.push(sp);
    console.log(giohang);
    showcountsp();
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
}
function showcountsp(){
    document.getElementById("countsp").innerHTML = giohang.length;
}
function xoasp(x){
    var tr = x.parentElement.parentElement;
    var tensp  = tr.children[2].innerText;
    tr.remove();
    for (let i = 0; i < giohang.length; i++){
        if(giohang[i][2]==tensp){
            giohang.splice(i, 1);
        }
    }
    showmycart();
    showcountsp();
   
}
function xoaall(){
 giohang = [];
 showmycart();
 showcountsp();
}

function showmycart(){
    var ttgh = "";
    var tong = 0;
   
    for(let i = 0; i < giohang.length; i++){
        var tt = parseInt(giohang[i][1])*parseInt(giohang[i][3]);
        tong += tt;
        ttgh+= ' <tr>'+
        '<td>'+(i+1)+'</td>'+
       ' <td><img src="'+giohang[i][0]+'" alt=""></td>'+
       ' <td>'+giohang[i][2]+'</td>'+
        '<td>'+giohang[i][1]+'</td>'+
        '<td>'+giohang[i][3]+'</td>'+
        '<td>'+
            '<div>'+tt+'</div>'+
        '</td>'+
        '<td>'+
            '<button onclick="xoasp(this)">Xóa</button>'+
        '</td>'+
        '</tr>';
   
    }
    ttgh +=  '</tr>'+
    '<tr>'+
        '<th colspan="6">Tổng đơn hàng</th>'+
        '<th>'+
        '<div>'+tong+'</div>'+
        '</th>'+
    '</tr>';
    document.getElementById("mycart").innerHTML =ttgh;
   
}
function showcart(){
    
    var x = document.getElementById("showcart");
    if (x.style.display ==  "block"){
        x.style.display = "none";
    }
    else{
        x.style.display ="block";
    }
    showmycart();
}
function showgiohang_thanhtoan(){
var  gh = sessionStorage.getItem("giohang");
var giohang = JSON.parse(gh);
var ttgh = "";
var tong = 0;

for(let i = 0; i < giohang.length; i++){
    var tt = parseInt(giohang[i][1])*parseInt(giohang[i][3]);
    tong += tt;
    ttgh+= ' <tr>'+
    '<td>'+(i+1)+'</td>'+
   ' <td><img src="'+giohang[i][0]+'" alt=""></td>'+
   ' <td>'+giohang[i][2]+'</td>'+
    '<td>'+giohang[i][1]+'</td>'+
    '<td>'+giohang[i][3]+'</td>'+
    '<td>'+
        '<div>'+tt+'</div>'+
    '</td>'+
    '</tr>';

}
ttgh +=  '</tr>'+
'<tr>'+
    '<th colspan="5">Tổng đơn hàng</th>'+
    '<th>'+
    '<div>'+tong+'</div>'+
    '</th>'+
'</tr>';
document.getElementById("mycart").innerHTML =ttgh;

}
function dongydathang(){
    var ttnh = document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var diachi = ttnh[1].children[1].children[0].value;
    var dienthoai = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;
    var nguoinhan = new Array(hoten,diachi,dienthoai,email);
    console.log(nguoinhan);
    sessionStorage.setItem("nguoinhan",JSON.stringify(nguoinhan));
    window.location.assign("donhang.html")
    
}
function showttnn(){
    var nguoinhan = sessionStorage.getItem("nguoinhan");
    var tt = JSON.parse(nguoinhan);
    var tt =  '<tr>'+
    '<td>Họ tên</td>'+
    '<td>'+tt[0]+'</td>'+
    
'</tr>'+
'<tr>'+
    '<td>Địa chỉ</td>'+
    '<td>'+tt[1]+'</td>'+
    '<br>'+
'</tr>'+
'<tr>'+
    '<td>Điện thoại</td>'+
    '<td>'+tt[2]+'</td>'+
    '<br>'+
'</tr>'+
'<tr>'+
    '<td>Email</td>'+
    '<td>'+tt[3]+'</td>'+
    '<br>'+
'</tr>';
document.getElementById("thongtinnhanhang").innerHTML =tt;
}

