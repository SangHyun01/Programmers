function solution(name, yearning, photo) {
    // photo 길이만큼 0으로 채운 배열 생성
    let result = new Array(photo.length).fill(0);

    for(let i=0; i<photo.length; i++){
        for(let j=0; j<photo[i].length; j++){
            if(name.includes(photo[i][j])){
                result[i] += yearning[name.indexOf(photo[i][j])];
            }   
        }
    }
    return result;
}
// photo의 길이만큼 빈 배열 만들고 0으로 채움
// name의 각 요소를 yearing의 요소로 매핑해야할 것 같은데...
// 그리고 photo를 순회하면서 name에 포함되는 문자이면
// yearing에서 해당 name의 인덱스의 값으로 숫자를 찾아서 더함
// "may" 이면 yearing[name.indexOf("may")] -> 5
