function solution(start, end) {
    var answer = [];
    let num;
    for(num = start; num >= end; num--){
        answer.push(num);
    }
    return answer;
}