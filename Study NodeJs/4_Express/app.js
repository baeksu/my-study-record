const express = require('express');
const path = require('path');
const morgan = require('morgan');

/******************** import **********************/
const app = express();

app.use(morgan('dev'));
app.use((req, res,next)=>{
  console.log(`모든 요청에서 실행하고 싶을 때 'use'를 사용합니다`);
  // next();
})

app.set('port', process.env.PORT || 3000);
app.get('/', (req,res)=>{
  console.log(__dirname)
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(app.get('port'),()=>{
  console.log('express 서버 실행');
})

/**
 * 요청 url 이름에 따라 getMapping,postMapping 으로 분리를 하면
 * 공통적으로 적용해야 하는 로직들에 대해서 중복적인 코드작업을 해야하는데
 * 이를 위해서 '미들웨어' 를 사용한다.
 * 
 * next를 넣어줘야지 미들웨어 로직을 실행하고, 일치하는 라우터를 찾아간다. (또는 그다음 미들웨어)
 * 
 */