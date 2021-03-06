// let form = document.querySelector('#task_form');
// let taskList = document.querySelector('ul');
// let clear_btn = document.querySelector("#clear_task_btn");
// let filter = document.querySelector("#task_filter");
// let taskInput = document.querySelector("#new_task");

// form.addEventListener('submit',addTask);
// taskList.addEventListener('click',removeTask);
// clear_btn.addEventListener('click',clearTask);
// filter.addEventListener('keyup',filterTask);
// document.addEventListener("DOMContentLoaded",getTasks);


// //add task
// function addTask(e){
//     if(taskInput.value === ''){
//         alert("Add a task!");
//     }
//     else
//     {
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(taskInput.value + " "));
//         let link = document.createElement('a');
//         link.setAttribute('href','#');
//         link.innerHTML =" x";
//         li.appendChild(link);
//         taskList.appendChild(li);

//         storeTaskInLocalStorage(taskInput.value);

//         taskInput.value="";

//     };

//     e.preventDefault();
// };

// //remove task

// function removeTask(e){
//     if(e.target.hasAttribute('href')){
//         if(confirm("Are You Sure?")){
//             let ele = e.target.parentElement;
//             ele.remove();
//             removeFromLS(ele);
//         };
//     };
// };

// //clear task


// function clearTask(e){
//     // taskList.innerHTML = "";
//     while(taskList.firstChild){
//         taskList.removeChild(taskList.firstChild);
//     }
//     localStorage.clear();
// }


// //filter task


// function filterTask(e){
//     let text = e.target.value.toLowerCase();
//     document.querySelectorAll('li').forEach(task=>{
//         let item = task.firstChild.textContent;
//         if(item.toLowerCase().indexOf(text)!=-1){
//             task.style.display = "block";
//         }
//         else{
//             task.style.display = 'none';
//         }
//     })
// }

// //task store in local storage

// function storeTaskInLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks')===null){
//         tasks = []; 
//     }else
//     {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task); 

//     localStorage.setItem('tasks',JSON.stringify(tasks));
// }

// //data from local storage

// function getTasks(e){
//     let tasks;
//     if(localStorage.getItem('tasks')===null){
//         tasks = []; 
//     }else
//     {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.forEach(task=>{
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(task + " "));
//         let link = document.createElement('a');
//         link.setAttribute('href','#');
//         link.innerHTML =" x";
//         li.appendChild(link);
//         taskList.appendChild(li);
//     })

// }

// //remove from local storage

// function removeFromLS(taskItem){
//     let tasks;
//     if(localStorage.getItem('tasks')===null){
//         tasks = []; 
//     }else
//     {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     let li = taskItem;
//     li.removeChild(li.lastChild);

//     tasks.forEach((task,index)=>{
//         if(li.textContent.trim()===task){
//             tasks.splice(index,1);
//         }
//     });

//     localStorage.setItem('tasks',JSON.stringify(tasks));
// };

let form = document.querySelector("#task_form");
let taskInput = document.querySelector('#new_task');
let taskList = document.querySelector("ul");
let filter = document.querySelector("#task_filter");
let clear = document.querySelector("#clear_task_btn");

form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);
clear.addEventListener('click',clearTask);
filter.addEventListener('keyup',filterTask);
document.addEventListener('DOMContentLoaded',getTasks);

//addtask
function addTask(e){
    if(taskInput.value === ""){
        alert("Add a task!");
    }
    else{

        let li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute("href","#");
        link.appendChild(document.createTextNode('x'));
        li.appendChild(link)
        taskList.appendChild(li);
        storeInLocalStorage(taskInput.value);
        taskInput.value = '';

    }
    e.preventDefault();
};

//removetask

function removeTask(e){
    if (e.target.hasAttribute("href")){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
            removeFromLocalStorage(ele);
        };
    };
};

//clearTask
function clearTask(e){
    // taskList.innerHTML = "";
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);

    };

    localStorage.clear();
};

//filter task

function filterTask(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task=>{
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display = "block";
        }
        else{
            task.style.display = "none";
        }
    })
}

//store in local storage

function storeInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks= []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//get data from local storage


function getTasks(e){
    let tasks;
    if (localStorage.getItem('tasks')===null){
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }


    tasks.forEach(task=>
        {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute("href","#");
        link.appendChild(document.createTextNode('x'));
        li.appendChild(link)
        taskList.appendChild(li);
        });
}
//remove from localstorage 

function removeFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = []; 
    }else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = taskItem;
    li.removeChild(li.lastChild);

    tasks.forEach((task,index)=>{
        if(li.textContent.trim()===task){
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
};
