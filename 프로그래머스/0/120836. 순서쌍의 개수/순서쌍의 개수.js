function solution(n) {
    let count = 1;
    for(let i=1; i<n; i++){
        if(n % i === 0){
            count++;
        }
    }
    return count;
}