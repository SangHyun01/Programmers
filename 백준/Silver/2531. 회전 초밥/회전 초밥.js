const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let idx = 0;
const N = input[idx++]; // 접시의 수
const d = input[idx++]; // 초밥의 가짓수
const k = input[idx++]; // 연속해서 먹는 접시의 수
const c = input[idx++]; // 쿠폰 번호

// 회전 테이블 위의 초밥 종류를 배열로 담습니다.
const sushi = [];
for (let i = 0; i < N; i++) {
  sushi.push(input[idx++]);
}

function solution(N, d, k, c, sushi) {
  let maxType = 0;
  const countMap = new Map();

  for (let i = 0; i < k; i++) {
    countMap.set(sushi[i], (countMap.get(sushi[i]) || 0) + 1);
  }

  for (let i = 0; i < N; i++) {
    let currentTypes = countMap.size;
    if (!countMap.has(c)) currentTypes += 1;

    maxType = Math.max(maxType, currentTypes);

    const leftSushi = sushi[i];
    if (countMap.get(leftSushi) === 1) {
      countMap.delete(leftSushi);
    } else {
      countMap.set(leftSushi, countMap.get(leftSushi) - 1);
    }

    const rightSushi = sushi[(i + k) % N];
    countMap.set(rightSushi, (countMap.get(rightSushi) || 0) + 1);
  }

  console.log(maxType);
}

solution(N, d, k, c, sushi);
