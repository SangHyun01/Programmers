function solution(price) {
    let result;
    if(price >= 100000 && price < 300000){
        result = price * 0.95;
    }else if(price >= 300000 && price < 500000){
        result = price * 0.9;
    }else if(price >= 500000){
        result = price * 0.8;
    }else{
        result = price
    }
    return Math.floor(result);
}