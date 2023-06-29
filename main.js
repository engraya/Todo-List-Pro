const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");


// Event Listener and Function

addTask.addEventListener("click", addItemFunction);

// Add item Function
function addItemFunction() {
    let task = document.createElement('div');
    task.classList.add("task");

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);


    if (inputTask.value === "") {
        alert("Input Cannot be Empty, Please Enter an Item Value!");
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

  

    //Check Function
    checkButton.addEventListener("click", checkFunction);
    function checkFunction() {
        checkButton.parentElement.style.textDecoration = "line-through";
    }

    // delete Function
    deleteButton.addEventListener("click", deleteFunction);

    function deleteFunction(e) {
        let target = e.target;

        target.parentElement.parentElement.remove();

    }



}

