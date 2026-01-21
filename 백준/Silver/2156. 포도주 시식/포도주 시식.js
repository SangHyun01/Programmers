const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. 포도주 잔의 개수 n
const n = Number(input[0]);

// 2. 포도주의 양 (1번 잔부터 n번 잔까지 인덱스를 맞추기 위해 앞에 0을 넣습니다)
const wine = [0];
for (let i = 1; i <= n; i++) {
  wine.push(Number(input[i]));
}

function solution(n, wine) {
  // 이번 잔 마시지 않음

  // 이번 잔이 첫번째로 연속해서 마시는 잔

  // 이번 잔이 두번째로 연속해서 마시는 잔

  let dp = Array(n + 1).fill(0);

  if (n === 1) {
    console.log(wine[1]);
    return;
  }

  dp[1] = wine[1];
  if (n >= 2) {
    dp[2] = wine[1] + wine[2];
  }

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      wine[i] + dp[i - 2],
      wine[i] + wine[i - 1] + dp[i - 3],
    );
  }

  console.log(dp[n]);
}

solution(n, wine);
