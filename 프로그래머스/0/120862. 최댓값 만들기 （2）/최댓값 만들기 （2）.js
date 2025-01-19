function solution(numbers) {
    // 오름차순 정렬
    let arr = numbers.sort((a,b)=>a-b);
    // 만약 인덱스 0,1 요소가 둘 다 0 보다 작으면 곱해서 마지막 인덱스 두개 요소 곱이랑 비교
    if(arr[0] < 0 && arr[1] < 0 ){
        let res1 = arr[0] * arr[1];
        let res2 = arr[arr.length-2] * arr[arr.length-1];
        if(res1 < res2){
            return res2;
        }else{
            return res1;
        }
    }else{
        let max = arr[arr.length-2] * arr[arr.length-1];
        return max;
    }
}