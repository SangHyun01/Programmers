function solution(k, tangerine) {
    const cnt = new Map();
    
    for(const x of tangerine) cnt.set(x,(cnt.get(x) ?? 0) + 1);
    
    const sizes = Array.from(cnt.values()).sort((a,b) => (b-a));
    
    let usedKinds = 0;
    
    for(const c of sizes){
        k -= c;
        usedKinds += 1;
        if(k <= 0) return usedKinds;
    }
    return usedKinds;
}