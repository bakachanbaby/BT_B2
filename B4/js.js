let a = prompt("Vui lòng nhập số 0-9");
while (a < 0 || a > 9) {
    alert("Nhập sai số rùi bạn ơi");
    a = prompt("Vui lòng nhập số 0-9");
}
if (a < 4)
    alert("Bạn đã nhập nửa dưới của số 9");
else if(a > 5)
    alert("Bạn đã nhập nửa trên của số 9");
else 
    alert("Bạn đã nhập chính giữa của số 9");