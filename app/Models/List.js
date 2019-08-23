export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.title = data.title
        this.task = data.task
        this.date = data.date
        this.dueDate = data.dueDate
        this.priorityLevel = data.priorityLevel
    }
}