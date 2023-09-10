/*
Filename: complex_script.js

Description:
This code showcases an elaborate e-commerce system implemented in JavaScript. It simulates a multi-vendor marketplace where users can browse products, add them to a cart, and complete purchases. The code is designed with a modular approach, utilizing classes and functions to achieve a scalable and maintainable architecture.

Disclaimer:
This script is a simulated example and not intended for production use. Some functionalities may be omitted or simplified for brevity.

Author: Your Name
Date: Insert date

*/

// Class representing a Product
class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

// Class representing a Vendor
class Vendor {
    constructor(name) {
        this.name = name;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }
}

// Class representing a Shopping Cart
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        this.items.push({ product, quantity });
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (const item of this.items) {
            totalPrice += item.product.price * item.quantity;
        }
        return totalPrice;
    }
}

// Class representing a User
class User {
    constructor(name) {
        this.name = name;
        this.cart = new ShoppingCart();
    }

    browseProducts(products) {
        for (const product of products) {
            console.log(product.name + ": $" + product.price);
        }
    }

    addToCart(product, quantity) {
        this.cart.addItem(product, quantity);
        console.log(quantity + "x " + product.name + " added to cart.");
    }

    checkout() {
        const totalPrice = this.cart.getTotalPrice();
        console.log("Total Price: $" + totalPrice);
        // Perform payment processing and order fulfillment logic here
        console.log("Order placed successfully!");
    }

    viewCart() {
        for (const item of this.cart.items) {
            console.log(item.product.name + " x" + item.quantity);
        }
        console.log("Total Price: $" + this.cart.getTotalPrice());
    }
}

// Main logic
const vendor1 = new Vendor("Vendor 1");
const vendor2 = new Vendor("Vendor 2");

const product1 = new Product("Product 1", 10, "Description for Product 1");
const product2 = new Product("Product 2", 20, "Description for Product 2");

vendor1.addProduct(product1);
vendor2.addProduct(product2);

const user1 = new User("User 1");

user1.browseProducts([...vendor1.products, ...vendor2.products]);

user1.addToCart(product1, 2);
user1.addToCart(product2, 1);

user1.viewCart();

user1.checkout();

/* Output:
Product 1: $10
Product 2: $20
2x Product 1 added to cart.
1x Product 2 added to cart.
Product 1 x2
Product 2 x1
Total Price: $40
Total Price: $40
Order placed successfully!
*/