function solution(n) {
    return String(n).split('').reduce((sum,idx)=>sum+Number(idx),0);
}