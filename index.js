function addTask(){

let taskInput = document.querySelector("#taskInput").value;

if (taskInput.length === 0){
    alert("Please Enter Some Value.")
    return;
}
    
let todoItems = document.querySelector("#todo-items");

let newTask = document.createElement("li");
newTask.className="todo-item";
todoItems.appendChild(newTask);

let taskText = document.createTextNode(taskInput);
newTask.appendChild(taskText);

let delButton = document.createElement("button");
delButton.innerText="Delete";
newTask.appendChild(delButton);

delButton.onclick= () =>{
    newTask.remove();
};


}