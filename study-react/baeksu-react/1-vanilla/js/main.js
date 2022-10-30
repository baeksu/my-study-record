import Controller from "./Controller.js";
import SearchFormView from "./SearchFormView.js";


const tag = '[main] ';
console.log(tag,"start point");

const views = {
  SearchFormView : new SearchFormView(),
}

const controller = new Controller(views);