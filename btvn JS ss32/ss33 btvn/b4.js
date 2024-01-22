function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.displayInfo = function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
    };
}
function Library() {
    this.books = [];
    this.addBook = function(book) {
        this.books.push(book);
    };
    this.displayAllBooks = function() {
        console.log("Danh sách đầy đủ thông tin của tất cả sách trong thư viện:");
        for (var i = 0; i < this.books.length; i++) {
            this.books[i].displayInfo();
        }
    };
}
var myLibrary = new Library();
var book1 = new Book("Sách 1", "Tác giả A", 2020);
var book2 = new Book("Sách 2", "Tác giả B", 2018);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.displayAllBooks();
