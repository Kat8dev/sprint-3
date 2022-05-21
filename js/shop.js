// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
const buy = (id) => addToCart(id);

// Exercise 2
function cleanCart() {
  let tBody = document.getElementById("cart_list");
  let totalPrice = document.getElementById("total_price");
  cart.length = 0;
  tBody.innerHTML = "<b>Cart was successfully cleared!</b>";
  totalPrice.innerHTML = "0";
}

// Exercise 3
let calculateTotal = () => {
  let calcTPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === 1 && cart[i].quantity >= 3) {
      calcTPrice += cart[i].promotion;
    } else {
      calcTPrice += cart[i].quantity * cart[i].price;
    }
  }
  return calcTPrice;
};

// Exercise 4 We don't use this function anymore as we refactored our code;
// function generateCart() {
//    Using the "cartlist" array that contains all the items in the shopping cart,
//    generate the "cart" array that does not contain repeated items, instead each item of this  //    array "cart" shows the quantity of product.
//   for (let i = 0; i < cartList.length; i++) {
//     let found = cart.find((item) => item.id == cartList[i].id);
//     if (found == undefined) {
//       let obj = cartList[i];
//       obj.quantity = 1;
//       cart.push(obj);
//     } else {
//       let positionOfItem = cart.indexOf(found);
//       cart[positionOfItem].quantity++;
//     }
//   }
// }

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  let i = 0,
    found = false;
  while (i < cart.length && !found) {
    if (cart[i].id == 1) {
      found = true;
      if (cart[i].quantity >= 3) {
        let getPromotion = cart[i].price * cart[i].quantity - 10;
        cart[i].promotion = getPromotion;
      } else if (cart[i].quantity >= 10) {
        let getPromotion2 = (cart[i].price * cart[i].quantity * 2) / 3;
        cart[i].promotion = getPromotion2;
      }
    }
    i++;
  }
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  let totalPrice = document.getElementById("total_price");
  let tBody = document.getElementById("cart_list");
  // Remove existing nodes of the table body;
  clearTbody();

  // Generate table body
  for (let i = 0; i < cart.length; i++) {
    // Get total price of item
    let tPrice = cart[i].price * cart[i].quantity;

    const ARRAY = [
      `${cart[i].name}`,
      `$${cart[i].price}`,
      `${cart[i].quantity}`,
      `$${tPrice}`,
    ];

    if (cart[i].id === 1 && cart[i].quantity >= 3) {
      ARRAY[3] = cart[i].promotion;
    }

    let tr = generateTr(ARRAY);
    tBody.appendChild(tr);
  }

  let totalSum = calculateTotal();
  totalPrice.innerHTML = totalSum;
}

// generates td and returns complete tr
let generateTr = (arr) => {
  let tr = document.createElement("tr");
  for (let j = 0; j < arr.length; j++) {
    let td = document.createElement("td");
    if (j === 0) {
      td = document.createElement("th");
    }
    td.innerHTML = arr[j];
    tr.appendChild(td);
  }
  return tr;
};

// Removes existing nodes of the table body
let clearTbody = () => {
  let tBody = document.getElementById("cart_list");
  while (tBody.lastElementChild) {
    tBody.removeChild(tBody.lastElementChild);
  }
};

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  let getItemFromProducts = products.find((item) => item.id == id);
  if (getItemFromProducts != undefined) {
    let checkInCart = cart.find((item) => item.id == getItemFromProducts.id);
    if (checkInCart != undefined) {
      let positionOfItem = cart.indexOf(checkInCart);
      cart[positionOfItem].quantity++;
    } else {
      let pOfItem = products.indexOf(getItemFromProducts);
      let obj = products[pOfItem];
      obj.quantity = 1;
      cart.push(obj);
    }
  }
  applyPromotionsCart();
}

// Exercise 8  /instead I loop to the array of cart and remove searched item from it
              // as I don't get why should I add to the cart as requested in below comments
              // p.s function is called remove() not add();
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  let removeItem = cart.filter(item => item.id == id);
  removeItem.forEach(item => {
    let index = cart.indexOf(item);
    cart.splice(index, 1);
  });
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
