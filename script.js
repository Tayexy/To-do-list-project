const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
    if (inputBox.value === '') {
        alert("You need to write a new task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        span.onclick = function () {
            li.remove();
            saveData();
        };

        li.appendChild(span);
        listContainer.appendChild(li);

        inputBox.value = "";
        saveData();
    }
}

// Save the current tasks to localStorage
function saveData() {
    localStorage.setItem("taskData", listContainer.innerHTML);
}

// Load tasks from localStorage and reattach event listeners
function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("taskData") || "";
    Array.from(listContainer.querySelectorAll("li span")).forEach(span => {
        span.onclick = function () {
            span.parentElement.remove();
            saveData();
        };
    });
}

// Toggle checked class on list items
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

// Load tasks when the page loads
window.onload = loadTasks;



    

    

    