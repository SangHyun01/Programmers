function solution(emergency) {
    // slice()는 원본 배열의 복사본!! 원본은 변경되지 않음
    // indexOf 사용
    let arr = emergency.slice().sort((a,b) => b-a);
    return emergency.map((v) => arr.indexOf(v)+1);
}
