function solution(n) {
    let dp = Array(n+1);
    
    // if(n === 1) return 1;
    
    dp[1] = 1;
    dp[2] = 2;
    
    for(let i=3; i<=n; i++) {
        dp[i] = (dp[i-2] + dp[i-1]) % 1000000007;
    }
    return dp[n];
}

// 점화식 DP문제

// 가로 길이 n 세로 길이 2 을 채우는 경우의 수

// 타일 크기 W:2 H:1

// n 은 무조건 2 이상
// n >= 2
// n=2 방법 2가지
// n=3 방법 3가지
// n=4 방법 2+3 5가지
// n=i 방법 n(i-2) + n(i-1);

// dp(i) = (dp(i-1) + dp(i-2)) % 1000000007;


