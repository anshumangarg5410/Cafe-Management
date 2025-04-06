
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = {
        name: name,
        price: price,
        quantity: 1
    };

    let existing = cart.find((food) => food.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}


let cartcontainuer = document.querySelector(".cart-container");

let total = 0;

cartcontainuer.innerHTML = "";

cart.forEach((item) => {
    let tempprice = item.price * item.quantity;
    total += tempprice;

    let cartitem = document.createElement("div");
    cartitem.classList.add("cart-item");

    cartitem.innerHTML = `
        <img src="../Assets/bestseller.jpg" alt="${item.name}">
        <div class="item-details">
            <h3>"${item.name}"</h3>
            <p>Price: ${item.price}</p>
            <input type="number" min="1" value="${item.quantity}">
        </div>
    `

    cartcontainuer.appendChild(cartitem);
})

let totaldiv = document.createElement("div");
let reset = document.createElement("div");


totaldiv.classList.add("cart-total");
reset.classList.add("cart-rem");

totaldiv.innerHTML = `
    <h2>Total : ${total}</h2>
    <button class="checkout-btn">Proceed to Checkout</button>
`

reset.innerHTML = `
    <button onclick = "localStorage.removeItem('cart'); ; location.reload();" class="checkout-btn">Reset the Cart</button>
`

cartcontainuer.appendChild(totaldiv);
cartcontainuer.appendChild(reset);
