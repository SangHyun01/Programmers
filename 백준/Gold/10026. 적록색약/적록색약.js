const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. 입력 데이터 가공
const N = Number(input[0]);
// 각 줄의 \r 제거 및 문자열을 배열로 변환 (2차원 배열 생성)
const grid = input.slice(1).map((line) => line.trim().split(""));

function solution() {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  function bfs(startY, startX, visitedArray) {
    let queue = [];

    queue.push([startY, startX]);
    visitedArray[startY][startX] = 1;
    const targetColor = grid[startY][startX];

    while (queue.length > 0) {
      const [y, x] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
          if (!visitedArray[ny][nx] && grid[ny][nx] === targetColor) {
            visitedArray[ny][nx] = 1;
            queue.push([ny, nx]);
          }
        }
      }
    }
  }

  // 일반인
  let visited = Array.from({ length: N }, () => Array(N).fill(0));
  let normalCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        bfs(i, j, visited);
        normalCount++;
      }
    }
  }

  // 적록색약인 경우
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === "G") {
        // 초록색을 빨간색으로 바꿈
        grid[i][j] = "R";
      }
    }
  }

  visited = Array.from({ length: N }, () => Array(N).fill(0));
  let blindCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        bfs(i, j, visited);
        blindCount++;
      }
    }
  }

  console.log(`${normalCount} ${blindCount}`);
}

solution();
