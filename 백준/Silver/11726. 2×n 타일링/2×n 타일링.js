const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 숫자 하나만 입력받으므로 trim() 후 바로 Number로 변환합니다.
const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);

function solution(n) {
  let dp = Array(1001).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  console.log(dp[n]);
}

solution(n);
