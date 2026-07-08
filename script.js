// Zöldfutár — learning-exercise demo storefront.
// All product data below is fictitious, used only to demonstrate front-end patterns.

const CATEGORIES = [
  { id: "all", label: "Összes" },
  { id: "zoldseg", label: "Zöldség-gyümölcs" },
  { id: "tejtermek", label: "Tejtermék" },
  { id: "pekaru", label: "Pékáru" },
  { id: "husaru", label: "Húsáru" },
  { id: "innivalo", label: "Innivalók" },
  { id: "haztartas", label: "Háztartás" },
];

const PRODUCTS = [
  { id: 1, name: "Fürtös paradicsom", unit: "500 g", price: 799, emoji: "🍅", category: "zoldseg" },
  { id: 2, name: "Bio banán", unit: "1 kg", price: 649, emoji: "🍌", category: "zoldseg" },
  { id: 3, name: "Új burgonya", unit: "2 kg", price: 999, emoji: "🥔", category: "zoldseg" },
  { id: 4, name: "Fejes saláta", unit: "1 db", price: 449, emoji: "🥬", category: "zoldseg" },
  { id: 5, name: "Félzsíros tej", unit: "1 l", price: 519, emoji: "🥛", category: "tejtermek" },
  { id: 6, name: "Natúr joghurt", unit: "500 g", price: 599, emoji: "🥣", category: "tejtermek" },
  { id: 7, name: "Trappista sajt", unit: "300 g", price: 1290, emoji: "🧀", category: "tejtermek" },
  { id: 8, name: "Vajas croissant", unit: "2 db", price: 690, emoji: "🥐", category: "pekaru" },
  { id: 9, name: "Rozskenyér", unit: "1 db", price: 899, emoji: "🍞", category: "pekaru" },
  { id: 10, name: "Csirkemell filé", unit: "500 g", price: 1590, emoji: "🍗", category: "husaru" },
  { id: 11, name: "Sertés karaj", unit: "600 g", price: 1890, emoji: "🥩", category: "husaru" },
  { id: 12, name: "Ásványvíz, szénsavas", unit: "1.5 l", price: 289, emoji: "💧", category: "innivalo" },
  { id: 13, name: "Narancslé, 100%", unit: "1 l", price: 899, emoji: "🧃", category: "innivalo" },
  { id: 14, name: "Mosogatószer", unit: "500 ml", price: 749, emoji: "🧴", category: "haztartas" },
  { id: 15, name: "Konyhai törlő, 2 tekercs", unit: "2 db", price: 599, emoji: "🧻", category: "haztartas" },
  { id: 16, name: "Alma, Jonagold", unit: "1 kg", price: 549, emoji: "🍎", category: "zoldseg" },
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

renderCategories();
renderProducts();
renderCart();
