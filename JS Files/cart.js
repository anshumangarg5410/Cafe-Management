// Step 1: Load existing cart from localStorage if it exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = {
        name: name,
        price: price,
        quantity: 1
    };

    // Step 2: Check if item already exists in cart
    let existing = cart.find((food) => food.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push(item);
    }

    // Step 3: Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}