import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";




class ListsService{


  constructor(){
    console.log("hello from listsservice");
  }

  createList(listData){
    ProxyState.lists = [...ProxyState.lists, new List(listData)]

    console.log(ProxyState.lists, 'lists')
  }


}



export const listsService = new ListsService();