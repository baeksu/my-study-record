// const fs = require('fs');
const fs = require('fs').promises;


//원래는 콜백형식으로 지원을 했었는데, 사람들의 요청으로 프로미스로 사용할 수 있음
//.promises 를 안쓰면 콜백형식으로 사용해야 한다.
// fs.readFile('../README.md',(err, data)=>{
  
// })

fs.readFile('../../README.md')
  .then((data)=>{
    console.log(data);
    console.log(data.toString());
  })
  .catch((err)=>{
    throw err;
  })

fs.writeFile('./writeme.txt','글이 입력됩니다.')
  .then(()=>{
    return fs.readFile('./writeme.txt');
  })
  .then((data)=>{
    console.log(data.toString());
  })
  .catch((err)=>{
    throw err;
  })