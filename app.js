const products = [
  { id: 1, name: "Handmade Vase", price: 500 },
  { id: 2, name: "Copper Lamp", price: 850 },
  { id: 3, name: "Carpet", price: 1200 },
  { id: 4, name: "Wood Art", price: 650 }
];

const container = document.getElementById("products");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <h3>${p.name}</h3>
      <p>${p.price} EGP</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(id){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products.find(p => p.id === id));
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}
