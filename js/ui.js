//All DOM manipulation

const projectList = document.querySelector("#project-list");

function renderProject(project, onDelete) {
    const projectItem = document.createElement("li");
    projectItem.textContent = project.getName();
    projectList.appendChild(projectItem);

    if (project.name !== "My Tasks") {
        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.textContent = "X";
        projectItem.appendChild(deleteProjectBtn);

        deleteProjectBtn.addEventListener("click", (event) => {
            onDelete(project);
        });
    }
}

function renderProjects(projects, onDelete) {
    
    projectList.replaceChildren();

    for (const project of projects) {
        renderProject(project, onDelete)
        
    }
    
}

function renderTasks(project) {

}

function showTaskDetails(task) {

}

export { renderProjects, renderTasks, showTaskDetails }

