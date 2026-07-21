import { Project } from "./Project.js";
import { Task } from "./Task.js";
import { ProjectManager } from "./ProjectManager.js";
import { renderProjects, renderTasks, showTaskDetails } from "./ui.js";

const projectManager = new ProjectManager();
projectManager.addProject(new Project("Default"));

const addProjectBtn = document.querySelector("#add-project-btn");
const addTaskBtn = document.querySelector("#add-task-btn");

const projectForm = document.querySelector("#project-form");
const projectName = document.querySelector("#project-name");

addProjectBtn.addEventListener("click", (event) => {
});

projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = projectName.value.trim();
    if (!name) {return}
    projectManager.addProject(new Project(name));
    projectForm.reset();
    projectForm.hidden = true;
    renderProjects(projectManager.getProjects());
});

addProjectBtn.addEventListener("click", (event) => {
    projectForm.hidden = false;
});