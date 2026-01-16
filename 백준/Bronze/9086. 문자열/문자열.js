const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]); // 테스트 케이스 개수

function solution(T, words) {
  for (let i = 0; i < T; i++) {
    // 각 줄의 문자열을 가져오고 trim()으로 줄바꿈 기호를 제거합니다.
    const word = words[i].trim();

    let letter = "";
    letter += word[0] + word[word.length - 1];

    console.log(letter);
  }
}

// 첫 번째 줄(T)을 제외한 나머지 문자열 배열을 전달합니다.
solution(T, input.slice(1));
