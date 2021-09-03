import { ProxyState } from "../AppState.js";
import { Task } from "../Models/task.js";



class TasksService{
  constructor(){
  console.log('hello from tasksService');
 } 

 createTask(taskData){
   ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
   console.log(ProxyState.tasks, 'tasks');
 }

 

}


export const taskService = new TasksService();