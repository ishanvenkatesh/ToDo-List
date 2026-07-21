//Project class where todo-items go

class Project {
    #taskList = [];

    constructor(name) {
        this.name = name;
    }

    addTask(task) {
        this.#taskList.push(task);
    }

    removeTask(task) {
        const index = this.#taskList.indexOf(task);

        if (index !== -1) {this.#taskList.splice(index, 1)}
        
    }

    getTasks() {
        return this.#taskList;
    }
}

export { Project };