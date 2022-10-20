const express = require('express');
const path = require('path');

/******************** import **********************/
const app = express();

app.get('/', (req,res)=>{
  console.log(__dirname);
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(3000,()=>{
  console.log('express 서버 실행');
})

