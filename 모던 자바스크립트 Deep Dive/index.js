var person = {
  name: 'Lee',
  address:{
    country : 'korea',
    city :'seoul'
  }
};

//재귀함수를 통한 구현
function copyObj(obj){
  const result = {};

  for(let key in obj){
    if(typeof obj[key] === 'object'){
      result[key] = copyObj(obj[key]);//재귀로 객체 복사
    } else{
      result[key] = obj[key];
    }
  }
  return result;
}

var copy = {...person};
var deepCopy = copyObj(person);

person.name = 'Kim';
person.address.city = 'Busan';//얕은복사라서 객체 내부의 객체는 같이 변동되네


console.log('원본= ' , person);
console.log('얕은복사= ' , copy);
console.log('깊은복사= ', deepCopy);
console.log(person.address === deepCopy.address);
