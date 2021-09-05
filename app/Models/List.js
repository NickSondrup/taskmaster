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
  <div class="col-sm-12 col-md-6 col-lg-3 my-1 fs-5">
    <div class="card bg-${this.color} bg-black border-3">
      <div class="card-header d-flex justify-content-between">
        <h4>${this.name}, ${this.TasksCount}</h4>
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
        <form class="d-flex justify-content-around" onsubmit="app.tasksController.createTask('${this.id}' , '${this.color}')">
          <div class="form-group d-flex">
            <label for="taskName" class="visually-hidden">Task:</label>
            <input type="text" class="form-control px-3 bg-${this.color}" name="taskName" placeholder="Input tasks" required minlength="3" maxlength="50">
          </div>
          <div class="button-group">
            <button type="submit" class="btn bg-${this.color} text-black fs-4 p-0">Submit</button>
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

  get TasksCount(){
    let totalCount = 0
    let checkedCount = 0
   let foundTasks = ProxyState.tasks.filter(t => t.listId == this.id)
   let checkedTasks = foundTasks.filter(f => f.checked === 'checked')
    checkedCount = checkedTasks.length
   totalCount = foundTasks.length 
   return (checkedCount + '/' + totalCount)
  }
}