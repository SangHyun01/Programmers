function solution(people, limit) {
    let arr = people.sort((a,b) => a-b);
    let i = 0;
    let j = arr.length-1;
    let count = 0;
    
    while(i <= j){
        if(arr[i] + arr[j] <= limit){
            i++
        }
        j--;
        count++;
    }
    return count;
}

