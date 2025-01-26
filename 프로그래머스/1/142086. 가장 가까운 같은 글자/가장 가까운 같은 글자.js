function solution(s) {
    // 결과를 저장할 배열
    let result = [];
    // 문자가 처음 나온건지 확인위한 배열
    let checkArr = [];
    let arr = s.split("");
    for(let i=0; i<arr.length; i++){
        // checkArr 배열에 arr[i] 문자가 있으면
        if(checkArr.includes(arr[i])){
            result.push(i - checkArr.lastIndexOf(arr[i]));
            // checkArr 배열에 arr[i] 문자가 없으면
        }else{
            result.push(-1);
        }
        checkArr.push(arr[i]);
    }
    return result;
}
// 빈 배열 생성
// 문자열을 쪼개서 배열로 만듦
// s 에서 처음 나온 값이면 -1 저장
// 이미 나온 문자이면(includes) 해당 인덱스에서 이미 나온 문자의 인덱스 뺌
