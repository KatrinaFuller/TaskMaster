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
                    <h1>title</h1>
                    <p>task</p>
                </div>
            `
    }
}