function solution(arr) {
    let sum = arr.reduce((a,c) => a+c);
    return sum / arr.length;
}