function solution(n) {
    let arr = [];
    let val = n;
    while(val !== 1){
        arr.push(val);
        if(val%2 === 0){
           val/= 2; 
        }else{
            val = 3*val+1;
        }
    }
    arr.push(1);
    return arr;
}