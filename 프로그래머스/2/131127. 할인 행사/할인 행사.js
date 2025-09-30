function solution(want, number, discount) {
    let answer = 0;
    const wantMap = new Map();
    for(let i=0; i<want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    
    const check = (map) => {
        for(const count of map.values()) {
            if(count > 0) return false;
        }
        return true;
    }
    
    for(let i=0; i<10; i++){
        if(wantMap.has(discount[i])) {
            wantMap.set(discount[i], wantMap.get(discount[i]) - 1);
        }
    }
    
    if(check(wantMap)) answer++;
    
    for(let i=1; i<=discount.length-10; i++) {
        const removeItem = discount[i-1];
        if(wantMap.has(removeItem)) {
            wantMap.set(removeItem, wantMap.get(removeItem) + 1);
        }
        
        const addedItem = discount[i+9];
        if(wantMap.has(addedItem)) {
            wantMap.set(addedItem, wantMap.get(addedItem) - 1);
        }
        
        if(check(wantMap)) answer++;
    }
    
    return answer;
}