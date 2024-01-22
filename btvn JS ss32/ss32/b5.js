function capitalizeLastLetter(inputString) {
    const words = inputString.split(' ');
    const modifiedWords = words.map(word => {
        if (word.length > 1) {
            return word.slice(0, -1) + word.slice(-1).toUpperCase();
        } else {
            return word.toUpperCase();
        }
    });
    const resultString = modifiedWords.join(' ');
    return resultString;
}
const userInput = prompt('Nhập vào một chuỗi bất kỳ:');
const modifiedString = capitalizeLastLetter(userInput);
console.log(modifiedString);
