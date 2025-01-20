function solution(s) {
    // 더한 값
    let result = 0;
    let arr = s.split(" ");
    // 문자 배열 S를 순회
    for(let i=0; i<arr.length; i++){
        // 차례대로 더해나감
        if(arr[i] !== 'Z'){
            result += Number(arr[i]);    
        }else{
            result -= Number(arr[i-1]);
        }
        // Z를 만나면 합에서 이전 인덱스의 요소를 뺌고 sum에 저장
    }
    return result;
}