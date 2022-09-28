function solve() {

    let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
    let output = document.querySelector('textarea');
    let result = [];
    let totalPrice = 0;
    let checkout = false;

    shoppingCart.addEventListener('click', function (evt) {

        if (evt.target.nodeName !== 'BUTTON') {
            return;
        }

        if (checkout) {
            return;
        }

        let btn = evt.target;

        if (Array.from(btn.classList).indexOf('add-product') >= 0) {

            let product = evt.target.parentElement.parentElement;

            let productName = product.getElementsByClassName('product-title')[0].textContent;
            let productPrice = Number(product.getElementsByClassName('product-line-price')[0]
                .textContent);

            output.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

            if (result.indexOf(productName) === -1) {
                result.push(productName);
            }

            totalPrice += productPrice;

        } else if (Array.from(btn.classList).indexOf('checkout') >= 0) {
            let products = result.join(', ');
            output.textContent += `You bought ${products} for ${totalPrice.toFixed(2)}.`
            checkout = true;
        }
    });
}