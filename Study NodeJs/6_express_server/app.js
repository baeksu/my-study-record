const express = require('express');
const path = require('path');

const app = express();

app.set('port',3000);// 뭐 이렇게 해서 포트를 설정할 수 있는듯, listen 에서 값을 꺼내 쓸 수 있음

app.use((req,res,next)=>{
  console.log('모든 요청마다 실행하고 싶어요!!');
  next();// use에 있는 로직이 먼저 실행되고 그다음에 해당하는 api 메서드 부분으로 넘어간다.
})

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html')); // 요런식으로 경로를 라우팅 하는게 좋은가보넹
})


app.listen(app.get('port'),()=>{
  console.log("익스프레스 서버 실행중");
});
