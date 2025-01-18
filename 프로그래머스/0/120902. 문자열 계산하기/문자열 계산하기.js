function solution(my_string) {
    let arr = my_string.split(' ')
    let answer = Number(arr[0]);
    
    for(let i=1; i<arr.length; i+=2){
        arr[i] === '+' ? answer += Number(arr[i+1]) : answer -= Number(arr[i+1]);
    }
    return answer;
}