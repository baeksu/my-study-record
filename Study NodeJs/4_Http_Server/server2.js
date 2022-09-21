const http = require('http');
const fs = require('fs').promises;

const reqCnt = 0;

const server = http.createServer(async(req,res) => {
  console.log(req.url);
  if(req.method === 'GET'){
    if(req.url === '/'){
      res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      const data = await fs.readFile('./server2.html');
      res.end(data);
    }
  }

  try {
    const data = await fs.readFile(`.${req.url}`);
    return res.end(data);
  } catch (error) {
    
  }
})
.listen(8080);

server.on('listening',()=>{
  console.log('8080번 포트에서 서버 대기 중입니다.'); 
});
server.on('error',(error) => {
  console.error(error);
})

