const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 첫째 줄 N, 둘째 줄 K
const N = Number(input[0]);
const K = Number(input[1]);

solution(N, K);

function solution(N, K) {
  let left = 1;
  let right = K;
  let answer = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    for (let i = 1; i <= N; i++) {
      count += Math.min(Math.floor(mid / i), N);
    }

    // mid 보다 작은 숫자가 K개 이상 => mid가 너무 크거나 정답 후보
    if (count >= K) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(answer);
}
