const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

const N = input[0];
const numbers = input.slice(1); 

function solution(N, numbers) {
 
  numbers.sort((a, b) => a - b);
  console.log(numbers.join("\n"));
}

solution(N, numbers);