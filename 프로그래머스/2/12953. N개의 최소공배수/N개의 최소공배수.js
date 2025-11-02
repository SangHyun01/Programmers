function solution(arr) {
    let resultLCM = arr[0];
    
    for(let i=1; i<arr.length; i++) {
        resultLCM = lcm(resultLCM, arr[i]); 
    }
    
    return resultLCM;
}

// 최소공배수
function lcm(a,b) {
    return (a*b) / gcd(a,b);
}

// 최대공약수 구하는 함수
function gcd(a,b) {
    if(b === 0) return a;
    return gcd(b, a%b);
}

