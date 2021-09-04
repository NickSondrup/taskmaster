import { ProxyState } from "../AppState.js";
import { Task } from "../Models/task.js";
import { saveState } from "../Utils/LocalStorage.js"


class TasksService{
  constructor(){
  console.log('hello from tasksService');
  ProxyState.on('tasks', saveState)
 } 

 createTask(taskData){
   ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
   console.log(ProxyState.tasks, 'tasks');
 }

 deleteTask(taskId){
   ProxyState.tasks = ProxyState.tasks.filter(t => t.taskId !== taskId)

 }

}


export const tasksService = new TasksService();