function solution(box, n) {
    let arr = box.map(el => Math.floor(el / n));
    return arr.reduce((a,b)=> a*b);
}