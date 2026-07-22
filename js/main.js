import { Project } from "./Project.js";
import { Task } from "./Task.js";
import { ProjectManager } from "./ProjectManager.js";
import { renderProjects, renderTasks, showTaskDetails } from "./ui.js";

const projectManager = new ProjectManager();
const defaultProject = new Project("My Tasks")
projectManager.addProject(defaultProject);
projectManager.setSelected(defaultProject);
renderProjects(projectManager.getProjects(), handleDelete, handleSelect);

const addProjectBtn = document.querySelector("#add-project-btn");
const addTaskBtn = document.querySelector("#add-task-btn");

const projectForm = document.querySelector("#project-form");
const projectName = document.querySelector("#project-name");

const taskForm = document.querySelector("#task-form");
const taskName = document.querySelector("#task-name");
const taskDescription = document.querySelector("#task-description");
const taskDueDate = document.querySelector("#task-dueDate");
const taskPriority = document.querySelector("#task-priority");

const currentProject = document.querySelector("#current-project");

function handleDelete(project) {
    if (projectManager.getSelected() === project) {
        projectManager.setSelected(defaultProject);
        currentProject.textContent = projectManager.getSelected().getName();
    }
    projectManager.removeProject(project);
    renderProjects(projectManager.getProjects(), handleDelete, handleSelect);
}

function handleSelect(project) {
    projectManager.setSelected(project);
    currentProject.textContent = projectManager.getSelected().getName();

    renderTasks(project.getTasks(), handleTaskDelete);
}

function handleTaskDelete(task) {
    projectManager.getSelected().removeTask(task);
    renderTasks(projectManager.getSelected().getTasks(), handleTaskDelete);
}

projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = projectName.value.trim();
    if (!name) {return}
    projectManager.addProject(new Project(name));
    projectForm.reset();
    projectForm.hidden = true;
    renderProjects(projectManager.getProjects(), handleDelete, handleSelect);
});

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = taskName.value.trim();
    const description = taskDescription.value.trim();
    const dueDate = taskDueDate.value.trim();
    const priority = taskPriority.value.trim();

    if (!name || !description || !dueDate || !priority) {return}
    projectManager.getSelected().addTask(new Task(name, description, dueDate, priority));
    taskForm.reset();
    taskForm.hidden = true;
    renderTasks(projectManager.getSelected().getTasks(), handleTaskDelete);
});

addProjectBtn.addEventListener("click", (event) => {
    projectForm.hidden = false;
    projectName.focus();
});


addTaskBtn.addEventListener("click", (event) => {
    taskForm.hidden = false;
    taskName.focus();
});
