function solution(numbers) {
    let sumArr = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            sumArr.push(sum);
        }
    }
    console.log(sumArr)
    let setArr = new Set(sumArr);
    let answer = Array.from(setArr).sort((a,b) => a-b);
    return answer;
}