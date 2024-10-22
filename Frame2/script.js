// Example: Add to Cart Functionality
const products = [
  {
    name: "Product 1",
    price: 100,
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    name: "Product 2",
    price: 200,
    image: "https://picsum.photos/id/101/200/300",
  },
  {
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/id/102/200/300",
  },
  {
    name: "Product 4",
    price: 400,
    image: "https://picsum.photos/id/103/200/300",
  },
  {
    name: "Product 5",
    price: 500,
    image: "https://picsum.photos/id/104/200/300",
  },
];
document.querySelectorAll(".buy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

const productsGrid = document.querySelector(".products-grid");

for (const product of products) {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");
  productsGrid.appendChild(productItem);

  const image = document.createElement("div");
  image.classList.add("image");
  productItem.appendChild(image);

  const info = document.createElement("div");
  info.classList.add("item-info");
  productItem.appendChild(info);

  const name = document.createElement("span");
  name.classList.add("item-name");
  name.textContent = product.name;
  info.appendChild(name);

  const price = document.createElement("span");
  price.classList.add("item-price");
  price.textContent = `UAH ${product.price}`;
  info.appendChild(price);

  const buyBtn = document.createElement("button");
  buyBtn.classList.add("buy-btn");
  buyBtn.textContent = "Buy";
  buyBtn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
  productItem.appendChild(buyBtn);
}
