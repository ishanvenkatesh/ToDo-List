//All DOM manipulation

const projectList = document.querySelector("#project-list");
const taskList = document.querySelector("#task-list");

function renderProject(project, onDelete, onSelect) {
    const projectItem = document.createElement("li");
    projectList.appendChild(projectItem);

    const projectSelect = document.createElement("button");
    projectSelect.textContent = project.getName();
    projectItem.appendChild(projectSelect);

    projectSelect.addEventListener("click", (event) => {
        onSelect(project);
    });

    if (project.name !== "My Tasks") {
        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.textContent = "X";
        projectItem.appendChild(deleteProjectBtn);

        deleteProjectBtn.addEventListener("click", (event) => {
            onDelete(project);
        });
    }
}

function renderProjects(projects, onDelete, onSelect) {
    
    projectList.replaceChildren();

    for (const project of projects) {
        renderProject(project, onDelete, onSelect)
        
    }
    
}

function renderTask(task, onDelete) {
    const taskItem = document.createElement("li");
    taskItem.textContent = task.getTitle();
    taskList.appendChild(taskItem);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    taskItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (event) => {
        onDelete(task);
    });

    const taskInfo = document.createElement("ul");
    taskItem.appendChild(taskInfo);

    const taskDescription = document.createElement("li");
    taskDescription.textContent = task.getDescription();
    taskInfo.appendChild(taskDescription);

    const taskDueDate = document.createElement("li");
    taskDueDate.textContent = task.getDueDate();
    taskInfo.appendChild(taskDueDate);

    const taskPriority = document.createElement("li");
    taskPriority.textContent = task.getPriority();
    taskInfo.appendChild(taskPriority);

    

    

}

function renderTasks(tasks, onDelete) {
    taskList.replaceChildren()

    for (const task of tasks) {
        renderTask(task, onDelete);
    }
}

function showTaskDetails(task) {

}

export { renderProjects, renderTasks, showTaskDetails }

