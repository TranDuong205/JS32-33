function mang(arr) {
    arr.sort((a, b) => a - b);
    let count = 0;
    const n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < n - 1; j++) {
            while (k < n && arr[i] + arr[j] > arr[k]) {
                k++;
            }
            count += k - j - 1;
        }
    }

    return count;
}
const arr = [3, 6, 7];
const triangleCount = mang(arr);
console.log(`Số lượng tam giác có thể tạo ra là: ${triangleCount}`);
