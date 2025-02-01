function solution(a, b) {
    let sum = 0;
    // a > b 인 경우
    if(a >= b){
        for(let i=b; i<=a; i++){
            sum += i;
        }
    }else if(a < b){
        for(let i=a; i<=b; i++){
            sum += i;
        }
    }
    return sum;
}