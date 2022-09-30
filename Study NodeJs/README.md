# NodeJs 공부하기 

 회사에서 시뮬레이션 분석 업무로 직무변경을 하면서 자바스프링을 더이상 쓸일이 없어졌다. 평소에 관심이 있었던 노드를 공부해보자!! 인프런에서 조현영님의 [NodeJs 강의](https://www.inflearn.com/course/%EB%85%B8%EB%93%9C-%EA%B5%90%EA%B3%BC%EC%84%9C/dashboard) 를 보고 정리를 해볼까?

> 요즘 자바스크립트만 잘해도 이것저것 할 수 있는게 많은것 같다. 서버도 띄우고... 프론트도 하고... Three.js 로 3D 그래픽도 할 수 있고... 이제는 재밌는걸 찾아서 공부해야지


## 노드란?
Node.js 는 크롬 v8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임이다. 자바스크립트는 원래 웹 브라우저에서 돌아가는 언어였다. 근데 노드가 나오면서 터미널에서 자바스크립트 파일을 실행할 수 있다. 
> 브라우저에 더이상 종속적이지 않게 되었다..!

### 노드의 특징1: 이벤트 기반
Event가 발생할 때 미리 지정해둔 작업을 수행하는 방식. 
1. 사용자의 마우스 클릭 이벤트 발생 (팝업창에 x버튼 클릭)
2. 이벤트 리스너가 이벤트 Catch  (일치하는 이벤트 찾기)
3. 등록된 콜백 함수 호출 (팝업창을 닫는다)

### 노드의 특징2: 논블로킹 I/O
처리 시간이 오래걸리는 함수를 백그라운드로 보내서 다음 코드를 실행되게 하고, 이후에 오래 걸리는 함수를 실행. 논블로킹 특별한 규칙(실행 컨텍스트 & 이벤트 루프) 에 의해서 실행되는데 요건 이후 강의에서 배워서 정리해야지..!
> 참고로 동기면서 블로킹, 비동기면서 논블로킹 요런 구조를 대부분 가진다. 

### 노드의 특징3: 프로세스 vs 스레드

- 프로세스 : 운영체제에서 할당하는 작업의 단위, 프로세스 간 자원 공유X
EX) 크롬, 디아블로2, ...
- 스레드 : 프로세스 내에서 실행되는 작업의 단위, 부모 프로세스 자원 공유

> 노드하면 떠오르는게 **싱글 스레드** 인데 이게 실제로 스레드가 하나가 동작하는게 아니라 **개발자가 접근가능한 스레드** 가 하나라는 의미다. 실제로는 멀티 스레드가 동작하고 있다..!! **노드14 버전부터는 멀티 스레드를 제어할 수 있다고 한다.**

## 노드 기능

### exports 

함수를 모듈로 분리할때 다음과 같이 사용하자

```javascript
function doLogin(){}
function doSave(){}

module.exports = {
  doLogin,
  doSave
}
```

### this
브라우저에서 실행할 때와 다른점이, 전역에서 this를 실행할 때다. 전역에서 this를 출력해보면 빈객체 {} 가 나온다. 요거는 module.exprots 와 같은데, exports 할때 객체를 추가해주는게 이런 이유였다.

함수 안에서 실행을 하면 이제 global 이 나온다. 브라우저에서는 windw 였던 녀석이다.

```js
console.log(this); 

console.log(this === module.exports);

function foo() {
  console.log(this === global);
}
foo()
```

## http 서버

get 요청과 라우터 설정을 다음과 같이 할수 이다. 이때 html 파일 뿐만 아니라 css 파일도 url 로 get 요청을 하는거다. 그래서 내부에 있는 try 에 css 파일은 걸려서 return 을 해준다.

> try 코드가 없으면 css가 안먹히는걸 확인할 수 있다. 그리고 웹 브라우저에서 홈 화면으로 들어가면 나는 클릭을 한번했지만  브라우저는 **/ , /style.css , /favicon.ico** 세번의 req를 날리는걸 확인
> > 추가적으로 http2 에서는 css,js... 등의 자원들을 묶음으로 요청할 수 있나보다. 원래는 하나 요청, 응답, 요청, 응답... 요런식이었는데, -> http2 가 속도,보안 측면에서 좋다.

```js
http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      if (req.url === '/') {
        const data = await fs.readFile('./restFront.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/about') {
        const data = await fs.readFile('./about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(users));
      }
      // /도 /about도 /users도 아니면
      try {
        const data = await fs.readFile(`.${req.url}`);
        return res.end(data);
      } catch (err) {
        // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
      }
    }
```

## 클러스터
포트를 공유하는 노드 Process 를 여러개 둘 수 있다. 요청을 고르게 분산시킬 수 있다. 
> 단점으로는 로그인을 한번 한 이후에 새로고침을 할때, 다른 프로세스에 요청을 해버리면 로그인이 풀릴 수 있다. 요런건 Redis를 통해서 해결할 수 있다고 한다.

## 패키지 매니저

자신이 사용할 프로젝트 폴더에 들어가서 하기 명령어 실행
> npm init

다음과 같이 사용할 패키지를 설치할 수 있다. -D 를 붙히면 개발할때만 쓰이는 패키지들이 분리되어서 설치된다. 
> npm i "설치할 패키지"
npm i -D "설치할 패키지"

> npm i 하고나서 생기는 node_modules 폴더는 git ignore 하고나서 올리고 나중에 배포할때는 다시 내려받은 후에 run 하면 그때 다시 생기도록 하는듯



## Express 를 이용한 서버
- nodemon 으로 js 파일을 실행하는게 좀더 활용할 수 있는듯. js 파일에 대한 변경감지를 해서 알아서 재시작을 해주는 기능도 있네

### 미들웨어 활용하기
모든 api 메서드에서 공통적으로 사용하는 로직이 있다고 할때, use() 메서드를 이용하면 코드를 간결하게 할 수 있다. 세번째 인자의 next() 를 통해서 해당 라우터에 해당하는 api를 호출한다.

```js
//use에 있는 로직이 먼저 실행되고 그다음에 해당하는 api 메서드 부분으로 넘어간다.
app.use((req,res,next)=>{
  console.log('모든 요청마다 실행하고 싶어요!!');
  next();
})

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html')); 
})
```

- error를 처레해주는 미들웨어가 있다. 얘는 매개변수를 반드시 4개를 모두 다 써줘야 한다.
사용자에게 보여줄 메세지 같은걸 생성해줄 수 있다. 상세 로그는 서버쪽에 남는다.
매개변수가 없는 next() 를 하면 다음 미들웨어로 넘어간다. 이떄 error를 넘겨주면 에러 처리 미들웨어로 넘겨준다.
```js
try{

}catch(error){
  next(error);
}

app.use((err,req,res,next) =>{
  console.error(err);
})
```

- morgan 을 사용하면 요청/응답을 기록해서 어떤 라우터에서 에러가 났는지 확인할 수도 있다.
- combined 를 사용하면 요청자에 대한 정보(ip, browser...)까지도 확인할 수 있다.



## 템플릿 엔진
