//Project class where todo-items go

class Project {
    #taskList = []

    constructor(name) {
        this.name = name;
    }

    addTask(task) {
        this.#taskList.push(task);
    }

    removeTask(index) {
        this.#taskList.splice(index, 1);
    }
}