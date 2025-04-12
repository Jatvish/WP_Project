$(document).ready(function () {
    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartContainer = $("#cart-container");
        let total = 0;
        cartContainer.html("");

        if (cart.length === 0) {
            cartContainer.html("<p>Your cart is empty.</p>");
        } else {
            cart.forEach((item, index) => {
                let itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity;
                total += itemTotal;
                cartContainer.append(`
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.price} x ${item.quantity}</p>
                        <button class="remove-item" data-index="${index}">Remove</button>
                    </div>
                `);
            });
        }

        $("#cart-total").text(`Total: $${total.toFixed(2)}`);
        $("#cart-count").text(cart.length);
    }

    $(document).on("click", ".remove-item", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let index = $(this).data("index");
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    });

    $("#clear-cart").on("click", function () {
        localStorage.removeItem("cart");
        loadCart();
    });

    $("#checkout").on("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            $("#checkout-error").show();
        } else {
            localStorage.removeItem("cart");
            window.location.href = "/order-placed/";
        }
    });

    loadCart();
});
