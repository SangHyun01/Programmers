function solution(left, right) {
    let result = [];
    for(let num=left; num<=right; num++){
        let count = 0;
        for(let i=1; i<=num; i++){  
            if(num % i === 0){
                count++;
            }
        }
        if(count % 2 === 0){
            result.push(num)
        }else{
            result.push(-num);
        }
    }
    console.log(result);
    let sum = result.reduce((a,c) => a + c);
    return sum;
}