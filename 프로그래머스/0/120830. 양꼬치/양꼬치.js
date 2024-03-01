function solution(n, k) {
    if(n < 10){
        return 12000 * n + 2000 * k;
    }else if(n >= 10){
        return 12000 * n + 2000 * k - (2000 * Math.floor(n/10));
    }
}