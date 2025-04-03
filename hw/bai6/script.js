const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];

function checkout(){
    let sum = 0;
    // cart.forEach(function(key, idx){
    //     sum += (key.price * key.quantity)
    // });
    cart.forEach((key) => {
        sum += (key.price * key.quantity)
    });

    return sum;
}
console.log(checkout());
