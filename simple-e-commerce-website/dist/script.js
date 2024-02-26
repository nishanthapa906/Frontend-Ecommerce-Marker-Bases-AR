




const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
function purchase(itemId) {
  const itemName = document.getElementById(itemId).getElementsByClassName("name")[0].innerText;
  const itemPrice = document.getElementById(itemId).getElementsByClassName("price")[0].innerText;

  // You can customize the purchase logic, e.g., show a confirmation message or redirect to a payment page.
alert(`You have purchased ${itemName} for ${itemPrice}.`);
}

function addToCart(itemId) {
  const itemName = document.getElementById(itemId).getElementsByClassName("name")[0].innerText;

  // You can customize the cart logic, e.g., add the item to a cart array.
  alert(`${itemName} added to the cart.`);
}


// Add an event listener to call ARviews when AR-btn is clicked
document.addEventListener('DOMContentLoaded', function () {
  const arButtons = document.querySelectorAll('.AR-btn');
  arButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Extract item information based on your implementation
      const item = button.dataset.item; // You need to adjust this based on your HTML structure
      ARviews(item);
    });
  });
});



