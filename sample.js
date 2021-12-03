let input = require('fs').readFileSync('./dev/stdin', 'utf8').trim().split('\n');
const testCaseNum = +input[0];

for (let i = 1; i <= testCaseNum; i++) {
  input[i] = input[i].split(' ').map((v) => +v);
}
input.splice(0, 1);

for (let j = 0; j < input.length; j++) {
  console.log(input[j].reduce((a, c) => a + c, 0));
}
