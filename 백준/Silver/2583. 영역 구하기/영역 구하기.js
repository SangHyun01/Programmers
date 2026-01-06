const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. M(세로, 행 개수), N(가로, 열 개수), K(직사각형 개수)
const [M, N, K] = input[0].split(" ").map(Number);

// 2. M x N 크기의 모눈종이 생성 (전부 0으로 초기화)
const grid = Array.from({ length: M }, () => Array(N).fill(0));

// 3. K개의 직사각형 영역을 1로 채우기
for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  // 좌표계 기준 (x1, y1)부터 (x2, y2)까지의 영역을 1로 표시
  // 주의: x는 열(N), y는 행(M)입니다.
  // 배열 인덱스 특성상 y1부터 y2-1까지, x1부터 x2-1까지 반복합니다.
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      grid[y][x] = 1;
    }
  }
}

// 4. 결과 출력
const result = solution(M, N, grid);
console.log(result.length); // 영역의 개수
console.log(result.sort((a, b) => a - b).join(" ")); // 각 영역의 넓이를 오름차순 정렬하여 출력

function solution(M, N, grid) {
  let result = [];

  let visited = Array.from({ length: M }, () => Array(N).fill(0));

  // 상하좌우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  function bfs(startY, startX) {
    let queue = [[startY, startX]];
    visited[startY][startX] = 1;
    let head = 0;

    while (queue.length > head) {
      const [y, x] = queue[head++];

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          visited[ny][nx] === 0 &&
          grid[ny][nx] === 0
        ) {
          visited[ny][nx] = visited[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
    return queue.length;
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === 0 && grid[i][j] === 0) {
        const area = bfs(i, j);
        result.push(area);
      }
    }
  }

  return result;
}
