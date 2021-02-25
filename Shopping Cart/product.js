let form = document.querySelector('.form');
let products = document.querySelector("#productList");


class Product {
    constructor(name, price, category,id) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.id = id;
    }
};

class ProductsUI {
    static add(product) {
        let productList = document.querySelector("#productList");
        let number = productList.rows.length + 1;
        let row = document.createElement('tr');
        row.innerHTML= `<td >${number}</td>
        <td >${product.name}</td>
        <td >${product.price}</td>
        <td >${product.category}</td>
        <td >${product.id}</td>
        <td><button><a href="#" class="addToCart">Add to cart</a></button></td>
        <td><button><a href="#" class="delete">X</a></button></td>`
        productList.appendChild(row);

    }


    static clearFeilds() {
        document.querySelector('#name').value = '';
        document.querySelector('#price').value = '';
        document.querySelector('#category').value = '';
        document.querySelector('#id').value = '';
    }

    static showAlert(message,alert){
        let div = document.createElement('div');
        div.className = `alert ${alert}`;
        div.appendChild(document.createTextNode(message));
        let main = document.querySelector("#main");
        let form = document.querySelector(".form");
        main.insertBefore(div,form);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    };

    static addToCartOrRemoveFromUI(target){
        if(target.hasAttribute('href')){
            if(target.className ==="addToCart"){
                let pass = target.parentElement.parentElement.parentElement;
                let item = pass.cloneNode(true);
                item.lastChild.previousElementSibling.remove();
                CartUI.addToCart(item);
            }
            else
            {
                target.parentElement.parentElement.parentElement.remove();
                
                Store.removeProductFromLocal(target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent);
            }
            
        }
    }
}

class Store{

    static getProducts(e){
        let products;
        if (localStorage.getItem('products')===null){
            products = [];
        }
        else
        {
            products = JSON.parse(localStorage.getItem('products'));
        }

        return products;
    }

    static addToLocal(product){
        console.log(product);
        let products = this.getProducts();
        products.push(product);
        localStorage.setItem('products',JSON.stringify(products));
    };

    static loadProducts(e){
        let products =  this.getProducts();
        products.forEach(product=>{
            ProductsUI.add(product);
        });
    };

    static removeProductFromLocal(id){
        let products = this.getProducts();
        products.forEach((product,index)=>{
            if (product.id === id){
                products.splice(index,1);
            }
        })

        localStorage.setItem('products',JSON.stringify(products));
    }

}



form.addEventListener('submit', addProduct);
products.addEventListener('click',removeProduct);
document.addEventListener("DOMContentLoaded",Store.loadProducts());

function addProduct(e) {
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;
    let category = document.querySelector('#category').value;
    let id = document.querySelector('#id').value;

    if (name === '' || price === '' || category === '' || id==='') {
        alert("something wrong");
    }
    else {
        let product = new Product(name, price, category,id);
        ProductsUI.add(product);
        ProductsUI.clearFeilds();
        ProductsUI.showAlert("Added Successfully",'success');
        Store.addToLocal(product);

    }
    e.preventDefault();
};

function removeProduct(e) {
    ProductsUI.addToCartOrRemoveFromUI(e.target);
    
    e.preventDefault();
}

