const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 전체 데이터를 공백/줄바꿈 구분 없이 하나의 숫자 배열로 다 뽑아냅니다. (가장 안전한 방법)
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;
const n = input[idx++]; // 전체 사람 수
const personA = input[idx++]; // 시작 인물
const personB = input[idx++]; // 목표 인물
const m = input[idx++]; // 관계 수

// 1. 인접 리스트 생성
const adj = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const u = input[idx++];
  const v = input[idx++];
  // 양방향 연결
  adj[u].push(v);
  adj[v].push(u);
}

function solution(n, start, target, adj) {
  // 2. 방문 배열 및 촌수 기록 (-1은 미방문)
  const visited = new Array(n + 1).fill(-1);

  // 3. BFS 시작
  let queue = [start];
  visited[start] = 0;
  let head = 0;

  while (queue.length > head) {
    const cur = queue[head++];

    // 목표를 찾으면 현재까지 기록된 촌수 반환
    if (cur === target) return visited[cur];

    for (const next of adj[cur]) {
      if (visited[next] === -1) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  // 연결 고리가 없으면 -1 반환
  return -1;
}

console.log(solution(n, personA, personB, adj));