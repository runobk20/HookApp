export class TodoHelper {
    constructor(description) {
        this.description = description;
    }

    create() {
        return {
            id: Math.random() + 1,
            description: this.description,
            done: false
        }
    }
}