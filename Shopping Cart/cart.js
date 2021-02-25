let cartItems = document.querySelector("#cartItems");


class Cart {
    constructor(name, price, category, id) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.id = id;
    }
}

class CartUI {
    static addToCart(Item) {
        let name = Item.firstChild.nextElementSibling.textContent;
        let price = Item.firstChild.nextElementSibling.nextElementSibling.textContent;
        let category = Item.lastChild.previousElementSibling.previousElementSibling.textContent;
        let id = Item.lastChild.previousElementSibling.textContent;
        let cart = new Cart(name, price, category, id);

        let number = cartItems.rows.length + 1;
        let row = document.createElement('tr');
        row.innerHTML = `<td >${number}</td>
        <td >${cart.name}</td>
        <td >${cart.price}</td>
        <td >${cart.category}</td>
        <td >${cart.id}</td>
        <td><button><a href="#" class="delete">X</a></button></td>`;
        cartItems.appendChild(row);
        StoreCart.addcartProductToLocal(cart);
    }

    static loadToCart(cart) {
        let number = cartItems.rows.length + 1;
        let row = document.createElement('tr');
        row.innerHTML = `<td >${number}</td>
        <td >${cart.name}</td>
        <td >${cart.price}</td>
        <td >${cart.category}</td>
        <td >${cart.id}</td>
        <td><button><a href="#" class="delete">X</a></button></td>`;
        cartItems.appendChild(row);
    }

    static removeFromCart(target) {
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.parentElement.remove();
            let id = (target.lastChild.parentElement.parentElement.parentElement.previousElementSibling.textContent);
            StoreCart.removeFromLocalCart(id)

        }
    }

}


class StoreCart {
    static getCart(e) {
        let cartProducts;
        if (localStorage.getItem('cartProducts') === null) {
            cartProducts = [];
        }
        else {
            cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
        }
        return cartProducts;
    }

    static addcartProductToLocal(cart) {
        let cartProducts = this.getCart();
        cartProducts.push(cart);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }

    static loadCartProducts(e) {
        let cartItems = this.getCart();
        cartItems.forEach(cart => {
            CartUI.loadToCart(cart);
        });
    };

    static removeFromLocalCart(id) {
        let cartProducts = this.getCart();
        cartProducts.forEach((cart, index)=>{
            if (cart.id === id) {
                cartProducts.splice(index, 1);
            }
        });

        localStorage.setItem("cartProducts",JSON.stringify(cartProducts));

    }

}

cartItems.addEventListener('click',removeFromCart);
document.addEventListener("DOMContentLoaded", StoreCart.loadCartProducts());

function removeFromCart(e) {
    CartUI.removeFromCart(e.target);
    e.preventDefault();
}