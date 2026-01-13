const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 단어 하나를 읽어와서 모두 대문자로 변환합니다.
const input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let wordMap = new Map();

  for (let i = 97; i <= 122; i++) {
    wordMap.set(String.fromCharCode(i), -1);
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (wordMap.get(char) === -1) {
      wordMap.set(char, i);
    }
  }

  return [...wordMap.values()].join(" ");
}

console.log(solution(input));
