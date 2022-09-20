console.log(this); // global? -> 이게 웹에서 실행할 때랑 좀 다르네 
//전역에서 this를 하면 이거는 빈 객체가 리턴됨

//전역에서는 얘임
//여기다가 exports 하면 함수객체들이 추가되는거임
console.log(this === module.exports);

function foo() {
  console.log(this === global);
}
foo()