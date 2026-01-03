const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. N 입력 받기
const N = Number(input[0]);

// 2. 그래프(트리) 생성 - 인접 리스트 방식
// 노드 번호가 1부터 N까지이므로, 인덱스 편의를 위해 N+1 크기로 생성
const tree = Array.from({ length: N + 1 }, () => []);

// 간선 정보 파싱 및 양방향 연결
for (let i = 1; i < input.length; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  tree[u].push(v);
  tree[v].push(u);
}

function solution() {
  let parent = Array(N + 1).fill(0);

  function bfs(start) {
    let queue = [start];
    parent[start] = 1;

    while (queue.length > 0) {
      const cur = queue.shift();

      for (const next of tree[cur]) {
        if (parent[next] === 0) {
          parent[next] = cur;
          queue.push(next);
        }
      }
    }
  }

  bfs(1);

  let answer = "";
  for (let i = 2; i <= N; i++) {
    answer += parent[i] + "\n";
  }
  console.log(answer);
}

solution();
