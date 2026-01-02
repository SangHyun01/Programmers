const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 줄바꿈(\n) 기준으로 나눔
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. 지도 크기 N (첫 줄)
const N = Number(input[0]);

// 2. 지도 데이터 (두 번째 줄부터 끝까지)
// [중요] 공백이 없으므로 split('')을 써야 한 글자씩 쪼개집니다.
const maps = input.slice(1).map((line) => line.trim().split("").map(Number));

function solution(N, maps) {
  // 방문 배열
  const visited = Array.from({ length: N }, () => Array(N).fill(0));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 단지 집 개수 담을 배열
  let houses = [];

  // startX, startY 에서 시작해서 연결된 집 개수 반환
  function bfs(startX, startY) {
    let queue = [[startX, startY]];

    visited[startX][startY] = 1;

    let count = 1;

    while (queue.length > 0) {
      const [x, y] = queue.shift(); // 하나씩 꺼냄

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < N &&
          visited[nx][ny] === 0 &&
          maps[nx][ny] === 1
        ) {
          visited[nx][ny] = 1; //  밤문 처리
          queue.push([nx, ny]);
          count++;
        }
      }
    }
    return count;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 집이 있고, 아직 방문 안했으면 탐색 시작
      if (maps[i][j] === 1 && visited[i][j] === 0) {
        const count = bfs(i, j);
        houses.push(count);
      }
    }
  }
  houses.sort((a, b) => a - b);

  console.log(houses.length); // 총 단지 수
  for (const house of houses) {
    console.log(house);
  }
}

solution(N, maps);
