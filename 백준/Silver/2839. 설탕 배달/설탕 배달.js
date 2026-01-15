const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

function solution(N) {
  let count = 0;

  while (N >= 0) {
    if (N % 5 === 0) {
      count += N / 5;
      return count;
    }
    N -= 3;
    count++;
  }
  return -1;
}

console.log(solution(N));
