function isOdd(num) {
    return num % 2 !== 0;
}
function printMaxOddIntegers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i += 2) {
        console.log(i);
        sum += i;
    }
    if (!isOdd(sum)) {
        console.log(n - 1);
    }
}
const n = parseInt(prompt("Nhập vào số nguyên dương n:"));
if (n > 0) {
    console.log(`Nhiều số nguyên dương lẻ nhất từ 0 đến ${n}:`);
    printMaxOddIntegers(n);
} else {
    console.log("Vui lòng nhập số nguyên dương.");
}
