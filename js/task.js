//Class for the todo item
class Task {
    #isComplete = false;

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getCompleteStatus() {
        return this.#isComplete;
    }

    markComplete() {
        #isComplete = true;
    }
}
