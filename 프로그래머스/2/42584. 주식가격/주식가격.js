function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    
    for(let i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++) {
            
            answer[i]++;
            
            if(prices[i] > prices[j]) {
                break;
            }
        }
    }
    return answer;
}

// 다음 수가 이전 수보다 크거나 같으면 count++
// 작으면 count+1 하고 넘어감

