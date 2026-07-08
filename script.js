// Kerepesi Zöldségfutár — learning-exercise demo storefront.
// All product data below is fictitious, used only to demonstrate front-end patterns.

const CATEGORIES = [
  { id: "all", label: "Összes" },
  { id: "zoldseg", label: "Zöldségek" },
  { id: "gyumolcs", label: "Gyümölcsök" },
];

const PRODUCTS = [
  { id: 1, name: "Fürtös paradicsom", unit: "500 g", price: 799, emoji: "🍅", category: "zoldseg" },
  { id: 2, name: "Új burgonya", unit: "2 kg", price: 999, emoji: "🥔", category: "zoldseg" },
  { id: 3, name: "Fejes saláta", unit: "1 db", price: 449, emoji: "🥬", category: "zoldseg" },
  { id: 4, name: "Kígyóuborka", unit: "1 db", price: 399, emoji: "🥒", category: "zoldseg" },
  { id: 5, name: "Kaliforniai paprika", unit: "500 g", price: 899, emoji: "🫑", category: "zoldseg" },
  { id: 6, name: "Sárgarépa", unit: "1 kg", price: 349, emoji: "🥕", category: "zoldseg" },
  { id: 7, name: "Vöröshagyma", unit: "1 kg", price: 299, emoji: "🧅", category: "zoldseg" },
  { id: 8, name: "Brokkoli", unit: "500 g", price: 649, emoji: "🥦", category: "zoldseg" },
  { id: 9, name: "Bio banán", unit: "1 kg", price: 649, emoji: "🍌", category: "gyumolcs" },
  { id: 10, name: "Alma, Jonagold", unit: "1 kg", price: 549, emoji: "🍎", category: "gyumolcs" },
  { id: 11, name: "Körte", unit: "1 kg", price: 799, emoji: "🍐", category: "gyumolcs" },
  { id: 12, name: "Csemegeszőlő", unit: "500 g", price: 999, emoji: "🍇", category: "gyumolcs" },
  { id: 13, name: "Citrom", unit: "500 g", price: 449, emoji: "🍋", category: "gyumolcs" },
  { id: 14, name: "Narancs", unit: "1 kg", price: 699, emoji: "🍊", category: "gyumolcs" },
  { id: 15, name: "Szamóca", unit: "250 g", price: 899, emoji: "🍓", category: "gyumolcs" },
  { id: 16, name: "Görögdinnye", unit: "1 db", price: 1490, emoji: "🍉", category: "gyumolcs" },
];

const state = {
  category: "all",
  query: "",
  cart: {}, // productId -> quantity
};

const el = {
  categoryList: document.getElementById("category-list"),
  productGrid: document.getElementById("product-grid"),
  productsTitle: document.getElementById("products-title"),
  resultsCount: document.getElementById("results-count"),
  emptyState: document.getElementById("empty-state"),
  searchInput: document.getElementById("search-input"),
  cartToggle: document.getElementById("cart-toggle"),
  cartClose: document.getElementById("cart-close"),
  cartOverlay: document.getElementById("cart-overlay"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartItems: document.getElementById("cart-items"),
  cartEmpty: document.getElementById("cart-empty"),
  cartCount: document.getElementById("cart-count"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  checkoutButton: document.getElementById("checkout-button"),
  bottomCartCount: document.getElementById("bottom-cart-count"),
  bottomToolbar: document.querySelector(".bottom-toolbar"),
  categoryNav: document.querySelector(".category-nav"),
};

function formatHuf(amount) {
  return amount.toLocaleString("hu-HU") + " Ft";
}

function renderCategories() {
  el.categoryList.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "category-chip" + (cat.id === state.category ? " active" : "");
    button.textContent = cat.label;
    button.addEventListener("click", () => {
      state.category = cat.id;
      renderCategories();
      renderProducts();
    });
    li.appendChild(button);
    el.categoryList.appendChild(li);
  });
}

