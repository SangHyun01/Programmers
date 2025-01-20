function solution(sides) {
    // 개수 카운트
    let result = 0;
    // 다른 한 변의 길이
    let n;
    // sides 중 큰 값이 가장 긴 변일 경우
    // sides중 큰 값까지 반복하면서
    for(let i=1; i<=Math.max(...sides); i++){
        // 나머지 sides와 n의 합이 6보다 커야함. 단 n <= 6 
        if(Math.min(...sides) + i > Math.max(...sides)){
            result++;
        }
    }
    // n이 가장 긴 변일 경우
    for(let j=(sides[0]+sides[1])-1; j>Math.max(...sides); j--){
        // sides[0] + sides[1] > n . n > max(sides[i]) 
        if((sides[0] + sides[1]) > j){
            result++;
        }
    }
    return result;
}