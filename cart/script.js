console.log("Running");
let cartResult = JSON.parse(localStorage.getItem("cart"));
let specification = JSON.parse(localStorage.getItem("specification"));

console.log(specification);
console.log(cartResult[0]);
let parentCart = document.querySelector(".cartProducts");
let itemTotal = 0;
let billItem = document.querySelector(".bill");

let totalArray = [];
for (let i = 0; i < cartResult.length; i++) {
  function getremove() {
    let item = document.createElement("div");
    item.className = "cartItem";
    item.innerHTML =
      cartResult[i] + `<button class='remove'>Remove From Cart</button>`;
    parentCart.appendChild(item);
  }
  getremove();

  let bill = document.createElement("bill");
  bill.id = "billcontainer";
  bill.innerHTML = ` <div class='bitem'><h3>${i + 1}.</h3><h3>${
    specification[i].itemTitle
  }</h3><h3>${specification[i].price}</h3></div>`;
  billItem.appendChild(bill);
  console.log(specification[i].price);
  let priceitem = specification[i].price.split("");
  priceitem.shift();
  let total = "";
  priceitem.forEach((element) => {
    total = (total + element).toString();
  });
  total = Math.round(Number(total));
  console.log(total);

  totalArray.push(total);
  console.log("Totalrounded: ");
  itemTotal += total;
  console.log(total, itemTotal, typeof total);
  
}
let billsection=document.getElementById("billcontainer");
console.log(billsection)
let cartitembill = document.getElementsByClassName("bitem");
let totalbill = document.createElement("div");
totalbill.id = "totalbill";
totalbill.innerHTML = `<h1> Total Bill: $ ${itemTotal}`;
billItem.appendChild(totalbill);
let removeItem = document.querySelectorAll(".remove");
console.log(removeItem);
let checkoutbutton = document.createElement("div");
if (itemTotal !== 0) {
  checkoutbutton.innerHTML = `<button id='clickCheckout'>Click to checkout</button>`;
  totalbill.parentNode.insertBefore(checkoutbutton, totalbill.nextSibling);
  //totalbill.insertAdjacentHTML("afterend","This is my caption.");
  // billItem.style.marginLeft="10rem";
}
for (let j = 0; j < removeItem.length; j++) {
  removeItem[j].addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
    cartitembill[j].style.display = "none";
    itemTotal = itemTotal - totalArray[j];
    totalbill.innerHTML = `<h1> Total Bill: $ ${itemTotal} `;
    console.log("totalbill changed");
    if (itemTotal == 0) {
      totalbill.innerHTML = `<h1> Hey , Its raining Offers , Add your favourite items to cart soon !</h1>`;
      // billItem.style.marginLeft="10rem";
      checkoutbutton.style.display = "none";
    }
  });
}
let razorpay = document.getElementById("clickCheckout");
razorpay.addEventListener("click", (e) => {
  e.preventDefault();
  parentCart.innerHTML =
    "<h1>Congratulations! You have successfully placed your order<h1>";
  localStorage.removeItem("cart");
  localStorage.removeItem("specification");
  billsection.style.display="none";
  totalbill.innerHTML = `<h1>Go ahead and Shop again, Add your favourite items to cart soon !</h1>`;
});
