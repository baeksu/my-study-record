# 모던 자바스크립트 Deep Dive 공부 정리!!

---
## <span style='background-color:#dcff24'> 4장: 변수 </span>
변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다.
- javascript에서 변수는 1byte 단위로 메모리 셀에 저장
- 변수 선언은 var, let, const 로 할 수 있다


### 변수 호이스팅

얘는 이게 되네..? 대신에 값이 출력되는게 아니라 "undefined" 라고 출력이 된다. var 를 통해서 변수를 선언하고
초기화를 하지 않으면 기본적으로 "undefined" 으로 초기화가 된다.
```javascript
console.log(score);
var score = 10;
```
##### 그럼 이게 왜 되는걸까..?
> 그건 바로 **"자바스크립트 엔진"** 이 코드를 순차적으로 실행하기 이전에 **"소스코드의 평가 과정"** 이라는걸 
한다고 한다. 요걸 통해서 변수 선언 및 함수 선언문등의 모든 선언문을 소스코드에서 찾아내서 먼저 실행을 한다.
따라서 **변수 선언이 소스코드의 어디에 위치하든지와 상관없이 어디서든지 변수를 참조할 수 있다..!!** (이게 뭔가 전역 vs 지역 변수간에 문제가 되려나..?)

 갑자기 생각난건데 자동화 물류 설비 중에 <span style='background-color:#fff5b1'>OHT (Overhead Hoist Transport) 라는게 있는데, 물건을 집어 올려서 천장의 레일을 따라서 이동하는 설비이다.</span> **마치 변수가 소스코드 맨 위로 잡혀 올라가는것 처럼..!!**

### 값의 할당
변수 호이스팅을 통해서 "undefined" 로 공간을 할당해주고, 소스를 한줄씩 읽으면서 변수에 값을 할당한다.
근데 이때 "undefined" 로 이전에 할당된 공간에 값을 써주는게 아니라 새로운 메모리 공간을 잡아서 값을 할당하고 **score 변수는 새로운 메모리 공간을 가리킨다..!** 
> 이후에 var 에 새로운 값을 재할당할 때도 똑같이 새로운 메모리 공간을 잡고 변수가 해당 메모리를 가리킨다. java와 마찬가지로 ***가비지 컬렉터*** 가 주기적으로 사용되지 않는 메모리를 해제하는 작업을 해준다.

```javascript
console.log(score);

score=10;//값의 할당
var score;//변수 선언

console.log(score);
```
---
## <span style='background-color:#dcff24'> 5장: 표현식과 문 </span>

### 리터럴
리터럴은 값을 생성하기 위해 미리 약속한 표기법 
|리터럴|예시|
|---|---|
|정수 리터럴|100|
|문자열 리터럴|'hello world'|
|함수 리터럴| function(){}|
|객체 리터럴|{name:'lee',job:'baeksu'}|

### 표현식
표현식은 값으로 평가될 수 있는 문이다. 즉, 표현식이 평가되면 새로운 값을 생성하거나 기존값을 참조한다.

### 문
문(statement)은 프로그램을 구성하는 기본 단위이자 최소 실행 단위다. 
> 세미콜론 ';' 으로 '문'의 끝을 알려줄 수 있다. 자바스크립트 엔진이 자동으로 세미콜론을 생성해 주긴하지만, 세미콜론을 근데 난 넣는게 익숙하니까 넣어주자! (세미콜론을 가지고 논쟁이 있는듯ㅋㅋ)

### 표현식인 문과 표현식이 아닌 문
표현식은 값으로 평가할 수 있어야 한다고 했다. 따라서 아래처럼 변수 선언만 하고 값을 할당을 하지 않은 상태면 표현식이라고 할 수 없다!!
```javascript
//변수 선언문은 문이지만 표현식이 아니다..!
var x;

//변수 할당문 완전한 문 + 표현식이다.
x = 1+2;
```
> **var x=100;** 이건 표현식인가..? 58p 를 읽어보니 아닌거 같음. 해당 문을 크롬에서 실행해보면 undefined 가 출력되는데, 표현식은 값을 나타내야 한다고 했으니까 표현식은 아니라고 생각..! 얘는 보니까 완료문이라고 부르는거 같다. 어떻게 보면 **var x;** + **x=100;** 을 합쳐놓은거니까... 딱 표현식이라고 하기에는 애매한듯

