function solution(X, Y) {
    let xCount = new Array(10).fill(0);
    let yCount = new Array(10).fill(0);
    
    // X 숫자 카운트
    for(let num of X){
        xCount[num]++;
    }
    
    //Y 숫자 카운트
    for(let num of Y){
        yCount[num]++;
    }
    
    let numArr = [];
    
    // 9부터 0까지 겹치는 숫자를 찾아 저장
    for(let i=9; i>=0; i--){
        let minCount = Math.min(xCount[i], yCount[i]);
        numArr.push(String(i).repeat(minCount));
    }
    
    let result = numArr.join("");
    
    if(result === "") return "-1"
    
    if(/^0+$/.test(result)) return "0";
    
    return result;
    
}