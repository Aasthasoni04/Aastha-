let cartCount = 0;
let total = 0;
function addToCart(price) {
 cartCount++;
 total += price;
 document.getElementById("cart-count").textContent = cartCount;
 document.getElementById("total-price").textContent = "₹" + total;
}
function toggleMenu() {
 const nav = document.getElementById("navLinks");
 nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
