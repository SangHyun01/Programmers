const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((line) => line.split("").map(Number));

function bfs() {
  const queue = [[0, 0]]; 
  const dy = [-1, 1, 0, 0]; 
  const dx = [0, 0, -1, 1];

  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // 미로 범위를 벗어나는지 확인
      if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
        // 길이고 아직 방문하지 않았는지 확인
        if (maze[ny][nx] === 1) {
          // 이전 칸의 숫자 + 1을 현재 칸에 저장
          maze[ny][nx] = maze[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }

  console.log(maze[N - 1][M - 1]);
}

bfs();