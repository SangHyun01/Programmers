const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function factorial(n) {
    let result = 1;
    // 1부터 n까지 차례대로 곱합니다.
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(N));