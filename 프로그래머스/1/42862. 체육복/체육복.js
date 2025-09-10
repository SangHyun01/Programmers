function solution(n, lost, reserve) {
    // reserve 와 lost에 둘 다 포함된 사람
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));
    
    realLost.sort((a,b) => a-b);
    realReserve.sort((a,b) => a-b);
    
    // 전체 학생 수 - 체육복을 끝까지 못빌린 학생
    let borrowCount = 0;
    
    for(let i=0; i<realLost.length; i++) {
        let lostStudent = realLost[i];
        
        // 앞번호한테 빌릴 수 있는지 먼저 확인
        let lendIdx = realReserve.indexOf(lostStudent - 1);
        
        // 앞번호가 없으면 뒷번호한테 빌릴 수 있는지
        if(lendIdx === -1) {
            lendIdx = realReserve.indexOf(lostStudent + 1);
        }
        
        if(lendIdx !== -1) {
            borrowCount++
            realReserve.splice(lendIdx, 1);
        }
    }
    
    return n - realLost.length + borrowCount;

}

// n=5 [1,1,1,1,2]

// n=5 [1,0,2,0,1] -> 0 왼쪽 오른쪽에 2, 2->1 1

// n=3 [2,1,0] -> 0 왼쪽 오른쪽에 2가 아니라서 못 빌려줌 return 2

// 일단은 