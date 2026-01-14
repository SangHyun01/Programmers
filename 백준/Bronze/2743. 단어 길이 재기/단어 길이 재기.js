const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 단어 하나를 읽어옵니다.
// trim()을 통해 문자열 앞뒤의 공백과 줄바꿈을 제거하는 것이 중요합니다.
const input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  // 여기에 로직을 작성하세요.
  // 자바스크립트 문자열의 길이를 구하는 속성을 사용하면 됩니다.
  return str.length;
}

console.log(solution(input));
