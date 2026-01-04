const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, K] = input.map(Number); // 수빈(N), 동생(K)

const visited = Array(100001).fill(0);

function bfs(N) {
  const queue = [[N, 0]]; // 현재 위치, 걸린 시간

  visited[N] = 1;

  let head = 0;

  while (queue.length > head) {
    const [cur, time] = queue[head++];

    // 동생 찾았으면 시간 반환
    if (cur === K) {
      return time;
    }

    for (const next of [cur - 1, cur + 1, cur * 2]) {
      if (next >= 0 && next <= 100000 && visited[next] === 0) {
        visited[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(bfs(N));
