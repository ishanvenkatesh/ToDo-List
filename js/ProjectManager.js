class ProjectManager {
    #projectList = [];
    #currentProject = null;

    addProject(project) {
        this.#projectList.push(Project);
    }

    removeProject(project) {
        const index = this.#projectList.indexOf(project);
        if (index !== -1) {this.#projectList.splice(index, 1)}
    }

    getProjects() {
        return this.#projectList;
    }
}

export { ProjectManager };