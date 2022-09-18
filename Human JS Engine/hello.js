/**
 * this 는 함수 호출할 때를 알고 있어야지 어떤걸 가리키는지 알 수 있다.******* 이게 중요 호출할때를 모르면 this가 어떤게 찍히는지 특정할 수 없다.
 * obj.sayName() -> 요거는 obj. 으로 시작한다. 이렇게 되면 obj 를 가리키게 된다.
 *  -> 1. 근데 만약에 sayName() 이 화살표 함수면 이때는 window 를 가리키게 된다.
 *  -> 2. 만약 sayName() 안에 또다른 함수 선언이 있고 거기에서 this접근을 하고, 호출을 한다면?
 *        여기서는 전역을 가리킨다. 왜냐면 obj. 으로 접근을 하는게 아니라 바로 함수를 호출을 하기 때문에 -제로초 6강 15 min 참고
 * 
 * new 로 생성할때도 this를 가리킨다.
 * 화살표 함수는 부모함수의 this를 가져온다. 
 */

const p = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    a = 5;
    console.log(a);
    resolve(a);
  },0)
});


p.then((result)=>{
  console.log('result',result);
})
console.log('딴짓');
