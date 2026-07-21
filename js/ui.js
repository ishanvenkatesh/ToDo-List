//All DOM manipulation

const projectList = document.querySelector("#project-list");

function renderProject(project) {
    const projectItem = document.createElement("li");
    projectItem.textContent = project.getName();
    projectList.appendChild(projectItem);

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "X";
    projectItem.appendChild(deleteProjectBtn);
}

function renderProjects(projects) {
    
    projectList.replaceChildren();

    for (const project of projects) {
        renderProject(project)
        
    }
    
}

function renderTasks(project) {

}

function showTaskDetails(task) {

}

export { renderProjects, renderTasks, showTaskDetails }

