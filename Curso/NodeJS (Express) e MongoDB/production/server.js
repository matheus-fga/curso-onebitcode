const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);
  response.statusCode = 200;
  response.end('<h1>Hello Word!<h1/>');
});

server.listen(3000, () => {
  console.log('Servidor Ativo!');
})