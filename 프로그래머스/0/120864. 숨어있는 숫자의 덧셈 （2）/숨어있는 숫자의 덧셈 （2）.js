function solution(my_string) {
    // 정구표현식 사용
    return my_string.split(/[a-zA-Z]/g).reduce((a,c) => +a + +c,0);
}