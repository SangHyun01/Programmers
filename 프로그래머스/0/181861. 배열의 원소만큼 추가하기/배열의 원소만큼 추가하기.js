function solution(arr) {
    let ar = [];
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<=arr[i];j++){
            ar.push(arr[i]) * j;    
        }
    }
    return ar;
}