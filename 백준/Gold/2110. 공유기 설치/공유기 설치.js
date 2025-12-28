const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 1. 전체 입력 읽어오기
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 2. 첫 줄 파싱: 집의 개수(N), 설치할 공유기 개수(C)
const [N, C] = input[0].split(" ").map(Number);

// 3. 두 번째 줄부터 파싱: 각 집의 좌표
const houses = input.slice(1).map(Number);

solution(N, C, houses);

// --- 문제 풀이 시작 ---
function solution(N, C, houses) {
  houses.sort((a, b) => a - b); // 오름차순 정렬
  let left = 1;
  let right = houses[N - 1] - houses[0]; // 최대 거리 (마지막 집 - 첫번째 집)
  let answer = 0;

  // mid 가 주어졌을 때 이 거리 간격으로 공유기를 C개를 설치할 수 있는가? => 결정문제
  // 최대한 많이 설치해야 하니까 첫번째 집은 무조건 설치
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 1; // 첫번째 집
    let prevHouse = houses[0];

    for (let i = 1; i < N; i++) {
      // 현재 집과 직전 설치 집 사이의 거리가 mid 이상이면 설치 가능
      if (houses[i] - prevHouse >= mid) {
        count++;
        prevHouse = houses[i];
      }
    }

    // C개 이상 설치 가능함 => 더 넗혀도 됨
    if (count >= C) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(answer);
}
