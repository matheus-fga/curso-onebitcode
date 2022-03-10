const process = require('process');

process.stdout.write("Qual o seu nome?\n");

process.stdin.on('data', (keyboard) => {
  process.stdout.write(`Seu nome é: ${keyboard}`);
  process.exit()
})