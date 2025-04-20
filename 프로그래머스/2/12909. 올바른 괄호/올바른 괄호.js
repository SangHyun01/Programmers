function solution(s){
    let stack = []
    
    for(let char of s) {
        if(char === '(') {
            stack.push(char);
        }else {
            // 닫는 괄호
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

