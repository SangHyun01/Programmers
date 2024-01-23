function solution(arr, flag) {
    let Arr = [];
    for(let i=0;i<flag.length;i++){
        if(flag[i] === true){
            for(let j=0;j<arr[i]*2;j++){
                Arr.push(arr[i]);    
            }
        }else{
            for(let j=0;j<arr[i];j++){
                Arr.pop();    
            }
        }
    }
    return Arr;
}