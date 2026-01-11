const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const v = Number(input[2]);

function solution(N, arr, v) {
  let count = 0;

  for(const num of arr) {
    if(num === v) count++;
  }

  return count;

}

console.log(solution(N, arr, v));