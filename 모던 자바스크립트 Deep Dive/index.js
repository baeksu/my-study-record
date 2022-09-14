var myobj = {
  'name':'백수',
  'age':30,
  city: '서울',
  // new-city:'울산', // -를 연산자로 인식해서 에러
  'new-city2':'부산' // 요럴때는 '' , "" 로 감싸줘야 한다.
}

console.log(myobj["new-city2"]);
console.log(myobj.city);
console.log(myobj.name);

