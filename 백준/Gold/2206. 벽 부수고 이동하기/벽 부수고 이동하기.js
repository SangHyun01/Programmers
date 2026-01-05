const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
// 지도 파싱 (공백이 없으므로 split('') 사용)
const grid = input.slice(1).map((line) => line.trim().split("").map(Number));

function solution(N, M, grid) {
  // 3차원 방문 배열: [행][열][벽부심여부]
  // visited[N][M][2] 크기로 생성
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array(2).fill(0))
  );

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [[0, 0, 0]]; // [x,y,isBroken] 1번 부쉈는지 체크
  visited[0][0][0] = 1;
  let head = 0;

  while (queue.length > head) {
    const [x, y, broken] = queue[head++];

    if (x === N - 1 && y === M - 1) {
      return visited[x][y][broken];
    }
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (grid[nx][ny] === 0) {
          if (visited[nx][ny][broken] === 0) {
            // 아직 방문하지 않고, 길이 있다면
            visited[nx][ny][broken] = visited[x][y][broken] + 1;
            queue.push([nx, ny, broken]);
          }
        } else if (grid[nx][ny] === 1) {
          // 다음칸이 벽이고(1), 아직 벽을 부순적이 없다면
          if (broken === 0 && visited[nx][ny][1] === 0) {
            visited[nx][ny][1] = visited[x][y][0] + 1;
            queue.push([nx, ny, 1]);
          }
        }
      }
    }
  }
  return -1;
}

console.log(solution(N, M, grid));
