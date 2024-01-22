function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
const integerArray = [2, 7, 15, 11, 5, 3, 8, 19, 20];
console.log("Các số nguyên tố trong mảng:");
for (let num of integerArray) {
    if (isPrime(num)) {
        console.log(num);
    }
}
