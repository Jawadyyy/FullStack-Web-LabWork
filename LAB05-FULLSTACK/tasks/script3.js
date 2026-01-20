let products = [];

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    loadCategories();
    show(products);
  });

const list = document.getElementById('list');
const search = document.getElementById('search');
const filter = document.getElementById('filter');

function loadCategories() {
  const categories = ["All", ...new Set(products.map(p => p.category))];
  categories.forEach(c => filter.innerHTML += `<option value="${c}">${c}</option>`);
}

function show(items) {
  list.innerHTML = items.map(p => `
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src="${p.image}" class="card-img-top">
        <div class="card-body">
          <h5>${p.name}</h5>
          <p>$${p.price}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function update() {
  const text = search.value.toLowerCase();
  const cat = filter.value;
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(text) &&
    (cat === "All" || p.category === cat)
  );
  show(filtered);
}

search.addEventListener('input', update);
filter.addEventListener('change', update);
