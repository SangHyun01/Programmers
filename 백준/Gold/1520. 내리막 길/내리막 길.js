const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 전체 데이터를 공백/줄바꿈 구분 없이 숫자 배열로 파싱 (격자 문제에서 가장 안전함)
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let idx = 0;
const M = input[idx++]; // 세로 크기 (행)
const N = input[idx++]; // 가로 크기 (열)

// 2차원 배열(격자) 생성
const grid = [];
for (let i = 0; i < M; i++) {
  grid.push(input.slice(idx, idx + N));
  idx += N;
}

function solution(M, N, grid) {
  let dp = Array.from({ length: M }, () => Array(N).fill(-1));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(y, x) {
    if (y === M - 1 && x === N - 1) return 1;

    if (dp[y][x] !== -1) return dp[y][x];

    dp[y][x] = 0;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (grid[ny][nx] < grid[y][x]) {
          dp[y][x] += dfs(ny, nx);
        }
      }
    }
    return dp[y][x];
  }
  return dfs(0,0)
}

console.log(solution(M, N, grid));
