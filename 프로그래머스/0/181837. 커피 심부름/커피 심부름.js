function solution(order) {
    let americanoCnt = 0;
    let latteCnt = 0;
    let sum = 0;
    
    for(let i=0;i<order.length;i++){
        if(order[i].includes('latte')){
            latteCnt++;
        }else if(order[i].includes('americano')){
            americanoCnt++;
        }else if(order[i] === "anything"){
            americanoCnt++;
        }
    }
    sum = 4500*americanoCnt + 5000*latteCnt;
    return sum;
}