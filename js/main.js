import { Project } from "./Project.js";
import { Task } from "./Task.js";
import { ProjectManager } from "./ProjectManager.js";
import { renderProjects, renderTasks, showTaskDetails } from "./ui.js";

const projectManager = new ProjectManager();
projectManager.addProject(new Project("My Tasks"));
renderProjects(projectManager.getProjects());

const addProjectBtn = document.querySelector("#add-project-btn");
const addTaskBtn = document.querySelector("#add-task-btn");

const projectForm = document.querySelector("#project-form");
const projectName = document.querySelector("#project-name");

function handleDelete(project) {
    projectManager.removeProject(project);
    renderProjects(projectManager.getProjects(), handleDelete);
}

projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = projectName.value.trim();
    if (!name) {return}
    projectManager.addProject(new Project(name));
    projectForm.reset();
    projectForm.hidden = true;
    renderProjects(projectManager.getProjects(), handleDelete);
});

addProjectBtn.addEventListener("click", (event) => {
    projectForm.reset();
    projectForm.hidden = false;
    projectName.focus();
});

