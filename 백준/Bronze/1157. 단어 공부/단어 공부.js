const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 단어 하나를 읽어와서 모두 대문자로 변환합니다.
const input = fs.readFileSync(filePath).toString().trim().toUpperCase();

function solution(str) {
  let letters = str.toUpperCase();

  let countMap = new Map();

  for (const letter of letters) {
    countMap.set(letter, (countMap.get(letter) || 0) + 1);
  }

  let maxCount = 0;
  let maxChar = "";
  let isDuplicated = false;

  for (const [letter, count] of countMap) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = letter;
      isDuplicated = false;
    } else if (count === maxCount) {
      isDuplicated = true;
    }
  }

  return isDuplicated ? "?" : maxChar;
}

console.log(solution(input));
