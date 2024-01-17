function solution(arr1, arr2) {
    if(arr1.length > arr2.length){
        return 1;
    }else if(arr1.length < arr2.length){
        return -1;    
    }
    else if(arr1.length === arr2.length){
        if(arr1.reduce((a,b)=>a+b) > arr2.reduce((c,d)=>c+d)){
            return 1;
        }else if(arr1.reduce((a,b)=>a+b) < arr2.reduce((c,d)=>c+d)){
            return -1;
        }else{
            return 0;
        }
    }
}