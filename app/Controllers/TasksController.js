import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";



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
      listId: listId
    }
    tasksService.createTask(taskData)
    form.reset()
  }

  deleteTask(taskId){
    tasksService.deleteTask(taskId)

  }

}