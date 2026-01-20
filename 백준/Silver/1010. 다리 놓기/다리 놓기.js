const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 공백이나 줄바꿈을 기준으로 모든 숫자를 배열로 가져옵니다.
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let idx = 0;
const T = input[idx++]; // 테스트 케이스 개수

function solution() {
  for (let i = 0; i < T; i++) {
    const N = input[idx++]; // 서쪽 사이트 개수
    const M = input[idx++]; // 동쪽 사이트 개수

    let dp = Array.from({ length: 31 }, () => Array(31).fill(0));

    for (let i = 0; i <= 30; i++) {
      dp[i][0] = 1;
      dp[i][i] = 1;
    }

    for (let i = 2; i <= 30; i++) {
      for (let j = 1; j < i; j++) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      }
    }
    console.log(dp[M][N]);
  }
}

solution();
