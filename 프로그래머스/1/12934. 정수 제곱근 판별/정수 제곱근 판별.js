function solution(n) {
    let answer;
    if(Math.sqrt(n) === Math.floor(n / Math.sqrt(n))){
        answer = (Math.sqrt(n)+1) * (Math.sqrt(n)+1);
    }else{
        answer = -1;
    }
    return answer;
}

// Math.sqrt 쓰는데 정수인지를 확인해야함