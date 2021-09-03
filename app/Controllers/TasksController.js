import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TasksService.js";



function _drawTasks(){
  let template = ''
  ProxyState.tasks.forEach(t => template += t.TaskTemplate)
  document.getElementById('taskRow').innerHTML=template
}

export class TasksController{
  constructor(){
    console.log('hello from taskscontroller');
    ProxyState.on('tasks', _drawTasks)
  }
  


  createTask(){
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    let form = event.target
    let taskData = {
      taskInfo: form.taskName.value
    }
    taskService.createTask(taskData)
    form.reset()
  }
}