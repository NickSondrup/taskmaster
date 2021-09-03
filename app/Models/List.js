import { generateId } from "../Utils/generateId.js"
export class List{
  constructor(listData){
    this.id = listData.id || generateId()
    this.name = listData.name 
    this.color = listData.color
  }

  get ListTemplate(){
    return /*html*/ `
    <div class="col-md-4">
    <div class="card">
      <div class="card-header">
        <h6>${this.name}</h6>
      </div>
      <div class="card-body">
        <div class="container">
          <div id="taskRow" class="row">

           
          </div>
        </div>
      </div>
      <div class="card-footer">
        <form onsubmit="app.tasksController.createTask()">
          <div class="form-group d-flex">
            <label for="taskName">Task:</label>
            <input type="text" class="form-control" name="taskName" required minlength="3" maxlength="20">
          </div>
        </form>
      </div>
    </div>
  </div>
    `
  }

}