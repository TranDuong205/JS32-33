function Book (author, name) {
    this.author = author;
    this.name = name;
}

function createBookArray(){
    return [
    new Book("author1", "Book1"),
    new Book("author2", "Book2"),
    new Book("author1", "Book3"),
    new Book("author4", "Book4"),
];
}
function searchBooksByauthor(author, books){
    return books.filter(book => book.author === author)
}

function main(){
    let books = createBookArray();
    var authortosearch = prompt("nhap ten tac gia");
    let foundbooks = searchBooksByauthor(authortosearch, books);
    if (foundbooks.lenght > 0) {
        console.log("sach cua tac gia " + authortosearch + ":");
        foundbooks.forEach(book => {
            console.log("ten sach: " + book.name);
        }); 
        } else {
            console.log("khong tim thay ten tac gia " + authortosearch);
        }
    }

    main();