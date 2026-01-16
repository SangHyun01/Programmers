const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. 계단의 개수 N
const N = Number(input[0]);

// 2. 계단 점수 배열 (1번 계단부터 쓰기 위해 맨 앞에 0을 넣어줍니다)
const score = [0];
for (let i = 1; i <= N; i++) {
  score.push(Number(input[i]));
}

function solution(N, score) {
  if (N === 1) return score[1];
  if (N === 2) return score[1] + score[2];
  if (N === 3) return Math.max(score[1] + score[3], score[2] + score[3]);

  let dp = new Array(N + 1).fill(0);

  dp[1] = score[1];
  dp[2] = score[1] + score[2];
  dp[3] = Math.max(score[1] + score[3], score[2] + score[3]);

  for (let i = 4; i <= N; i++) {
    dp[i] = Math.max(dp[i - 2] + score[i], dp[i - 3] + score[i - 1] + score[i]);
  }
  return dp[N];
}

console.log(solution(N, score));
