function solution(arr) {
    let cnt = 0;
    let prevArr = arr;
    while(true){
        const changeCurArr = prevArr.map(x => {
        if(x>=50 && x%2 === 0) return x/2;
        else if(x < 50 && x%2 === 1) return x*2+1;
        return x;
    })    
        const isAllSame = prevArr.every((a,i) => a === changeCurArr[i])
        if(isAllSame) break;
        cnt+=1;
        
        prevArr = changeCurArr;
    }
    return cnt;
}