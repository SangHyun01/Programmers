const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. n(세로), m(가로) 추출
const [n, m] = input[0].split(" ").map(Number);

// 2. 그림 데이터(2차원 배열) 생성
const grid = [];
for (let i = 1; i <= n; i++) {
  grid.push(input[i].split(" ").map(Number));
}

let paintingCount = 0;
    let maxArea = 0;

function solution(n, m, grid) {
  let visited = Array.from({ length: n }, () => Array(m).fill(0));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function bfs(startY, startX) {
    let queue = [[startY, startX]];
    visited[startY][startX] = 1;
    let head = 0;

    
    let count = 1;

    while (queue.length > head) {
      const [y, x] = queue[head++];

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
          if (grid[ny][nx] === 1 && visited[ny][nx] === 0) {
            visited[ny][nx] = 1;
            queue.push([ny, nx]);
            count++;
          }
        }
      }
    }
    return count;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && visited[i][j] === 0) {
        const currentArera = bfs(i, j);
        maxArea = Math.max(currentArera, maxArea);
        paintingCount++;
      }
    }
  }
  console.log(paintingCount);
  console.log(maxArea);
}

solution(n, m, grid);
