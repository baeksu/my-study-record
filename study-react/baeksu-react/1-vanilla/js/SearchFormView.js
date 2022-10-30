
const tag = '[SearchFormView] ';

export default class SearchFormView{
  constructor(){
    console.log(tag, "SearchFormView constructor");

    this.element = document.querySelector('#search-form-view');
    this.resetElement = document.querySelector('[type=reset]',this.element);//두번째 인자로 스코프를 지정해줄 수 있다.
    this.inputElement = document.querySelector('[type=text]',this.element);
    
    this.showResetButton(false);
    this.bindEvents();
    
  }

  showResetButton(visible = true){
    this.resetElement.style.display = visible ? "block" : "none";// none 으로 설정하면 화면에서 아예 보이지 않는다. 
  }

  bindEvents(){
    //입력 이벤트 감지
    this.inputElement.addEventListener('keyup',()=>{
      const {value} = this.inputElement;
      this.showResetButton(value.length > 0);
    })

    //submit 이벤트 감지
    //form 에 submit 이벤트가 발생하는구나...
    //input태그에서 계속 listend 을 하고 있었더니 안되네
    //이게 dispatchEvent 를 하면 현재 this.element 에서 발행이 되는구나 -> addEventListener 도 해당 
    this.element.addEventListener('submit',(event)=>{
      event.preventDefault();//form 특성상 엔터를 누르면 서버쪽으로 다시 화면을 요청하고 갱신함, 그래서 막아둠
      const {value} = this.inputElement;
      const e = new CustomEvent('@submit',{value});
      this.element.dispatchEvent(e);
    })
  }
}
