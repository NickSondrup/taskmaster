import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { ListsController } from "./ListsController.js";



// function _drawTasks(){
//   let template = ''
//   ProxyState.tasks.forEach(t => template += t.TaskTemplate)
//   document.getElementById('taskRow').innerHTML=template
// }

export class TasksController{
  constructor(){
    console.log('hello from taskscontroller');
  }
  createTask(listId){
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    let form = event.target
    let taskData = {
      taskInfo: form.taskName.value,
      listId: listId,
      
    }
    tasksService.createTask(taskData)
    form.reset()
  }

  deleteTask(taskId){
    let result = window.confirm('Do you want to delete this?')
    if(result == true){
      tasksService.deleteTask(taskId)
    }

  }
  
  setChecked(taskId){
    tasksService.setChecked(taskId)
  }
}