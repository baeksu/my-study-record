/**
 * 노드의 전역 객체
 * require() 도 노드의 내장객체이다.
 * 외우려고 하지 말고 '이런게 있다~' 이런느낌으로 보자. 3장은 사전같은 느낌
 * 
 */

//글로벌
console.log(global)

//글로벌 속성에 값을 대입하면 다른 파일에서도 사용가능...
//하지만 이렇게 쓰는걸 권장하지는 않는다.

//console
console.trace();

//setTimeout(function,x초) x초 후에 func 실행
const tmp = setTimeout(()=>console.log('hello'),2000);
clearTimeout(tmp);//타이머 취소 기능

//setImmediate : 얘는 바로 실행, setTimeout(func,0) 이랑 같은 의미이지만
//실행순서에 있어서 차이가 좀 있다. 실행순서가 헤깔리니까 setTimeout 할바에 setImmediate 하는게 편하다.
//

