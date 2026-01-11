const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = input[0]; // 첫 번째 세 자리 수 (문자열)
const B = input[1]; // 두 번째 세 자리 수 (문자열)

function solution(A, B) {
  const numA = splitNum(A);
  const numB = splitNum(B);

  const result = Math.max(numA, numB);

  return result;
}

function splitNum(num) {
  let n = "";

  for (let i = 2; i >= 0; i--) {
    n += num[i];
  }

  return Number(n);
}

console.log(solution(A, B));
