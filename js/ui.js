//All DOM manipulation

const projectList = document.querySelector("#project-list");

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

function renderTasks(project) {

}

function showTaskDetails(task) {

}

export { renderProjects, renderTasks, showTaskDetails }

