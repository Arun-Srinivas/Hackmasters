document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".categories button");
    const products = document.querySelectorAll(".product");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.textContent.trim().toLowerCase().replace(" ", "-");

            products.forEach(product => {
                if (category === "all" || product.classList.contains(category)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});

function searchProducts() {
    const searchText = document.getElementById("searchBox").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
