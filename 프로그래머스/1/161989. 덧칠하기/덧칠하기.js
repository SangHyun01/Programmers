function solution(n, m, sections) {
    var answer = 0;
    var painted = 0; // 칠한 부분의 마지막 위치
    
    for(var section of sections){
        if(painted < section){ // 칠하지 않은 구간 있으면
            answer++; // 횟수 추가
            painted = section + m - 1 // 칠한 구간 끝 갱신
        }
    }
    return answer;
}
