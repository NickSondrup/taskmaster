import { generateId } from "../Utils/generateId.js";

export class Task{
  constructor(taskData){
    this.taskId = generateId() || taskData.taskId
    this.listId = taskData.listId
    this.taskInfo = taskData.taskInfo
    this.checked = taskData.checked || 'unchecked'
    this.listColor = taskData.listColor
  }


  get TaskTemplate(){
    return /*html*/ `
    <form class="d-flex justify-content-between">
    <div class="form-group d-flex align-items-center">
      <input class="me-2 check-${this.listColor}" type="checkbox" id="${this.taskId}}" name="${this.taskId}" onclick="app.tasksController.setChecked('${this.taskId}')" ${this.checked}>
      <label for="${this.taskId}" class="${this.checked}">${this.taskInfo}</label>
    </div>
      <i class="mdi mdi-delete mdi-24px bg-${this.listColor} bg-black selectable" onclick="app.tasksController.deleteTask('${this.taskId}')"></i>
    </form>
    `
  }

}