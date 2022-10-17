// const value = require('./var');

//요런게 '구조분해 할당' 이라고 하는거 같은데. 새로나온 축약문법인듯
//얘는 대신에 이름을 맞춰줘야함
const {odd,even} = require('./var');

// console.log(var1);
// console.log(var2); 

const foo = (num)=>{
  if(num%2 === 0){
    console.log(even);
  }else{
    console.log(odd);
  }
}


module.exports = {
  foo,
}