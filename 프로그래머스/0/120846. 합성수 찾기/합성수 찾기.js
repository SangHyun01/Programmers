function solution(n) {
    //합성수의 개수
    let count = 0;
    for(let i=1; i<=n; i++){
        // 약수의 개수
        let fact = 0;
        for(let j=1; j<=i; j++){
            if(i % j === 0){
                fact++;
            }
        }
        if(fact >= 3){
            count++;
        }
    }
    return count;
}

