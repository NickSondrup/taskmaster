import { ProxyState } from "../AppState.js";
import { Task } from "../Models/task.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"


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
 setChecked(taskId){
  debugger
  let foundTask = ProxyState.tasks.find(t => t.taskId === taskId)
  if(foundTask.checked == 'unchecked'){
    foundTask.checked = 'checked'

    // @ts-ignore
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        // @ts-ignore
        toast.addEventListener('mouseenter', Swal.stopTimer)
        // @ts-ignore
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'This may help your survival!',
      background: 'black',
      titleColor: 'green',
      customClass: {
        title: 'text-success'
      }
    })
  }

  else{foundTask.checked = 'unchecked'}
  saveState()
  loadState()

  // @ts-ignore
 }

}


export const tasksService = new TasksService();