---
## <span style='background-color:#dcff24'> 6장: 데이터 타입 </span>
### 숫자 타입
자바스크립트는 c 또는 java 와 다르게 따로 정수, 실수를 구분하지 않고 사용한다. **64비트 부동소수점** 형식을 가지고 있다. 그래서 정수를 나눴을 때 실수가 나온다. 그리고 0으로 나눠도 예외가 터지는게 아니라 **Infinity** 라는 값이 출력된다.

```javascript
console.log(4/2); //2
console.log(3/2); //1.5
console.log(3/0); //Infinity
```

### 문자열
문자열은 **'' , "", ``** 을 이용해서 작성할 수 있다. 백틱 **`** 을 이용하면 좀더 유연하게 문자열을 다룰수 있네..! 백틱을 쓰면 줄바꿈에도 유연하게 대응할 수 있고, 문자열을 재사용할 때도 유연하게 대응할 수 있는듯

```javascript
let lastname = 'lee';
let city = '서울';

let info = '안녕하세요, ' + lastname + city;
console.log(info);

let info2 = `안녕하세요, 
${lastname} + ${city}`;
console.log(info2);
```

> 자바스크립트에서 변수는 선언이 아닌 할당에 의해 타입이 결정된다. 따라서 재할당을 할때마다 typeof() 를 찍어보면 계속 바뀌는걸 확인할 수 있다. 요런걸 **동적 타이핑** 언어라고 한다.
## <span style='background-color:#dcff24'> 7장: 연산자 </span>

### 비교연산자
자바스크립트에서는 **1 == '1'** 이 성립한다. 그래서 타입까지 비교할때는 '===' 을 써줘야 한다. === 를 쓰는게 예상치 못한 에러가 발생할 확률이 줄어든다고 한다.

|비교 연산자|의미|사례|설명|
|---|---|---|---|
|==|동등비교|x==y|x와 y의 값이 같음|
|===|일치비교|x===y|x와 y의 값과 타입이 같음|
|!=|부동등비교|x!=y|x와 y의 값이 다름|
|!==|불일치비교|x!==y|x와 y의 값과 타입이 다름|

### 지수 연산자
Math.pow(2,2) 를 사용해도 되지만 2**2 요렇게 사용해도 된다.

---
## <span style='background-color:#dcff24'> 8장: 제어문</span>
### 타입 변환
- 명시적 형변환
아래와 같이 number 타입 x를 string 타입으로 개발자가 의도적으로 변경시키는걸 의미한다.
```javascript
const x = 10;
const str = x.toString();

console.log(typeof str, str);
console.log(typeof x, x);
```
- 암묵적 타입 변환 (타입 강제 변환)
아래와 같은 상황에서 자바스크립트 엔진에 의해서 암묵적으로 string 타입으로 변경시켜서 문자열을 연결시켜준다.
```javascript
const x = 10;
const str = 'hello'+x;
console.log(typeof str, str);
console.log(typeof x,x);
```
> 두 경우 모두 원본 x: number 타입이 변경되지는 않는다. 예시코드에는 const로 작성했는데 var로 선언해도 변경되지 않는다.

### 논리 연산자를 사용한 단축 평가
> 이런건 또 살다살다 처음보네...;; 어떻게 동작하는지는 알겠는데 뭔가 찝찝하네 118p 참고, 나중에 한번 다시 보자.

 && 연산자는 앞,뒤로 모두 true 가 오면 true 를 반환한다. 이때 첫번째 'dog' 의 경우 **Truthy** 값으로 true 로 평가된다. 그럼 여기서 두번째 'cat' 을 보면 된다. 근데 이때 && 연산자는 **논리 연산의 결과를 결정하는 두 번째 피연산자 'cat'** 을 반환한다고 한다.

```javascript
const flag1 = 'dog' && 'cat';
console.log(flag1);

