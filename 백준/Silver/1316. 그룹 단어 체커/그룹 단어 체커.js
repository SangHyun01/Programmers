const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const words = [];

for (let i = 1; i <= N; i++) {
  words.push(input[i].trim());
}

function solution(N, words) {
  let count = 0;

  for (let i = 0; i < N; i++) {
    if (isGroup(words[i]) === true) {
      count++;
    }
  }
  return count;
}

function isGroup(str) {
  let visited = [];

  visited.push(str[0]);
  for (let i = 1; i < str.length; i++) {
    let prev = i - 1;

    if (str[i] !== str[prev]) {
      if (visited.includes(str[i])) {
        return false;
      }
      visited.push(str[i]);
    }
  }
  return true;
}

console.log(solution(N, words));
