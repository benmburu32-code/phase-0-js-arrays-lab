let products = [
    "Laptop",
    "Phone",
    "Headphones",
    "Monitor"
];

function removeLastProduct() {
    return products.pop();
}

function addProduct(newProduct) {
    return products.push(newProduct);
}

function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    }
}

function logFirstProduct() {
    console.log(products[0]);
}

module.exports = {
    products,
    removeLastProduct,
    addProduct,
    updateProductName,
    logFirstProduct 

  };