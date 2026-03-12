const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function(e) {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("taskCheck");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark complete when checkbox clicked
    checkbox.addEventListener("change", () => {
        span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Add items to li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add li to list
    taskList.appendChild(li);

    taskInput.value = "";
}

