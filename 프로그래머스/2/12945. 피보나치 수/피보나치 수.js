function solution(n) {
    let fib = Array(n+1);
    
    fib[0] = 0;
    fib[1] = 1;
    
    for(let i=2; i<= n; i++) {
        fib[i] = (fib[i-1] + fib[i-2]) % 1234567;
    }
    
    return fib[n];
}