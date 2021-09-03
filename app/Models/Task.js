import { generateId } from "../Utils/generateId.js";

export class Task{
  constructor(taskData){
    this.taskId = generateId() || taskData.taskId
    this.taskInfo = taskData.taskInfo
  }


  get TaskTemplate(){
    return /*html*/ `
    <ul>
      <li>${this.taskInfo}
    </ul>
    `
  }

}