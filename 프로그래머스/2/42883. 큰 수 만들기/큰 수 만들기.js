function solution(number, k) {
    const stack = []
    let count = k;
    
    for(let digit of number){
        while(stack.length>0 && stack[stack.length-1] < digit && count>0){
            stack.pop();
            count--;
        }
        stack.push(digit);
    }
    stack.splice(stack.length-count,count);
    
    return stack.join('');
}

// stack = [] 에 넣고, top 보다 작으면 안넣음. 