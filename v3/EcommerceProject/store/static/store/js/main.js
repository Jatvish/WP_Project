$(document).ready(function () {
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        $("#cart-count").text(cart.length);
    }

    $(".product button").on("click", function () {
        let product = $(this).closest(".product");
        let productName = product.find("h3").text();
        let productPrice = product.find("p").text();
        let productImage = product.find("img").attr("src");

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(productName + " added to cart!");
    });

    updateCartCount();
});
