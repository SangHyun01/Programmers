function solution(sequence, k) {
   let start = 0;
    let end = 0;
    let currentSum = sequence[0];
    
    let answer = [];
    let minLength = Infinity; 
    // 일단 길이를 무한대로 설정. 첫번째 비교에서는 무조건 현재 길이가 더 짧게 하기 위해서
    
    while(end < sequence.length) {
        if(currentSum === k) {
            const currentLength = end - start + 1;
            if(currentLength < minLength) {
                minLength = currentLength;
                answer = [start,end];
            }
            // 같은 길이의 다른 수열을 찾을 수 있으므로 start 이동시켜 탐색
            currentSum = currentSum - sequence[start];
            start++;
        }
        // 현재 합이 k보다 클 경우 start를 증가
        else if(currentSum > k) {
            currentSum -= sequence[start];
            start++;
        }
        // 현재 합이 k보다 작을경우 end를 증가
        else {
            end++;
            if(end < sequence.length) {
                currentSum += sequence[end];
            }
        }
    }
    return answer;
}


// 이중 반복문으로 풀면 시간 초과 발생
// 이중포인터, 슬라이딩 윈도우로 풀어야 함