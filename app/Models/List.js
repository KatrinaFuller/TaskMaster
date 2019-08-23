export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.title = data.title
        this.tasks = data.tasks || []

    }

    getTemplate(index) {
        let template =
            `
                <div class="col-sm-12 col-md-4 border">
                    <h1>${this.title}</h1>
                    <ul>`
        template += this.drawTasks(index)
        template += `   </ul>
                <form onsubmit="app.controllers.listController.addTask(event, ${index})">
                    <div class="form-group">
                   
                    <input type="text" class="form-control" name="task" placeholder="task / item" required>
                    </div>
                    <button type="sumbit" class="btn add-button"> Add </button>
                    <button type="button" class="btn delete-button" onclick="app.controllers.listController.deleteList(${index})"> Delete </button>
                </form>
                    
                <br>
                </div>
            `
        return template
    }
    drawTasks(listIndex) {
        let taskTemplate = ""
        this.tasks.forEach((t, taskIndex) => {
            taskTemplate += `<li>${t}<span onclick="app.controllers.listController.deleteTask(${listIndex}, ${taskIndex})" class="little-x"> X </span></li>`
        });
        return taskTemplate
    }
}