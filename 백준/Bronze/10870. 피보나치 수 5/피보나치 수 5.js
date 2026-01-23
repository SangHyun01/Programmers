const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

// 0번째와 1번째 피보나치 수를 미리 정의
const fib = [0, 1];

// 2번째부터 n번째까지 계산
for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

// n번째 피보나치 수 출력
console.log(fib[n]);