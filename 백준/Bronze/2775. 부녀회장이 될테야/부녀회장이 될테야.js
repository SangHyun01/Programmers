const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;
const T = input[idx++]; 

function solution() {
  let dp = Array.from({ length: 15 }, () => Array(15).fill(0));


  for (let i = 1; i <= 14; i++) {
    dp[0][i] = i;
  }


  for (let i = 1; i <= 14; i++) {
    for (let j = 1; j <= 14; j++) {
      if (j === 1) {
        dp[i][j] = 1; 
      } else {
   
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }

  for (let i = 0; i < T; i++) {
    const k = input[idx++];
    const n = input[idx++];
    console.log(dp[k][n]);
  }
}

solution();