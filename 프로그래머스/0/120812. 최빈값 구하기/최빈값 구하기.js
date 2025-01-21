function solution(array) {
    let newArr = new Array(Math.max(...array)+1).fill(0);
    for(let i=0; i<array.length; i++){
        newArr[array[i]] += 1;
    }
    if(newArr.indexOf(Math.max(...newArr)) !== newArr.lastIndexOf(Math.max(...newArr))){
        return -1;
    }else {
        return newArr.indexOf(Math.max(...newArr))
    }
}