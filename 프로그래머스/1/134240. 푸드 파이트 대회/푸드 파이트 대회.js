function solution(food) {
    //let foodArr = food.slice(1,food.length);
    // 한 선수가 먹는 음식의 배열
    let first = [];
    // 다른 선수가 먹는 음식의 배열(한 선수의 배열을 복사해서 내림차순으로 정렬)
    let second = [];
    for(let i=1; i<food.length; i++){
        let count = Math.floor(food[i]/2);
        for(let j=0; j<count; j++){
            first.push(i);
            second.push(i);
        }
    }
    second.sort((a,b) => b-a);
    first.push(0);
    let result = first.concat(second).join("");
    return result;
    
    
}