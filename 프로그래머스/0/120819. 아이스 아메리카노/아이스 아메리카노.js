function solution(money) {
    let result = [];
    result.push(Math.floor(money/5500));
    result.push(money-(result[0]*5500));
    return result;
}