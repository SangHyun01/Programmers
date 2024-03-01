function solution(array) {
    const arr = array.sort((a,b)=>b-a);
    return arr[Math.floor(arr.length / 2)];
}