const flag2 = true && 'cat';
console.log(flag2);

const flag3 = 1 && 'cat';
console.log(flag3);
```

마찬가지로 || 연산자에서는 한쪽만 true 면 true를 반환하니까 반대로 첫번째 인자에서 true 인 값이 오면 해당 피연산자를 반환한다. 

```javascript
function foo(res){
  //참고로 undefined는 null로 암묵적으로 변환된다.
  // 매개변수가 넘어오지 않는 경우 : undefined가 넘어온다.
  str = res || '';
  console.log(str.length);
}
foo();//0 출력
```

도대체 이런게 언제 쓰이는건지 몰르겠었는데, 책에 있는 예제를 보니까 어떤식으로 활용해야 할지 조금은 알겠다. if문을 주저리주저리 쓰지 않고 간결하게 코드를 작성할 수 있다는 장점이 있는거 같긴한데... **또한 초기화가 되지 않은 변수와 연산을 하려고 할때 유용하게 쓸수도 있을거 같다. (이게 주된 사용 용도 같은데..?)**

```javascript
var done = true;
var message = '';

//if(done) message = '완료';
message = done && '완료';
console.log(message);
// 출력: '완료'
//------------------------------
var done = false;
var message = '';

//if(done) message = '완료';
message = done && '완료';
console.log(message);
// 출력: false
```

### 옵셔널 체이닝 연산자
옵셔널 체이닝 연산자 **?.** 를 이용해서 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

> 옵셔널 체이닝 연산자가 나오기 이전에는 단축 평가를 통해서 에러로 프로그램이 죽는 경우를 막아줬다. 개인적으로 옵셔널 체이닝이 훨씬 간결하고 직관적인듯. 


### null 병합 연산자
좌항이 null 또는 undefined 인 경우 우항의 피연산자를 반환하고, 그렇지 않은 경우 좌항의 피연산자를 반환한다.

> 변수에 기본값을 설정할 때 유용하게 쓸 수 있다. null 병합 연산자가 나타나기 이전에는 얘도 마찬가지로 var foo = '' || 'default string'; 과 같은 단축평가를 이용해서 값을 저장했다. 하지만 이때는 '' 이 초기값으로 가능한 경우에는  예기치 못한 동작을 초래할 수 있었다. 

```javascript
var str = 'hello world';
str = null;
str = str ?? 'byebye world';
console.log(str);//str = null 이면 bye , 그렇지 않으면 hello

```
 ---
## <span style='background-color:#dcff24'> 10장: 객체 리터럴</span>

객체 내에 프로퍼티는 **key:value** 형태로 들어가게 되는데, key값을 '',"" 로 감싸줘도 되고, 그러지 않아도 된다. 다만 -를 통해서 문자를 이어주는 경우에는 꼭 감싸줘야 하고 해당 프로퍼티 값을 참조할 때는 myobj.["new-city"] 와 같이 사용해야 한다.

```javascript
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
```

> 프로퍼티 key 값을 중복으로 사용하면 나중에 선언한 프로퍼티가 기존꺼를 덮어쓴다. 이때 에러가 발생하지 않는걸 주의해야 한다.

### 프로퍼티 추가 및 삭제

```javascript
var person = {
  name:'Lee'
};

person.age = 20; // 그냥 요렇게 하면 프로퍼티가 추가된다.
delete person.age; // delete를 사용해서 삭제 가능!
```

### ES6에서 추가된 객체 리터럴의 확장 기능

#### 프로퍼티 축약 표현
프로퍼티 값으로 변수를 사용하는 경우 프로퍼티 key 값과 변수이름이 동일할 경우 프로퍼티 key 를 생략할 수 있다.

```javascript
let x=1, y=2;
const obj = {x,y};
console.log(obj); // {x:1,y:2}
```

#### 메서드 축약 표현

```javascript
const obj = {
  name:'Lee',

  //function 을 생략하고 () 를 땡겨오면 된다.
  sayHi(){
    console.log('Hi world');
  }
}
```


## <span style='background-color:#dcff24'> 장: </span>
## <span style='background-color:#dcff24'> 장: </span>


















































