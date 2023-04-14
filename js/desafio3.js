
const form = document.getElementById("form");
form.addEventListener("submit", addNewTask, false);

const ordered = document.getElementById("ordered");
ordered.addEventListener("click", renderOrderedTask, false);

const dateNumber = document.getElementById("dateNumber");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const dateText = document.getElementById("dateText");

const taskContainer = document.getElementById("taskContainer");

function setDate(){
    const date = new Date();

    dateNumber.textContent = date.toLocaleString("es", {day: "numeric"});
    dateMonth.textContent = date.toLocaleString("es", {month: "short"});
    dateYear.textContent = date.toLocaleString("es", {year: "numeric"});
    dateText.textContent = date.toLocaleString("es", {weekday: "long"});
}

setDate();

function addNewTask(e){
    e.preventDefault();
    const {value} = e.target.taskText;
    
    if (!value){
        alert("Agrega una tarea");
        return;
    }

    const task = document.createElement("div");
    task.classList.add("task", "roundBordered");
    task.textContent = value;
    task.addEventListener("click", changeTaskState, false);
    taskContainer.prepend(task);
    e.target.reset();
}

function changeTaskState(e){
    e.target.classList.toggle("done");
}

function renderOrderedTask(){
    const lista = order();
    lista.forEach(element => taskContainer.appendChild(element));
}

function order(){
    const done = [];
    const toDo = [];

    taskContainer.childNodes.forEach(element => {
        element.classList.contains("done") ? done.push(element) : toDo.push(element);
    });

    return [...toDo, ...done];
}
   function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");

    // Check if checkbox is checked or not
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }
}