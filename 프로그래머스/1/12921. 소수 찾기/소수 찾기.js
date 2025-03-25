function solution(n) {
    let isPrime = Array(n+1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for(let i=2; i*i<=n; i++){
        if(isPrime[i]){
            for(let j=i*i; j<= n; j+=i){
                isPrime[j] = false;
            }
        }
    }
    return isPrime.filter(v => v).length;
}
// 1부터 증가시키면서 나누면서 나누어 떨어지면 count 증가
// count 가 2이면 answer

// 소수는 1과 자기 자신만 약수 -> 약수 2개

// 4 -> 1, 2, 3, 4

// 2부터 n-1까지 배열을 새로 만들려면? 
// 6 이면 [1,2,3,4,5,6] 