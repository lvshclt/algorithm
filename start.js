let input = require('fs').readFileSync('./dev/stdin', 'utf8').trim().split('\n')[0];
let answer = 0;

answer += Math.floor(input / 5);
