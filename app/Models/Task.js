import { generateId } from "../Utils/generateId.js";

export class Task{
  constructor(taskData){
    this.taskId = generateId() || taskData.taskId
    this.listId = taskData.listId
    this.taskInfo = taskData.taskInfo
  }


  get TaskTemplate(){
    return /*html*/ `
    <form class="d-flex justify-content-between">
    <div class="form-group">
      <input type="checkbox" id="${this.taskId}}" name="${this.taskId}">
      <label for="${this.taskId}">${this.taskInfo}</label>
      </div>
      <i class="mdi mdi-delete mdi-24px text-primary selectable" onclick="app.tasksController.deleteTask('${this.taskId}')"></i>
    </form>
    `
  }

}