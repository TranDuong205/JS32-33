function contact (name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}

var phoneBook = [
    new contact("Alice", "123-456-7890", "alice@example.com"),
    new contact("Bob", "987-654-3210", "bob@example.com"),
];

for (var i = 0; i < phoenBook.lengthl; i++) {
    let contact = phoneBook[i];
    console.log("Thong tin lien lac");
    console.log("Ten" + contact.name);
    console.log("phone" + contact.phone);
    console.log("email" + contact.email)
}

for (var key in phoneBook) {
    if (phoneBook.hasOwnProperty(key) && typeof phoneBook[key].displayInfo === "function") {
        phoneBook[key].displayInfo();
    }
}