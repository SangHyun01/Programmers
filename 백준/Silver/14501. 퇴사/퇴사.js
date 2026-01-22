const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const schedule = [null];
for (let i = 1; i <= N; i++) {
  schedule.push(input[i].split(" ").map(Number));
}

function solution(N, schedule) {
  let dp = Array(N + 2).fill(0);

  for (let i = N; i >= 1; i--) {
    const T = schedule[i][0];
    const P = schedule[i][1];

    if (i + T <= N + 1) {
      dp[i] = Math.max(dp[i + 1], P + dp[i + T]);
    } else {
      dp[i] = dp[i + 1];
    }
  }
  console.log(dp[1]);
}

solution(N, schedule);
