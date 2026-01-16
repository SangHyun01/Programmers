const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const K = Number(input[0]); // 정수의 개수
const numbers = input.slice(1).map(Number); // 이후 들어오는 숫자들 배열

function solution(K, numbers) {
  const stack = [];

  for (let i = 0; i < K; i++) {
    const current = numbers[i];

    if (current === 0) {
      stack.pop();
    } else {
      stack.push(current);
    }
  }

  let result = stack.reduce((cur, acc) => cur + acc, 0);

  return result;
}

console.log(solution(K, numbers));
