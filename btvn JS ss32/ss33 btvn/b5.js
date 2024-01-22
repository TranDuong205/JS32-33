function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
    this.displayInfo = function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
        console.log("Trạng thái: " + (this.isAvailable ? "Sẵn có" : "Đã mượn"));
        console.log("----------------------");
    };
    this.borrow = function() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("Bạn đã mượn sách: " + this.title);
        } else {
            console.log("Sách " + this.title + " không khả dụng để mượn.");
        }
    };
    this.returnBook = function() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log("Bạn đã trả sách: " + this.title);
        } else {
            console.log("Sách " + this.title + " đã có sẵn.");
        }
    };
}
var myBook = new Book("Batman", "Tran Duong", 2040);

myBook.displayInfo();
myBook.borrow();
myBook.returnBook();
myBook.displayInfo();
