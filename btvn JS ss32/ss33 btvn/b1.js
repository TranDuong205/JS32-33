var person = {
    name: "Duong",
    age: 25,
    address: "Hoang mike"
};

// Hiển thị thông tin ban đầu
console.log("Thông tin ban đầu:");
for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}
console.log("----------------------");

// Thêm thuộc tính ngày sinh và xóa thuộc tính tuổi
person.birthDate = "1990-01-01";
delete person.age;

// Hiển thị thông tin sau khi thêm và xóa thuộc tính
console.log("Thông tin sau khi thêm và xóa thuộc tính:");
for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}
console.log("----------------------");
