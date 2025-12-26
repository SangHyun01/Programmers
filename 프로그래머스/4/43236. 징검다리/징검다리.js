function solution(distance, rocks, n) {
    rocks.sort((a,b) => a-b);
    
    let left = 1;
    let right = distance;
    let mid = Math.floor((left + right) / 2);
    let answer = 0;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        let removeCount = 0;
        let prev = 0; // 출발지점
        
        for (const rock of rocks) {
            if(rock-prev < mid) {
                // 거리가 목표보다 짧으면 돌 제거
                removeCount++;
            } else {
                prev = rock;
            }
        }
        if(distance - prev < mid) {
            removeCount++;
        }
        if(removeCount <= n) {
            answer = mid; // n보다 적은 횟수로 가능하네? -> 더 높여서 시도
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
}

