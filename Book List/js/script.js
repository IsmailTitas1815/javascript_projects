
let form = document.querySelector('#book-form');
let bookList = document.querySelector("#book-list");

class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    
    static addtoBookList(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="# class= "delete">X</a> </td>`;
        list.appendChild(row);
    }
    
    static clearFields(){
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
        
    }
    
    static showAlert(message, className){
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div,form);
        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 3000);
    };
    
    static deleteFromBook(target){
        if (target.hasAttribute('href')){
            target.parentElement.parentElement.remove();     
            Store.removeBooks(target.parentElement.previousElementSibling.textContent);
            UI.showAlert('Book Removed!','success');
            };
        };
    };

    

class Store {

    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null){
            books= [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    };

    static addBooks(book){
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    };
    

    static displayBooks(){
        let books = Store.getBooks();
        books.forEach(book=>{

            UI.addtoBookList(book);

        });
    };

    static removeBooks(isbn){
        let books = Store.getBooks();

        books.forEach((book,index)=>{
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });

        localStorage.setItem('books',JSON.stringify(books));

    }
}

    //add book
    
    form.addEventListener('submit',newbook);
    bookList.addEventListener('click',removeBook);
    document.addEventListener('DOMContentLoaded',Store.displayBooks());
    
    
    function newbook(e){
     let title = document.querySelector('#title').value;
     let author = document.querySelector('#author').value;
     let isbn = document.querySelector('#isbn').value;

     if(title==='' || author ==='' || isbn ===''){
        UI.showAlert("please fill all the feilds",'error');   
    }
     else{

         let book = new Book(title,author,isbn);
    
         UI.addtoBookList(book);
    
         UI.clearFields();

         UI.showAlert("Book Added!", "success")

         Store.addBooks(book);
     }

     e.preventDefault();
}


//removeBook 

function removeBook(e){

    UI.deleteFromBook(e.target);

    e.preventDefault();
}

