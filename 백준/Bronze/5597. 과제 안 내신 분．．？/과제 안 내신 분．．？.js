const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// split(/\s+/)는 공백, 탭, 줄바꿈을 모두 한꺼번에 처리해줘서 가장 안전합니다.
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

function solution(submitted) {
  // 1. 1번부터 30번까지 체크할 배열 (0번 인덱스는 무시)
  let students = new Array(31).fill(false);

  // 2. 제출한 번호는 true로 체크
  for (let num of submitted) {
    students[num] = true;
  }

  // 3. 1번부터 30번까지 순서대로 확인
  for (let i = 1; i <= 30; i++) {
    if (!students[i]) { // students[i]가 false인 경우 (과제 안 낸 학생)
      console.log(i); // 번호를 즉시 출력
    }
  }
}

solution(input);