const cartContainer = document.getElementById("cart");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

cart.forEach((item,index)=>{
  total += item.price;

  cartContainer.innerHTML += `
    <div class="card">
      <h3>${item.name}</h3>
      <p>${item.price} EGP</p>
      <button onclick="removeItem(${index})">Remove</button>
    </div>
  `;
});

totalEl.innerText = "Total: " + total + " EGP";

function removeItem(i){
  cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  location.reload();
}
