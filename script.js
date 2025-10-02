// Stockage → prix dynamique
const storageSelect = document.getElementById('storage');
const priceEl = document.getElementById('price');
storageSelect.addEventListener('change', e => {
  const price = e.target.selectedOptions[0].dataset.price;
  priceEl.textContent = `Prix : ${price} €`;
});

// Panier
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');
let total = 0;

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    const name = item.dataset.name;
    const price = parseInt(item.dataset.price);
    const li = document.createElement('li');
    li.textContent = `${name} - ${price} €`;
    cartList.appendChild(li);
    total += price;
    cartTotal.textContent = total;
  });
});

// Mode sombre
const toggleBtn = document.createElement('button');
toggleBtn.textContent = "Mode Sombre / Clair";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "10px";
toggleBtn.style.right = "10px";
document.body.appendChild(toggleBtn);
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
