const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]); // 집의 개수

const costs = input
  .slice(1)
  .map((line) => line.trim().split(/\s+/).map(Number));

function solution(N, costs) {
  let dp = Array.from({ length: N }, () => Array(3).fill(0));

  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  for (let i = 1; i < N; i++) {
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }
  console.log(Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]));
}

solution(N, costs);
