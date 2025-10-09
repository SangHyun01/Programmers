function solution(a, b) {
    let num1 = Number(String(a)+String(b));
    let num2 = Number(String(b)+String(a));
    
    if(num1 >= num2) return num1;
    else if(num1 < num2) return num2
}