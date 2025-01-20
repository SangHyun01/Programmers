function solution(polynomial) {
    // '+' 로 나누어 배열 ['3x','3','2x']
    let arr = polynomial.split(' + ');
    // x계수의 합
    let xNum = 0;
    // 상수항의 합
    let num = 0;
    arr.forEach((item)=>{
        if(item.includes("x")){
            const xArr = item.split("x");
            
            if(xArr[0] === ""){
                xNum += 1;
            }
            if(xArr[0] !== ""){
                xNum += Number(xArr[0]);
            }
        }
        
        if(!item.includes("x")){
            num += Number(item);
        }
    })
    // x항의 합이 0이 아니고 상수항 합이 0이 아닐때
    if(xNum !== 0 && num !== 0){
        // x항의 합이 1이면
        if(xNum === 1){
            return `x + ${num}`;
        }
        // x항의 합이 1이 아니면
        return `${xNum}x + ${num}`; 
    }
    // x항의 합이 0이 아니고 상수항이 0이면
    if(xNum !== 0 && num === 0){
        if(xNum === 1){
            return "x";
        }
        return `${xNum}x`;
    }
    // x항의 합이 0이고 상수항의 합이 0이 아니면
    if(xNum === 0 && num !== 0){
        return `${num}`;
    }
    if(xNum === 0 && num === 0){
        return "0";
    }
}

