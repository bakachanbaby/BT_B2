let a = prompt("Vui lòng nhập chiều cao (m)");
let b = prompt("Vui lòng nhập cân nặng(kg)");
let c = b/(a*a);
c = c.toFixed(2)
alert(`Chỉ số BMI của bạn là: ${c}`)
if(c < 16)
alert("Bạn bị thiếu cân nặng nề");
else if(c >= 16 && c < 18.5)
alert("Bạn hơi thiếu cân đó");
else if(c >= 18.5 && c < 25)
alert("Bạn có cơ thể cân đối");
else if(c >= 25 && c < 30)
alert("Bạn có nguy cơ thừa cân");
else 
alert("Bạn bị thừa cân rùi")
