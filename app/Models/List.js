export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.title = data.title
        this.task = data.task || []

    }

    getTemplate(index) {
        let template =
            `
                <div class="col-4">
                    <h1>${this.title}</h1>
                    <ul>`
        template += this.drawTasks(index)
        template += `
                <form onsubmit="app.controllers.listController.addTask(event, ${index})">
                    <div class="form-group">
                    <label for="task">task</label>
                    <input type="text" class="form-control" name="task" placeholder="task" required>
                    </div>
                    <button type="sumbit"> + </button>
                </form>
                    <h4>${this.task}</h4>
                    <button type="button" onclick="app.controllers.listController.deleteList(${index})"> X </button>
                </div>
            `
        return template
    }

    drawTasks(listIndex){
        let taskTemplate = ""
        this.task.forEach((t, taskIndex) => {
            taskTemplate+=`<li>${t}<span onclick="app.controllers.listController.deleteTask(${listIndex}, ${taskIndex})"> X </span></li>`
        })
        return taskTemplate
    }
}