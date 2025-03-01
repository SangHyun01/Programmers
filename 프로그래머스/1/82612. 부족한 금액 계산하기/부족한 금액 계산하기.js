function solution(price, money, count) {
    let result = 0;
    let pay = 0;
    for(let i=1; i<=count; i++){
        pay += price * i;        
    }
    if(pay > money){
        result = pay - money
    }else{
        return 0;
    }
    return result;
}