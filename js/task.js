//Class for the todo item
class Task {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }

    getCompleteStatus() {
        return this.isComplete;
    }

    toggleComplete() {
        if (this.isComplete) {this.isComplete=false}
        else {this.isComplete=true}
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }
}

export { Task };