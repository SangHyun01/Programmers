function solution(rank, attendance) {
    const deleted = rank.filter((_,index)=> attendance[index]);
    deleted.sort((a,b)=>a-b);
    const realPart = deleted.map(item => rank.findIndex(r => r === item));
    return realPart[0]*10000 + realPart[1]*100 + realPart[2];
}