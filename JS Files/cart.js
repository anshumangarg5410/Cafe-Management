let cart = [];

function addToCart(name, price){
    let item = {
        name: name,
        price: price,
        quantity: 1
    };

    let existing = cart.find((food) => {return food.name === name});
    if (existing) existing.quantity++;
    else cart.push(item);
}