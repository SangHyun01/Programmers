function solution(my_string) {
    // 정규표현식 사용
    // 변수 앞에 + 붙이면 정수로 변환
    return my_string.split(/[a-zA-Z]/g).reduce((a,c) => +a + +c,0);
}