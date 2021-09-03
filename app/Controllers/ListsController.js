import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"


function _drawLists(){
  let template = ''
  ProxyState.lists.forEach(l =>template += l.ListTemplate)
  document.getElementById('listsRow').innerHTML = template
}



export class ListsController{

  constructor(){
    console.log("hello form listsController")
    ProxyState.on('lists', _drawLists)
  }

  createList(){
    event.preventDefault()
     /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    let form = event.target
    let listData = {
      name: form.listName.value,
      color: form.listColor.value
    }
    listsService.createList(listData)
    form.reset()
  }

}