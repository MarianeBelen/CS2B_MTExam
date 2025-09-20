
let cart=[];
//adds products to cart
function addToCart(product) {
  cart.push(product);
  alert(product + " has been added to your cart!");
  showCart();
}
//removes product to cart
function removeFromCart(product) {
    cart.splice(index, 1);
  alert(product + " has been removed to your cart!");
  showCart();
}

//function that shows your cart
function showCart() {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
    alert("Your cart is empty."); //if there are nothing in cart
  } else { //shows items in cart
    let cartList = "🛒 Your Cart:\n";
    cart.forEach((item, i) => {
      cartList += (i + 1) + ". " + item + "\n";
    });
    alert(cartList);
  }
}