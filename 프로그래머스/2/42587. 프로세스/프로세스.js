function solution(priorities, location) {
    
    let answer = 0;
    
    // 인덱스:우선순위 로 저장
    let queue = priorities.map((priority, index) => ({index, priority}));
    
    // 실행 순서 카운트
    let executionCount = 0;
    
    // 큐가 빌때까지 반복
    while(queue.length > 0) {
        
        // 맨 앞에 프로세스 꺼내기
        let currentProcess = queue.shift();
        
        // 나머지 큐에 우선순위 높은거 있는지 확인
        let hasHigherProcess = queue.some((process) => process.priority > currentProcess.priority);
        
        // 우선순위가 더 높은게 있으면 맨 뒤로 다시 보냄
        if(hasHigherProcess) {
            queue.push(currentProcess);
        } else { // 없으면
            executionCount++
            
            // 찾는 프로세스인지
            if(currentProcess.index === location) {
                answer = executionCount;
                break;
            }
        }
    }
    return answer;
}

