function solution(n) {
    let answer = '';
    
    const digits = ['4','1','2'];
    
    while(n>0) {
        let remainder = n % 3;
        
        answer = digits[remainder] + answer;
        
        if(remainder === 0) {
            n = (n/3) - 1;
        } else {
            n = Math.floor(n / 3);
        }
    }
    return answer;
}

// 3으로 나눴을때 몫,나머지

// 나누어떨어질때 몫-1,4추가