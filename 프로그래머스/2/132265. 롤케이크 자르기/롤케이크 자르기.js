function solution(topping) {
    let answer = 0
    const n = topping.length;
    
    // 두 개의 map을 생성
    const leftMap = new Map();
    const rightMap = new Map();
    
    // 우선 rightMap에 토핑 종류,개수 채워넣음
    // 키의 값이 있으면 값+1, 없으면 undefined || 0 이므로 0+1
    for(const t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1)
    }
    
    // 자를 수 있는 개수 n개 토핑 있으면 n-1번 자를 수 있음
    for(let i=0; i<n-1; i++) {
        const t = topping[i];
        
        // rightMap에 있던걸 빼서 leftMap으로 줌
        rightMap.set(t, rightMap.get(t)-1);
        
        // 개수가 0이되면 종류를 지움
        if(rightMap.get(t) === 0) {
            rightMap.delete(t);
        }
        
        leftMap.set(t, (leftMap.get(t) || 0) + 1);
        
        if(leftMap.size === rightMap.size) {
            answer++;
        }
    }
    return answer;
}

// // 종류가 같아야 공평

// // 배열에 하나씩 옮기면서 옮긴 배열의 종류 하나씩 증가
// // 남은 배열의 종류 하나씩 감소 하면서 같아지는 개수 카운트

// [1,2,3,1] 종류 3
// [4] -> 종류 1개 set(...topping)

// topping을 하나씩 빼면서 topping 배열에 하나 남을떄까지 옮기면서 비교
// 종류 => set.size 
// 옮기면서 size가 같은 순간이 오면
