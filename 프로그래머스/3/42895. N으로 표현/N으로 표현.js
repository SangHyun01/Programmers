function solution(N, number) {
    // dp[k] N을 k개 사용해서 만들 수 있는 숫자들의 집합
    const dp = Array.from({length: 9}, () => new Set());
    
    for(let k=1; k<=8; k++) {
        // 숫자 이어붙이기
        const NNN = Number(String(N).repeat(k));
        dp[k].add(NNN);
        
        // 사직 연산 조합
        for(let i=1; i<k; i++) {
            const j = k - i;
            
            for(const num1 of dp[i]) {
                for(const num2 of dp[j]) {
                    dp[k].add(num1 + num2);
                    dp[k].add(num1 - num2);
                    dp[k].add(num1 * num2);
                    
                    if(num2 !== 0) {
                        dp[k].add(Math.floor(num1 / num2));
                    }
                }
            }
        }
        if(dp[k].has(number)) {
            return k;
        }
    }
    return -1;
}

// 11 2

// 1개 -> 2 1가지 dp[1] = 1
// 2개 -> 22, 2+2, 2-2, 2*2, 2/2 5가지 
// 3개 -> 222, 
// 4개 -> 2222,