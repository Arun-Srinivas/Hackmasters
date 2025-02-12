

document.addEventListener("DOMContentLoaded", function() {
    // Get product from URL
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    // Product details data
    const products = {
        avocado: {
            name: "Organic Avocado",
            img: "assets/avocado.png",
            price: "₹200 (20% Off)",
            desc: "Rich in nutrients, organic avocados are a delicious and healthy choice."
        },
        spinach: {
            name: "Organic Spinach",
            img: "assets/spinach.png",
            price: "₹150 (20% Off)",
            desc: "Fresh organic spinach packed with vitamins and minerals for a healthy diet."
        },
        quinoa: {
            name: "Organic Quinoa",
            img: "assets/quinoa.png",
            price: "₹350 (20% Off)",
            desc: "High-protein organic quinoa, perfect for a nutritious meal."
        },
        eggs: {
            name: "Organic Eggs",
            img: "assets/eggs.png",
            price: "₹300 (20% Off)",
            desc: "Farm-fresh organic eggs, rich in protein and essential nutrients."
        }
    };

    // Load product details
    if (products[product]) {
        document.getElementById("product-name").textContent = products[product].name;
        document.getElementById("product-img").src = products[product].img;
        document.getElementById("product-price").textContent = products[product].price;
        document.getElementById("product-desc").textContent = products[product].desc;
    } else {
        document.querySelector(".product-details").innerHTML = "<h2>Product not found</h2>";
    }
});
