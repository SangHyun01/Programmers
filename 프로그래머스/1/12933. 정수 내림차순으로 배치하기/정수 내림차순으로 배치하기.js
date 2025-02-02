function solution(n) {
    let arr = String(n).split("");
    console.log(arr);
    let result = arr.sort((a,b) => b-a);
    return Number(result.join(""));
}