function solution(n) {
    let arr = String(n).split("");
    for(let i=0; i<arr.length - 1; i++){
        for(let j=0; j<arr.length - 1-i ; j++){
            if(arr[j] < arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return Number(arr.join(""))
}


 // let arr = String(n).split("");
    // let result = arr.sort((a,b) => b-a);
    // return Number(result.join(""));