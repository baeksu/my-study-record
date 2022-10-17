//나중에 path 정의할때 자주 쓴다.
console.log(__filename);
console.log(__dirname);

//모듈 exports 주의사항
//난 그냥 이걸로 통일하자
//지금 주석처리 해놓은 이유가 밑에 this 예제에서 값이 담겨 있어서 일치하지 않는다.
// const aaa = 1;
// const bbb = 2;
// module.exports ={
//   aaa,
//   bbb
// }

//this
console.log(this);
console.log(module.exports);
console.log(this === module.exports); //this => module.exprots => {} : 빈객체를 의미한다.

//근데 이게 화살표 함수로 생성하면 this !== global 이네 
//화살표 함수에서는 this 가 부모스코프의 this를 물려받는다.
function a(){
  // console.log(this);
  console.log(this === global);//true
}

a();
