function solution(clothes) {
    const map = new Map();
    
    for(let [name, type] of clothes){
        map.set(type,(map.get(type) || 0) + 1);
    }
    
    let combinations = 1;
    for(let count of map.values()){
        combinations *= (count + 1);
    }
    
    return combinations - 1;
}