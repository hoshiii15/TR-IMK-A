const products = [
    { name: "Product 1", description: "Description for Product 1", price: 19.99, image: "product1.jpg" },
    // Add details for the other 9 products here
];

function renderProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2 class="product-title">${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <p class="product-price">Price: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

function addToCart(productName) {
    alert(`Product "${productName}" added to cart!`);
    // Additional functionality can be added here
}

// Call the function to initially render products
renderProducts();