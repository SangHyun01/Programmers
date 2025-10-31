function solution(arrayA, arrayB) { 
    // arrayA 배열의 최대공약수
    const gcdA = getArrayGCD(arrayA);
    
    // arrayB 배열의 최대공약수
    const gcdB = getArrayGCD(arrayB);
    
    let answerA = 0;
    let answerB = 0;
    
    
    if(!arrayB.some(val => val%gcdA === 0)) {
        answerA = gcdA;
    }
    
    if(!arrayA.some(val => val%gcdB === 0)) {
        answerB = gcdB;
    }
    
    let answer = Math.max(answerA, answerB);
    
    return answer;
}

// 배열의 모든 원소의 최대공약수 구하는 함수
function getArrayGCD(arr) {
    // 배열이 비어있으면 0 반환
    if(arr.length === 0) return 0;
    
    // 배열의 첫번째 값으로 시작
    let resultGCD = arr[0];
    
    // 두번째 원소부터 끝까지 반복
    for(let i=1; i<arr.length; i++) {
        resultGCD = gcd(resultGCD, arr[i]);
    }
    return resultGCD;
}

// 두 개 원소의 최대공약수 만드는 함수
function gcd(a,b) {
    if (b === 0) return a;
    
    return gcd(b, a%b);
}