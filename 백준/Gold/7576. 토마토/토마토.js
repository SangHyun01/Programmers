const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. M(가로, 열 개수), N(세로, 행 개수) 입력
const [M, N] = input[0].split(" ").map(Number);

// 2. 토마토 상자(2차원 배열) 입력
const box = input.slice(1).map((line) => line.trim().split(" ").map(Number));

function solution(M, N, box) {
  // 1이 있는 위치 찾아서 큐에 넣음
  let queue = [];

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  let head = 0;

  while (queue.length > head) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && box[nx][ny] === 0) {
        box[nx][ny] = box[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  let maxDay = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 0) {
        // BFS 끝났는데도 0이 남아있다면 -> 모두 익지 못함
        return -1;
      }
      if (box[i][j] > maxDay) maxDay = box[i][j];
    }
  }

  return maxDay - 1;
}

console.log(solution(M, N, box));

/** 일단 1이 있는 곳을 찾아야됨
 *
 */
