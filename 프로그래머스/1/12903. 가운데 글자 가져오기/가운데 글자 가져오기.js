function solution(s) {
    let answer = '';
    let newArr = [...s];
    console.log(newArr)
    if(newArr.length % 2 === 0){
        answer += newArr[(Math.floor(newArr.length / 2) - 1)] + newArr[(Math.floor(newArr.length /2))];
        console.log(answer);
    }else{
        answer += newArr[(Math.floor(newArr.length / 2))];
    }
    return answer;
}

// 홀수 s.length / 2 한거의 
// 짝수이면 indexOf(s.length/2 - 1) + idexOf(s/length/2) 


