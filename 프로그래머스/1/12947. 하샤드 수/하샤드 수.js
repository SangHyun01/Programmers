function solution(x) {
    let sum = 0;
    let xStr = String(x);
    for(let i=0; i<xStr.length; i++){
        sum += Number(xStr[i]);
    }
    return x % sum === 0 ? true : false;
}