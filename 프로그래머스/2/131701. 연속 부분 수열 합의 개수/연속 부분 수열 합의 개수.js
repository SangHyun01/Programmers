function solution(elements) {
    const set = new Set()
    const n = elements.length;
    
    // 원형 배열을 2배로 늘림
    const doubledElements = [...elements, ...elements];
    
    // 바깥쪽 루프 (1부터 n까지)
    for(let len=1; len<=n; len++) {
        let currentSum = 0;
        for(let i=0; i<len; i++) {
            currentSum += doubledElements[i];
        }
        set.add(currentSum);
        for(let start=1; start<n; start++) {
            const tail = doubledElements[start - 1];
            const head = doubledElements[start + len - 1];
            
            currentSum = currentSum - tail + head;
            set.add(currentSum);
        }
    }
    return set.size
    
}

