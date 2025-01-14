function solution(chicken) {
    let cp = chicken;
    let answer = 0;
    while(cp > 9){
        answer += Math.floor(cp/10);
        cp= Math.floor((cp/10) + (cp%10));
    }
    return answer;
}