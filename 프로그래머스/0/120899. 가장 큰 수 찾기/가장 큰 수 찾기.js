function solution(array) {
    let n = Math.max(...array);
    return [n, array.indexOf(n)];
}