const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;
const N = input[idx++];

const targetSet = new Set();
for (let i = 0; i < N; i++) {
  targetSet.add(input[idx++]);
}

const M = input[idx++];
const results = [];

for (let i = 0; i < M; i++) {
  const query = input[idx++];

  if (targetSet.has(query)) {
    results.push(1);
  } else {
    results.push(0);
  }
}


console.log(results.join("\n"));