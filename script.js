const productsData = [
    { id: 1, title: "Wireless Headphones", category: "electronics", price: 199, rating: 4.8, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 2, title: "Smart Watch", category: "electronics", price: 129, rating: 4.5, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 3, title: "Leather Jacket", category: "fashion", price: 149, rating: 4.7, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
    { id: 4, title: "Running Shoes", category: "sports", price: 89, rating: 4.6, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    $('#cart-count').text(totalItems);
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    alert(`${product.title} added to cart!`);
    if ($('#cart-items').length) renderCart();
}

function renderProducts(list, elementId) {
    if (!$(elementId).length) return;
    let html = '';
    list.forEach(prod => {
        html += `
            <div class="product-card">
                <a href="product-view.html?id=${prod.id}">
                    <img src="${prod.image}" alt="${prod.title}">
                </a>
                <h3><a href="product-view.html?id=${prod.id}">${prod.title}</a></h3>
                <div class="price">$${prod.price}</div>
                <button class="btn primary-btn" onclick="addToCart(${prod.id})">Add to Cart</button>
            </div>
        `;
    });
    $(elementId).html(html);
}

function filterCategory(category) {
    if (category === 'all') {
        renderProducts(productsData, '#all-products');
    } else {
        const filtered = productsData.filter(p => p.category === category);
        renderProducts(filtered, '#all-products');
    }
}

function filterPrice(maxPrice) {
    $('#price-val').text(maxPrice);
    const filtered = productsData.filter(p => p.price <= maxPrice);
    renderProducts(filtered, '#all-products');
}

// Render Cart Table
function renderCart() {
    if (!$('#cart-items').length) return;
    let html = '';
    let grandTotal = 0;

    if (cart.length === 0) {
        $('#cart-items').html('<tr><td colspan="5" style="text-align:center;">Your cart is empty!</td></tr>');
        $('#grand-total').text('0.00');
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;
        html += `
            <tr>
                <td>${item.title}</td>
                <td>$${item.price}</td>
                <td>${item.quantity}</td>
                <td>$${itemTotal}</td>
                <td><button onclick="removeFromCart(${index})" style="background:#e74c3c; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Remove</button></td>
            </tr>
        `;
    });

    $('#cart-items').html(html);
    $('#grand-total').text(grandTotal.toFixed(2));
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    renderCart();
}

// Real-time Search Handler
$('#search-input').on('keyup', function() {
    const query = $(this).val().toLowerCase();
    const filtered = productsData.filter(p => p.title.toLowerCase().includes(query));
    renderProducts(filtered, '#search-results');
});

// Checkout Form Submission
$('#checkout-form').on('submit', function(e) {
    e.preventDefault();
    localStorage.removeItem('cart');
    window.location.href = 'order-confirmation.html';
});

$(document).ready(function() {
    updateCartBadge();
    renderProducts(productsData, '#latest-products');
    renderProducts(productsData, '#all-products');
    renderProducts(productsData, '#search-results');
    renderCart();

    // Generate Random Order ID
    if ($('#order-id').length) {
        $('#order-id').text(Math.floor(100000 + Math.random() * 900000));
    }
});