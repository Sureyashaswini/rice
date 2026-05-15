let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  let item = cart.find(i => i.name === name);

  if(item){
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  save();
}

function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCount();
}

function updateCount(){
  document.getElementById("cart-count").innerText = cart.length;
}

function openCart(){
  document.getElementById("cart-panel").style.display = "block";
  renderCart();
}

function closeCart(){
  document.getElementById("cart-panel").style.display = "none";
}
function increase(i){
    cart[i].qty++;
    save();
  }

  function decrease(i){
    if(cart[i].qty > 1) cart[i].qty--;
    save();
  }

  function removeItem(i){
    cart.splice(i,1);
    save();
  }

let delivery = 0;

function renderCart(){

  let box = document.getElementById("cart-items");
  box.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item, index) => {

    subtotal += item.price * item.qty;

   box.innerHTML += `
  <div class="cart-item">
    ${item.name} - ₹${item.price} x ${item.qty}

    <button onclick="removeFromCart(${index})" class="trash-btn">
      🗑️
    </button>

      </div>
    `;
  });

  let payment = document.getElementById("payment").value;

  let delivery = (payment === "Cash on Delivery" || subtotal < 500) ? 50 : 0;

  let total = subtotal + delivery;

  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("deliveryFee").innerText = delivery;
  document.getElementById("total").innerText = total;
}
function removeFromCart(index){

  // If quantity is more than 1 → reduce it
  if(cart[index].qty > 1){
    cart[index].qty--;
  }
  else {
    // If only 1 → remove item completely
    cart.splice(index, 1);
  }

  // Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCount();
  renderCart();
}
function payNow(){

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let house = document.getElementById("house").value;
  let street = document.getElementById("street").value;
  let city = document.getElementById("city").value;
  let pincode = document.getElementById("pincode").value;
  let address = document.getElementById("address").value;

  if(name === "" || phone === "" || house === "" || street === "" || city === "" || pincode === ""){
    alert("Please fill all delivery details");
    return;
  }



  


  let payment = document.getElementById("payment").value;

  if(payment === "UPI"){

    // OPEN POPUP
    document.getElementById("upi-popup").style.display = "block";
  }
  else{

    alert("Order Placed Successfully 🎉");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
  }
}

let popupItem = {};

function openProduct(name, price, rating, mfg, img){

  popupItem = {name, price};

  document.getElementById("pname").innerText = name;
  document.getElementById("pprice").innerText = price;
  document.getElementById("prating").innerText = rating;
  document.getElementById("pmfg").innerText = mfg;
  document.getElementById("pimg").src = img;

  document.getElementById("product-popup").style.display = "block";
}

function closeProduct(){
  document.getElementById("product-popup").style.display = "none";
}

function addToPopupCart(){
  addToCart(popupItem.name, popupItem.price);
  closeProduct();
}
function toggleUPI(){

  let payment = document.getElementById("payment").value;

  if(payment === "UPI"){
    document.getElementById("upi-box").style.display = "block";
  }
  else{
    document.getElementById("upi-box").style.display = "none";
  }
}
function paymentSuccess(){

  alert("Payment Successful ✅");

  localStorage.removeItem("cart");

  window.location.href = "index.html";
}
function closeUPI(){
  document.getElementById("upi-popup").style.display = "none";
}

function paymentSuccess(){

  alert("Payment Successful ✅");

  localStorage.removeItem("cart");

  window.location.href = "index.html";
}