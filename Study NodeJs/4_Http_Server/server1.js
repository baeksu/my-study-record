const http = require('http');

/**
 * -서버도 프로그램이기 때문에 프로세스와 함께 띄워진다.
 * 이때 포트하나당 하나의 프로세스와 연결이 된다.
 * 
 * -write 할때 문자열인지 html 인지 인식을 못하는 브라우저가 있다 - 사파리
 * 요런 애들을 위해서 writeHead 부분을 작성해주면 된다.
 */
http.createServer((req,res) =>{
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
  res.write('<h1>Hello Node!</h1>');
  res.write('<p>Hello server</p>');
  res.end('<p>Hello ZeroCho</p>'); 
})
.listen(8080,()=>{
  console.log('8080번 포에 서버 대기 중입니다.');
})