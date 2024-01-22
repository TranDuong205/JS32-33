function Product (id, name, price, quantily) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantily = quantily;
}

let product = new Product(1, "Gia thieu", "1000", "good");
console.log("ID " + product.id );
console.log("name " + product.name );
console.log("Price " + product.price );
console.log("Quantily " + product.quantily );