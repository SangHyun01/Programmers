function solution(n) {
    let result = [];
    for(let i=2; i<=n; i++){
        while(n % i === 0){
            n = n / i;
            // 중복된 소인수 검사
            if(!result.includes(i)){
                result.push(i);
            }
        }
    }
    return result;
}


