const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 모든 공백(줄바꿈, 스페이스)을 기준으로 잘라서 일렬로 만듦 (가장 안전함)
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let cursor = 0;
const T = input[cursor++]; // 테스트 케이스 개수

// 테스트 케이스만큼 반복
for (let i = 0; i < T; i++) {
  const M = input[cursor++]; // 가로 길이 (열 개수)
  const N = input[cursor++]; // 세로 길이 (행 개수)
  const K = input[cursor++]; // 배추 위치 개수

  // 배추밭 초기화 (N행 M열 0으로 채움)
  const field = Array.from({ length: N }, () => Array(M).fill(0));

  // 배추 심기
  for (let j = 0; j < K; j++) {
    const x = input[cursor++]; // 가로 좌표 (열)
    const y = input[cursor++]; // 세로 좌표 (행)

    // [중요] 배열은 행(세로)이 먼저 오므로 field[y][x] 순서!
    field[y][x] = 1;
  }

  // 여기서 바로 풀이 함수 호출 (각 테스트 케이스마다 정답 출력)
  solution(M, N, field);
}

function solution(M, N, field) {
  const visited = Array.from({ length: N }, () => Array(M).fill(0));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let answer = 0;

  function bfs(startX, startY) {
    let queue = [[startX, startY]];

    visited[startX][startY] = 1;

    let count = 1;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          field[nx][ny] === 1 &&
          visited[nx][ny] === 0
        ) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
          count++;
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 1이고 아직 방문 안했으면 탐색 시작
      if (field[i][j] === 1 && visited[i][j] === 0) {
        const count = bfs(i, j);
        answer++;
      }
    }
  }

  console.log(answer);
}
