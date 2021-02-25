//get UI element
let prod1Btn = document.querySelector("#product1Btn");
let prod2Btn = document.querySelector("#product2Btn");
let prod3Btn = document.querySelector("#product3Btn");
let prod4Btn = document.querySelector("#product4Btn");
let prodList = document.querySelector("#product-list");



// prod class

class PROD{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

//ui class

class UI{
    static addProd(prod){
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${prod.name}</td>
        <td>${prod.price}</td>
        <td>
        <a href="#" class="delete">X</a>
       </td>
        `;
        prodList.appendChild(row);
    }


    static deleteProd(target){
        if(target.hasAttribute("href")){
           target.parentElement.parentElement.remove();
            Store.removeProd(target.parentElement.previousElementSibling.previousElementSibling.textContent.trim());
        }
    }
    
}

//Local Storage Class

class Store{
    static getProd(){
        let products;
        if(localStorage.getItem("products") === null){
            products = [];
        }else{
            products = JSON.parse(localStorage.getItem("products"));
        }
        return products;
    }

    static addProd(product){
        let products = Store.getProd();
        products.push(product);

        localStorage.setItem("products", JSON.stringify(products));
    }
   static displayProd(){
    let products = Store.getProd();

    products.forEach(product =>{
        UI.addProd(product);
    });
   } 

  static removeProd(name){
    let products = Store.getProd();

    products.forEach((product, index)=>{
        if(product.name === name){
            products.splice(index,1);
        }
    });
    localStorage.setItem("products", JSON.stringify(products));
  } 
}

// Event Listener

prod1Btn.addEventListener('click', prod1);
prod2Btn.addEventListener('click', prod2);
prod3Btn.addEventListener('click', prod3);
prod4Btn.addEventListener('click', prod4);
prodList.addEventListener('click', removeProd);
document.addEventListener('DOMContentLoaded', Store.displayProd());


//Functions

function prod1(e){
    let name = document.querySelector("#prod1Name").textContent,
    price = document.querySelector("#prod1Price").textContent;

    let prod = new PROD(name,price);
    UI.addProd(prod);
    Store.addProd(prod);
    e.preventDefault();
}

function prod2(e){
    let name = document.querySelector("#prod2Name").textContent,
    price = document.querySelector("#prod2Price").textContent;

    let prod = new PROD(name,price);
    UI.addProd(prod);
    Store.addProd(prod);
    e.preventDefault()
}

function prod3(e){
    let name = document.querySelector("#prod3Name").textContent,
    price = document.querySelector("#prod3Price").textContent;

    let prod = new PROD(name,price);
    UI.addProd(prod);
    Store.addProd(prod);
    e.preventDefault()
}

function prod4(e){
    let name = document.querySelector("#prod4Name").textContent,
    price = document.querySelector("#prod4Price").textContent;

    let prod = new PROD(name,price);
    UI.addProd(prod);
    Store.addProd(prod);
    e.preventDefault()
}


function removeProd(e){
    UI.deleteProd(e.target);
    e.preventDefault();
}