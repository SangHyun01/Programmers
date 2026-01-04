const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. N(세로, 행), M(가로, 열) 입력
const [N, M] = input[0].split(" ").map(Number);

// 2. 연구소 지도(Grid) 입력
const grid = input.slice(1).map((line) => line.trim().split(" ").map(Number));

function solution(N, M, grid) {
  // [작성 팁]
  // 1. 미리 위치들을 파악해두면 좋습니다.
  const emptySpaces = []; // 벽을 세울 수 있는 '0'의 좌표들
  const viruses = []; // 바이러스가 퍼지기 시작하는 '2'의 좌표들

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 0) emptySpaces.push([i, j]);
      else if (grid[i][j] === 2) viruses.push([i, j]);
    }
  }

  let maxSafeZone = 0;

  // -------------------------------------------------------------
  // [작성해야 할 로직 순서]
  // -------------------------------------------------------------
  // 1. 빈칸(emptySpaces) 중 3개를 골라 벽(1)으로 바꾸는 조합 구현 (백트래킹/3중 for문)
  // 2. 벽 3개가 세워질 때마다 바이러스를 퍼뜨림 (BFS 또는 DFS)
  //    *주의: 원본 grid를 건드리면 안 되므로 복사본(tempGrid)을 만들어 사용하세요.
  // 3. 바이러스가 다 퍼진 후 안전 영역(0)의 개수를 세어 maxSafeZone 갱신
  // 4. 세웠던 벽을 다시 허물고(0으로 복구) 다음 조합 시도

  function bfs() {
    let tempGrid = grid.map((v) => [...v]); // 깊은 복사

    let queue = [...viruses];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (tempGrid[i][j] === 2) {
          queue.push([i, j]);
        }
      }
    }

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let head = 0;

    while (queue.length > head) {
      const [x, y] = queue[head++];

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && tempGrid[nx][ny] === 0) {
          tempGrid[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
    let count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (tempGrid[i][j] === 0) count++;
      }
    }
    return count;
  }

  function makeWall(count) {
    // 벽 3개가 다 세워지면 BFS로 바이러스 퍼뜨리고 끝냄
    if (count === 3) {
      maxSafeZone = Math.max(maxSafeZone, bfs());
      return;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (grid[i][j] === 0) {
          grid[i][j] = 1;
          makeWall(count + 1);
          grid[i][j] = 0;
        }
      }
    }
  }
  makeWall(0, 0);

  return maxSafeZone;
}

console.log(solution(N, M, grid));
