function solution(n) {
    let answer = 0;
    // n의 이진수 배열
    let binaryOfN = makeBinary(n);
    
    // n 이진수 배열의 1의 개수
    let countOneN = countNumOne(binaryOfN);
    
    // 비교 시작 숫자
    let nextNum = n + 1;
    
    while(true) {
        
        
        let otherNumBinary = makeBinary(nextNum);
        let otherNumOneCount = countNumOne(otherNumBinary);
        
        // 1의 개수가 같으면
        if(otherNumOneCount === countOneN) {
            answer = nextNum;
            break;
        } 
        nextNum++;
    }
    return answer;
}


// n부터 1씩 증가하면서 이진수로 나타내고 1의 개수를 비교해서 같으면 그 값이 answer

// 이진수로 바꾸는 함수
function makeBinary(num) {
    // 나머지를 저장할 스택
    let stack = [];
    
    if(num === 0) {
        return [0];
    }
    
    // num이 0보다 클동안 반복
    while(num > 0) {
        // 나머지
        let remaining = num % 2;
        stack.push(remaining);
        num = Math.floor(num / 2);
    }
    let binary = stack.reverse();
    
    return binary;
}

// 이진수 베열에서 1의 개수 카운트 하는 함수
function countNumOne(arr) {
    // 카운트할 변수
    let count = 0;
    
    for(const one of arr) {
        if(one == 1) {
            count++;
        }
    }
    return count;
}

