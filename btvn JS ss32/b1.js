let person = {
    name: "thieu ngu ",
    age: 25,
    address: "hoang sa",
};
console.log("Name: " + person.name + ", Age: " + person.age + ", Address: " + person.address);

person.birthdate = "1999-01-01";
console.log("\nAfter adding birthdate:");
console.log(person);
delete person.age;
console.log("\nAfter deleting age:");
console.log(person);
