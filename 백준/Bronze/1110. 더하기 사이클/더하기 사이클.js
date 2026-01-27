const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

function solution(N) {
  let count = 0;
  let current = N; 

  while (true) {
    count++;
    let tens = Math.floor(current / 10);
    let ones = current % 10;

    let sum = tens + ones;
    current = (ones * 10) + (sum % 10);

    if (current === N) break;
  }

  console.log(count);
}

solution(input);