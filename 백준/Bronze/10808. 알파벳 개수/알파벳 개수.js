const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(str) {

  const counts = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    const index = str.charCodeAt(i) - 97;
    counts[index]++;
  }

  console.log(counts.join(" "));
}

solution(input);