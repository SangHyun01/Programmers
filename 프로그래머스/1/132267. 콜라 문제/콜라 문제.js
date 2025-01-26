function solution(a, b, n) {
    // 빈 병 개수의 합
    let result = 0;
    // 빈 병의 개수가 가져다줄 수 있는 개수 a보다 클 때 동안만 반복
    while(n >= a){
        let exchange = Math.floor(n / a);
        result += exchange * b;
        n = (n%a) + (exchange * b);
    }
    return result;
}

// n = n - (a * (n / a)) + (n / a) * b 반복 언제까지?
// n 값이 a 보다 작아지면 끝 -> 더 이상 가져갈 빈 병이 없기 때문
