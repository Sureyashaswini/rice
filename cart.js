let cart = JSON.parse(localStorage.getItem("cart")) || [];
let delivery = 50;

function renderCart() {
  let box = document.getElementById("items");
  box.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += item.price * item.qty;

    box.innerHTML += `
      <div class="item">
        <div>
          <b>${item.name}</b><br>
          ₹${item.price}
        </div>

        <div class="qty">
          <button onclick="decrease(${index})">-</button>
          <span>${item.qty}</span>
          <button onclick="increase(${index})">+</button>
        </div>

        <button class="remove" onclick="removeItem(${index})">X</button>
      </div>
    `;
  });

  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("total").innerText = subtotal + delivery;
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

function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function payNow(){
  let address = document.getElementById("address").value;

  if(address === ""){
    alert("Enter address");
    return;
  }

  alert("Order Placed Successfully 🎉");

  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

renderCart();
