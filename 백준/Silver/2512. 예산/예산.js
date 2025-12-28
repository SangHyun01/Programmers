const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 1. 전체 입력 읽어오기
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 2. 입력 파싱
const N = Number(input[0]); // 지방의 수
const requests = input[1].split(" ").map(Number); // 각 지방의 예산요청 배열
const M = Number(input[2]); // 총 예산 상한액

solution(N, requests, M);

// --- 문제 풀이 시작 ---
function solution(N, requests, M) {
  requests.sort((a, b) => a - b);
  let left = 0;
  let right = requests[requests.length - 1];
  let answer = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let budget = 0;

    for (const request of requests) {
      if (request >= mid) {
        budget += mid;
      } else {
        budget += request;
      }
    }

    if (budget > M) {
      right = mid - 1;
    } else {
      answer = mid;
      left = mid + 1;
    }
  }
  console.log(answer);
}
