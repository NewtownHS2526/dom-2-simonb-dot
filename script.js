console.log("DOM Methods Learning Activity - Script Running");

/* =========================
SECTION 1: getElementById()
========================= */

// DEMO
const runDemo1 = document.getElementById('run-demo-1');
const demoBtn1 = document.getElementById('demo-btn-1');
const demoText1 = document.getElementById('demo-text-1');
const demoBox1 = document.getElementById('demo-box-1');
const demoResult1 = document.getElementById('demo-result-1');

if (runDemo1) {
  runDemo1.addEventListener('click', () => {
    demoText1.textContent = "Text changed with textContent!";
    demoText1.style.color = "#10b981";
    demoText1.style.fontSize = "20px";

    demoBox1.innerHTML = "<strong>HTML</strong> changed!";
    demoBox1.style.backgroundColor = "#fef3c7";

    demoBtn1.textContent = "Clicked!";
    demoBtn1.style.backgroundColor = "#10b981";

    demoResult1.innerHTML = `
      ✓ Selected elements by ID<br>
      ✓ Used textContent<br>
      ✓ Used innerHTML<br>
      ✓ Changed styles
    `;
  });
}

// PRACTICE 1
document.getElementById('practice-btn-1')?.addEventListener('click', () => {
  const text = document.getElementById('practice-text-1');
  text.textContent = "I changed this text!";
  text.style.color = "#10b981";
  text.style.fontWeight = "bold";
});

// PRACTICE 2
document.getElementById('practice-btn-2')?.addEventListener('click', () => {
  const html = document.getElementById('practice-html-1');
  html.innerHTML = "<strong>Bold HTML</strong> and <em>italic text</em>";
  html.style.backgroundColor = "#fef3c7";
});

// PRACTICE 3
document.getElementById('practice-btn-3')?.addEventListener('click', () => {
  const styleBox = document.getElementById('practice-style-1');
  styleBox.style.color = "red";
  styleBox.style.fontSize = "24px";
  styleBox.style.backgroundColor = "lightblue";
  styleBox.style.padding = "20px";
});

/* ==============================
SECTION 2: getElementsByClassName
============================== */

// DEMO
document.getElementById('run-demo-2')?.addEventListener('click', () => {
  const cards = document.getElementsByClassName('demo-card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].textContent = `Card ${i + 1} - Updated!`;
    cards[i].style.backgroundColor = "#dbeafe";
  }
});

// PRACTICE 1
document.getElementById('practice-btn-4')?.addEventListener('click', () => {
  const items = document.getElementsByClassName('item-text');
  for (let i = 0; i < items.length; i++) {
    items[i].textContent = `Updated Item ${i + 1}`;
    items[i].style.color = "#10b981";
  }
});

// PRACTICE 2
document.getElementById('practice-btn-5')?.addEventListener('click', () => {
  const boxes = document.getElementsByClassName('box-item');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "<span style='color:green;'>Updated!</span>";
  }
});

// PRACTICE 3
document.getElementById('practice-btn-6')?.addEventListener('click', () => {
  const colorBoxes = document.getElementsByClassName('color-box');
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = "lightblue";
    colorBoxes[i].style.color = "darkblue";
  }
});

/* ======================
SECTION 3: querySelector
====================== */

// PRACTICE 1
document.getElementById('practice-btn-7')?.addEventListener('click', () => {
  const target = document.querySelector('#target-id');
  target.textContent = "Selected with querySelector!";
  target.style.backgroundColor = "#dbeafe";
});

// PRACTICE 2
document.getElementById('practice-btn-8')?.addEventListener('click', () => {
  const first = document.querySelector('.target-class');
  first.innerHTML = "<strong>First item selected!</strong>";
});

// PRACTICE 3
document.getElementById('practice-btn-9')?.addEventListener('click', () => {
  const special = document.querySelector('div.special');
  special.textContent = "Selected using div.special";
});

/* =========================
FINAL CHALLENGE: Shopping Cart
========================= */

let cart = [];
let total = 0;

const buttons = document.getElementsByClassName('add-to-cart');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    const product = this.parentElement;
    const name = product.querySelector('.product-name').textContent;
    const price = parseFloat(
      product.querySelector('.product-price').textContent.replace('$', '')
    );

    cart.push({ name, price });
    total += price;
    updateCart();
  });
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = total.toFixed(2);
}

document.getElementById('clear-cart')?.addEventListener('click', () => {
  cart = [];
  total = 0;
  updateCart();
});

updateCart();
