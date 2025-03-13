function solution(n, lost, reserve) {
    let realLost = lost.filter(x => !reserve.includes(x)).sort((a,b) => a-b);
    let realReserve = reserve.filter(x => !lost.includes(x)).sort((a,b) => a-b);
    
    let answer = n - realLost.length;
    
    realReserve.forEach(r => {
        let index = realLost.findIndex(l => l === r-1 || l === r+1);
        if(index !== -1){
            answer++;
            realLost.splice(index, 1);
        }
    })
    return answer;
}