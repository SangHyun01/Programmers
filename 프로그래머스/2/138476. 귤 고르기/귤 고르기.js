function solution(k, tangerine) {
    const kind = new Map();
    
    for(const t of tangerine) {
        kind.set(t, (kind.get(t) || 0) + 1);
    }
    const counts = [...kind.values()];
    
    counts.sort((a,b) => b-a);
    
    let answer = 0;
    let sum = 0;
    
    for(const count of counts) {
        answer++;
        sum += count;
        
        if(sum >= k) break;
    }
    return answer;
}


// 1 2 2 3 3 4 5 5

// 2233455
// 많이 있는 것부터 담음

// 1 2 2 3 3 4 5 5  4개

// 그럼 각 크기:개수를 맵으로 저장
