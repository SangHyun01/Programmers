function solution(s)
{
    let stack = [];
    
    for(let i=0; i<s.length; i++) {
        let currentStr = s[i]; // 현재 문자
        
        let topOfStack = stack[stack.length - 1]; // 스택 가장 위의 값
        
        // 스택이 비어있지 않고, 현재 문자와 같으면
        if(stack.length > 0 && topOfStack === currentStr) {
            stack.pop();
        } else { // 비어있거나 다르면
            stack.push(currentStr);
        }
    }
    return stack.length === 0 ? 1 : 0;
}