function getFilteredProducts() {
  const query = state.query.trim().toLowerCase();
  return PRODUCTS.filter((p) => {
    const matchesCategory = state.category === "all" || p.category === state.category;
    const matchesQuery = !query || p.name.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const activeCategory = CATEGORIES.find((c) => c.id === state.category);
  el.productsTitle.textContent = state.category === "all" ? "Összes termék" : activeCategory.label;
  el.resultsCount.textContent = `${filtered.length} termék`;
  el.emptyState.hidden = filtered.length !== 0;

  el.productGrid.innerHTML = "";
  filtered.forEach((product) => {
    el.productGrid.appendChild(renderProductCard(product));
  });
}

function renderProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const emoji = document.createElement("div");
  emoji.className = "product-emoji";
  emoji.textContent = product.emoji;

  const name = document.createElement("div");
  name.className = "product-name";
  name.textContent = product.name;

  const unit = document.createElement("div");
  unit.className = "product-unit";
  unit.textContent = product.unit;

  const price = document.createElement("div");
  price.className = "product-price";
  price.textContent = formatHuf(product.price);

  card.append(emoji, name, unit, price);

  const qty = state.cart[product.id] || 0;
  if (qty > 0) {
    card.appendChild(renderQtyStepper(product));
  } else {
    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.textContent = "Kosárba";
    addButton.addEventListener("click", () => {
      setQuantity(product.id, 1);
      renderProducts();
      renderCart();
    });
    card.appendChild(addButton);
  }

  return card;
}

function renderQtyStepper(product) {
  const wrap = document.createElement("div");
  wrap.className = "qty-stepper";

  const minus = document.createElement("button");
  minus.textContent = "−";
  minus.addEventListener("click", () => {
    setQuantity(product.id, (state.cart[product.id] || 0) - 1);
    renderProducts();
    renderCart();
  });

  const qtyLabel = document.createElement("span");
  qtyLabel.textContent = state.cart[product.id] || 0;

  const plus = document.createElement("button");
  plus.textContent = "+";
  plus.addEventListener("click", () => {
    setQuantity(product.id, (state.cart[product.id] || 0) + 1);
    renderProducts();
    renderCart();
  });

  wrap.append(minus, qtyLabel, plus);
  return wrap;
}

function setQuantity(productId, quantity) {
  if (quantity <= 0) {
    delete state.cart[productId];
  } else {
    state.cart[productId] = quantity;
  }
}

function getCartLines() {
  return Object.entries(state.cart).map(([id, qty]) => {
    const product = PRODUCTS.find((p) => p.id === Number(id));
    return { product, qty };
  });
}

function renderCart() {
  const lines = getCartLines();
  const totalItems = lines.reduce((sum, l) => sum + l.qty, 0);
  const subtotal = lines.reduce((sum, l) => sum + l.qty * l.product.price, 0);

  el.cartCount.textContent = totalItems;
  el.cartSubtotal.textContent = formatHuf(subtotal);
  el.checkoutButton.disabled = totalItems === 0;
  el.cartEmpty.hidden = lines.length > 0;

  el.bottomCartCount.textContent = totalItems;
  el.bottomCartCount.hidden = totalItems === 0;

  el.cartItems.innerHTML = "";
  lines.forEach(({ product, qty }) => {
    const line = document.createElement("div");
    line.className = "cart-line";

    const emoji = document.createElement("div");
    emoji.className = "cart-line-emoji";
    emoji.textContent = product.emoji;

    const info = document.createElement("div");
    info.className = "cart-line-info";
    const name = document.createElement("div");
    name.className = "cart-line-name";
    name.textContent = `${product.name} × ${qty}`;
    const price = document.createElement("div");
    price.className = "cart-line-price";
    price.textContent = formatHuf(product.price * qty);
    info.append(name, price);

    const remove = document.createElement("button");
    remove.className = "cart-line-remove";
    remove.textContent = "Eltávolít";
    remove.addEventListener("click", () => {
      setQuantity(product.id, 0);
      renderProducts();
      renderCart();
    });

    line.append(emoji, info, remove);
    el.cartItems.appendChild(line);
  });
}

function openCart() {
  el.cartDrawer.classList.add("open");
  el.cartDrawer.setAttribute("aria-hidden", "false");
  el.cartOverlay.hidden = false;
}

function closeCart() {
  el.cartDrawer.classList.remove("open");
  el.cartDrawer.setAttribute("aria-hidden", "true");
  el.cartOverlay.hidden = true;
}

el.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

el.cartToggle.addEventListener("click", openCart);
el.cartClose.addEventListener("click", closeCart);
el.cartOverlay.addEventListener("click", closeCart);

el.checkoutButton.addEventListener("click", () => {
  alert("Ez egy tanulási célú demó, a pénztár funkció nincs bekötve.");
});

function setActiveToolbarItem(button) {
  el.bottomToolbar.querySelectorAll(".bt-item").forEach((item) => item.classList.remove("active"));
  if (button) button.classList.add("active");
}

el.bottomToolbar.querySelectorAll(".bt-item").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveToolbarItem(button);
    } else if (action === "categories") {
      el.categoryNav.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveToolbarItem(button);
    } else if (action === "search") {
      el.searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      el.searchInput.focus();
      setActiveToolbarItem(button);
    } else if (action === "cart") {
      openCart();
    }
  });
});

renderCategories();
renderProducts();
renderCart();
