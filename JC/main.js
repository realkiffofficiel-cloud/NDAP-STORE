// API base URL
const API_BASE = 'http://localhost:5000/api';

// DOM elements
const productsContainer = document.querySelector('#products .grid');

// Load products from API
async function loadProducts() {
    try {
        const response = await fetch(`${API_BASE}/products`);
        const products = await response.json();

        if (productsContainer && products.length > 0) {
            productsContainer.innerHTML = products.map(product => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                        <p class="text-gray-600 mb-4">${product.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-blue-600">${product.price.toLocaleString()} CFA</span>
                            <button onclick="addToCart('${product._id}')" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback to static products if API fails - keep existing HTML content
        console.log('API not available, using static products from HTML');
    }
}

// Add product to cart
async function addToCart(productId) {
    try {
        // For now, we'll use localStorage for cart since we don't have user auth
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');

        // Check if product already in cart
        const existingItem = cart.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ productId, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Produit ajouté au panier!');
        updateCartCount();
    } catch (error) {
        console.error('Error adding to cart:', error);
        alert('Erreur lors de l\'ajout au panier');
    }
}

// Update cart count in header (you can add a cart icon later)
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    console.log(`Cart items: ${totalItems}`);
    // You can update a cart badge here if you add one to the header
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartCount();
});
