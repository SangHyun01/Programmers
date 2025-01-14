function solution(before, after) {
    let beforeStr = before.split("").sort().join("");
    let afterStr = after.split("").sort().join("");
    return beforeStr === afterStr ? 1 : 0;
}