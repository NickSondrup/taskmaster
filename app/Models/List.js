import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"
export class List{
  constructor(listData){
    this.id = listData.id || generateId()
    this.name = listData.name 
    this.color = listData.color
  }

  get ListTemplate(){
    return /*html*/ `
    <div class="col-md-3 my-1">
    <div class="card bg-${this.color} border-3">
      <div class="card-header">
        <h6>${this.name}</h6>
        <i class="mdi mdi-close-thick selectable" onclick="app.listsController.deleteList('${this.id}')"></i>
      </div>
      <div class="card-body">
        <div class="container">
          <div id="taskRow" class="row">
            ${this.Tasks}
            
          </div>
        </div>
      </div>
      <div class="card-footer">
        <form onsubmit="app.tasksController.createTask('${this.id}')">
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


  get Tasks(){
    let template = ''
    let listsTasks = ProxyState.tasks.filter(t => t.listId === this.id)
    listsTasks.forEach(t => template += t.TaskTemplate)
    return template
  }

}