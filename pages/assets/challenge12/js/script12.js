

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Charger les tâches depuis localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Ajouter une tâche
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
});

// Rendu des tâches
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task-item fade-in"; // ✅ classe CSS personnalisée

        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) span.classList.add("completed");

        // Clic pour marquer comme fait
        span.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.className = "delete-btn"; // 🔹 classe CSS personnalisée

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });


        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Sauvegarde
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}