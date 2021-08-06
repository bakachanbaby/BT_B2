let a = prompt("Vui lòng nhập số n");
let b = prompt("Vui lòng nhập số x");
let c = a/2;
if (b < c)
    alert(`Bạn đã nhập nửa dưới của số ${a} `);
else if(b > c)
    alert(`Bạn đã nhập nửa trên của số ${a} `);
else 
    alert(`Bạn đã nhập chính giữa của số ${a} `);