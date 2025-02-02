function solution(arr) {
    let result = [];
    if(arr.length === 1){
        result.push(-1);
    }
    let min = Math.min(...arr);
    return arr.filter(num => num !== min);
}