function solution(x, y, n) {
    let dp = Array(y+1).fill(Infinity);
    
    // 시작점 설정
    // x레벨은 0번만에 도달
    dp[x] = 0;
    
    // x부터 y까지 순회
    for(let i=x; i<=y; i++) {
        // 현재 레벨에서 i레벨에 도달하는 법을 모르면
        if(dp[i] === Infinity) {
            continue;
        }
        
        // i+n 경로
        if(i + n <= y) {
            dp[i+n] = Math.min(dp[i+n], dp[i] + 1)
        };
        
        // i*2 경로
        if(i*2 <= y) {
            dp[i*2] = Math.min(dp[i*2], dp[i] + 1);
        }
        
        // i*3 경로
        if(i*3 <= y) {
            dp[i*3] = Math.min(dp[i*3], dp[i] + 1);
        }
    }
    
    // dp[y] 가 여전히 Infinity이면 도달 못한 것이므로 -1
    return dp[y] === Infinity ? -1 : dp[y];
}

// x+n
// x*2
// x*3

// 일단 y%x !== 0 이면 return -1

// 10+5+5+5+5+5+5 = 40 6번
// (10*2)*2 = 40 2번
// min = 2
// (y-x)%n === 0 이면 더해서 만들 수 있다는 뜻

// 최소 횟수 -> DP 또는 BFS
// dp[i]를 x를 i로 만드는데 필요한 최소 연산 횟수



