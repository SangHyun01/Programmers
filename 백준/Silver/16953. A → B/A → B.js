const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

function solution(A, B) {
  let queue = [[A, 1]];
  let head = 0;

  while (queue.length > head) {
    const [cur, count] = queue[head++];

    if (cur === B) return count;
    const next1 = cur * 2;

    if (next1 <= B) {
      queue.push([next1, count + 1]);
    }

    const next2 = cur * 10 + 1;
    if (next2 <= B) {
      queue.push([next2, count + 1]);
    }
  }
  return -1;
}

console.log(solution(A, B));
