function sortString(str) {
    const chars = str.split('');
    chars.sort((a, b) => {
        if (isNaN(a) && isNaN(b)) {
            return a.localeCompare(b);
        } else if (isNaN(a)) {
            return -1;
        } else if (isNaN(b)) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    });
    return chars.join('');
}
const inputString = prompt("Nhập vào một chuỗi bất kỳ:");
const sortedString = sortString(inputString);
console.log("Chuỗi sau khi sắp xếp:", sortedString);
