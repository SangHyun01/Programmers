function solution(arr, k) {
    let ar = [];
    for(let i=0;i<arr.length;i++){
        if(k%2 === 1){
            ar.push(arr[i] * k);
        }else{
            ar.push(arr[i] + k);
        }
    }
    return ar;
}