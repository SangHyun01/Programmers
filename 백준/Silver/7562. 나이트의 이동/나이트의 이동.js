const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let line = 0;
const T = Number(input[line++]); // 테스트 케이스 개수

for (let t = 0; t < T; t++) {
  const L = Number(input[line++]); // 체스판의 한 변의 길이
  const [startX, startY] = input[line++].split(" ").map(Number); // 현재 위치
  const [targetX, targetY] = input[line++].split(" ").map(Number); // 이동하려는 위치

  console.log(solution(L, startX, startY, targetX, targetY));
}

function solution(L, startX, startY, targetX, targetY) {
  // 1. 나이트의 8방향 이동 경로 설정
  // 나이트는 한 방향으로 2칸, 옆으로 1칸 이동합니다.
  const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
  const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

  // 2. 방문 체크 및 거리 기록을 위한 배열 (L x L 크기)
  const visited = Array.from({ length: L }, () => Array(L).fill(0));

  let queue = [[startX, startY]];
  visited[startX][startY] = 1;
  let head = 0;
  // -------------------------------------------------------------
  // 여기서부터 BFS 로직을 작성하세요.
  // -------------------------------------------------------------
  // [작성 팁]
  // - 시작점과 도착점이 같으면 바로 0을 리턴하세요.
  // - 큐에는 [x, y, dist]를 넣거나, visited[nx][ny] = visited[x][y] + 1 로 거리를 기록하세요.
  // - 토마토 문제처럼 head 인덱스를 사용해 shift()를 대체하면 안전합니다.

  while (queue.length > head) {
    const [x, y] = queue[head++];

    if (x === targetX && y === targetY) {
      return visited[x][y] - 1;
    }
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < L && ny >= 0 && ny < L && visited[nx][ny] === 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return 0; // 최단 거리를 반환하세요.
}


