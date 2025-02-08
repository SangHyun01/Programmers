function solution(ingredient) {
    let count = 0;
    const stack = [];
    
    for(let i=0; i<ingredient.length; i++){
        stack.push(ingredient[i]);
        
        if(stack.length >= 4 && stack.slice(-4).join("") === "1231"){
            stack.splice(-4);
            count++;
        }
    }
    return count;
}


// join("")으로 ingredient 합치고 "1231" 있으면 자르고 count++;
// 없으면 continue 
// count 리턴
// includes()와 replace()를 사용했더니 시간 초과발생 -> stack 이용
