let product = {
    name: "MacBook",
    price: 150000,
    quantity: 100,
    screen: 16,
}

console.log(product.name);
console.log(product.price);
console.log(product.quantity);
console.log(product.screen);

product.price = 162000
console.log(product.price);

if (product.quantity<10){
    console.log("Товара осталось мало!");
}else{
    console.log("Товара достаточно!");
}