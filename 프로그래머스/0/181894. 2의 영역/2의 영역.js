function solution(arr) {
    let startIdx = arr.indexOf(2);
    let lastIdx = arr.lastIndexOf(2);
    return lastIdx + startIdx < 1 ? [-1] : arr.slice(startIdx,lastIdx+1);    
}