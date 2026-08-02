# 🛒 ShopCentral - Responsive E-Commerce Web Application

ShopCentral is a modern, responsive e-commerce web application built using HTML5, CSS3, JavaScript, and jQuery. The project features a seamless multi-page shopping experience complete with product catalogs, dynamic cart management, interactive filtering, and order checkout flows.

---

## ✨ Features

- **Responsive Design:** Optimized for desktop, tablet, and mobile viewing with touch-friendly navigation and responsive product grids.
- **Dynamic Product Catalog:** View, filter, and search products across different categories in real-time.
- **Interactive Shopping Cart:** Full cart operations including adding items, removing items, calculating dynamic grand totals, and persistent local storage saving (`localStorage`).
- **Checkout & Order Flow:** Integrated shipping details submission form with automated random order ID generation and confirmation screen.
- **Form Validation:** Client-side validation on contact and checkout forms.
- **Smooth Navigation:** Sticky navbar with live cart item badges and dynamic scroll-to-top buttons.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Flexbox & CSS Grid)
- **Scripting & DOM Manipulation:** JavaScript (ES6+), jQuery (v3.6.0)
- **Icons:** FontAwesome v6.4.0
- **Fonts:** Segoe UI / System Sans-Serif

---

## 📁 Project Structure

```text
ecommerce-website/
├── index.html               # Home page with hero banner & featured items
├── products.html            # Main product catalog with filters
├── product-view.html        # Detailed single product details
├── category.html            # Category grid selection page
├── cart.html                # Interactive shopping cart page
├── checkout.html            # Shipping details & checkout form
├── order-confirmation.html  # Success confirmation page
├── search.html              # Live product search page
├── about.html               # Company overview page
├── contact.html             # Customer support form
├── style.css                # Global and responsive stylesheet
└── script.js                # Core JS logic & dynamic cart features