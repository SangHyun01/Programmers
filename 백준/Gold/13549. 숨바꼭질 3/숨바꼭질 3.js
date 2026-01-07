const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const N = Number(input[0]);
const K = Number(input[1]);

function solution(N, K) {
  if (N === K) return 0;
  let visited = Array(100001).fill(-1);

  let queue = [[N, 0]]; // 위치, 걸린시간
  visited[N] = 0;
  let head = 0;

  while (queue.length > 0) {
    const [cur, time] = queue.shift();

    if (cur === K) return time;

    const teleport = cur * 2;
    if (teleport < 1000001 && visited[teleport] === -1) {
      visited[teleport] = time;
      queue.unshift([teleport, time]);
    }

    for (const next of [cur - 1, cur + 1]) {
      if (next >= 0 && visited[next] === -1 && next <= 100000) {
        visited[next] = time + 1;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(solution(N, K));
