const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let line = 0;

while (line < input.length) {
  // 1. 가로(w), 세로(h) 읽기
  const [w, h] = input[line++].split(" ").map(Number);

  // 2. 종료 조건 체크
  if (w === 0 && h === 0) break;

  // 3. 지도 데이터(grid) 읽기
  const grid = [];
  for (let i = 0; i < h; i++) {
    grid.push(input[line++].trim().split(" ").map(Number));
  }

  // 4. 파싱된 데이터를 함수에 전달
   console.log(solution(w, h, grid));
}

function solution(w, h, grid) {
  let visited = Array.from({ length: h }, () => Array(w).fill(0));

  const dx = [-1, -1, -1, 1, 0, 1, 1, 0]; // 8방향
  const dy = [-1, 0, 1, 0, -1, 1, -1, 1];

  let count = 0;

  function bfs(startX, startY) {
    let queue = [[startX, startY]];
    visited[startX][startY] = 1;
    let head = 0;

    while (queue.length > head) {
      const [x, y] = queue[head++];

      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < h &&
          ny >= 0 &&
          ny < w &&
          visited[nx][ny] === 0 &&
          grid[nx][ny] === 1
        ) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === 1 && visited[i][j] === 0) {
        bfs(i, j);
        count++;
      }
    }
  }
  return count;
}
