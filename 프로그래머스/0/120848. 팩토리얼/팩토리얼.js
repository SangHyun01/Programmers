function solution(n) {
    let result = 0;
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact = fact * i;
        if(fact <= n){
            result = i;
        }
    }
    return result;
}