const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. N 입력
const N = Number(input[0]);

// 2. 2차원 배열 입력 (공백으로 구분된 숫자들을 배열로 변환)
const grid = input.slice(1).map((line) => line.trim().split(" ").map(Number));

function solution(N, grid) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 전체 지역중 가장 높은 건물 높이 구함
  let maxheight = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] > maxheight) {
        maxheight = grid[i][j];
      }
    }
  }

  // 최대 안전 영역 개수
  let safezoneCount = 0;

  function bfs(x, y, h, visited) {
    let queue = [[x, y]];
    visited[x][y] = 1;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < N &&
          !visited[nx][ny] &&
          grid[nx][ny] > h
        ) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let h = 0; h < maxheight; h++) {
    let visited = Array.from({ length: N }, () => Array(N).fill(0));
    let currentCount = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j] && grid[i][j] > h) {
          bfs(i, j, h, visited);
          currentCount++;
        }
      }
    }
    safezoneCount = Math.max(safezoneCount, currentCount);
  }

  console.log(safezoneCount);
}

solution(N, grid);
