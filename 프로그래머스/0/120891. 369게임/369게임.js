function solution(order) {
    let count = 0;
    let numArr = String(order).split('');
    numArr.forEach((num)=>{
        if(['3','6','9'].includes(num)){
           count+=1;
           }
    })
    return count;
}