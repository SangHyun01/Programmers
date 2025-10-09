function solution(numbers) {
    const n = numbers.length;
    const answer = new Array(n).fill(-1);
    const stack = [];
    
    for(let i=n-1; i>=0; i--) {
        const currentNum = numbers[i];
        
        while(stack.length > 0 && stack[stack.length-1] <= currentNum){
            stack.pop();
        }
        if(stack.length > 0) {
            answer[i] = stack[stack.length - 1]
        }
        stack.push(currentNum);
    }
    return answer
    
}

// 플래그 활용
// 중첩 반복문을 사용할 수 있지만 시간초과
// 스택 사용해서 풀어야함

