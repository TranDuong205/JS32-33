function isPalindrome(arr) {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
const randomArray = [1, 2, 3, 2, 1];
const result = isPalindrome(randomArray);

console.log("Mảng:", randomArray);
console.log("Có đối xứng hay không?", result);
