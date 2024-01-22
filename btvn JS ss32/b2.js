function Information(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}
let personInfo = new Information(1, "Tran Duong", "123-456-7890", "Hoang Mike");
delete personInfo.address;
personInfo.email = "john.doe@example.com";
console.log(personInfo);