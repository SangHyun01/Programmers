const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// [중요] 모든 공백(스페이스, 줄바꿈, 탭 등)을 기준으로 쪼개서 숫자 배열로 만듭니다.
// 이렇게 하면 입력 형식이 조금 이상해도 숫자만 정확하게 가져옵니다.
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

// input 배열을 앞에서부터 하나씩 꺼내 쓰기 위한 인덱스
let cursor = 0;

const n = input[cursor++]; // 컴퓨터 수
const m = input[cursor++]; // 간선 수

// 그래프 생성
const graph = Array.from({ length: n + 1 }, () => []);

// 간선 정보 입력
for (let i = 0; i < m; i++) {
  const a = input[cursor++];
  const b = input[cursor++];
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(n + 1).fill(false);

function solution() {
  let count = 0;
  const queue = [1];
  visited[1] = true;

  while (queue.length > 0) {
    const src = queue.shift();

    for (const dest of graph[src]) {
      if (!visited[dest]) {
        visited[dest] = true;
        queue.push(dest);
        count++;
      }
    }
  }

  console.log(count);
}

solution();
