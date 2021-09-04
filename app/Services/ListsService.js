import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js"



class ListsService{


  constructor(){
    console.log("hello from listsservice");
    ProxyState.on('lists', saveState)
  }

  createList(listData){
    ProxyState.lists = [...ProxyState.lists, new List(listData)]

    console.log(ProxyState.lists, 'lists')
  }

  deleteList(listId){
    ProxyState.lists = ProxyState.lists.filter(l => l.id !== listId)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.listId !== listId)
  }

}



export const listsService = new ListsService();