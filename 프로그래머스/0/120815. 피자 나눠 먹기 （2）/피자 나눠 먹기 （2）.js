function solution(n) {
    for(let i=1; ; i++){
        if((i * 6) % n === 0){
        let result = i;
        return result;
        break; 
        }
    }
}