let sum = Number(0);
let a = Number(1);
while(a < 10)
{
    sum+=a;
    a++;
}
alert(`Tổng từ 1-10 là: ${sum} `);

let b = prompt('Vui lòng nhập số để tính giai thừa');
let giaiThua = 1;
for(let i = 1; i <= b; i++)
    giaiThua *=i;
alert(`Giai thừa của ${b} là ${giaiThua}`);

for(let c = 1; c <= 20; c+=3)
{
    console.log(c);
}