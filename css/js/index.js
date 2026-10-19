const container = document.getElementById("dynamic-products");

data.products.forEach((product) => {
  const item = document.createElement("div");
  item.classList.add("product-card");
  item.innerHTML = `
    <div class="product-img" style="background-image:url('${product.thumbnail}')"></div>
    <h3 class="serif">${product.title}</h3>
    <p>${product.description}</p>
    <span class="price">${product.price} DKK</span>
  `;
  container.appendChild(item);
});
