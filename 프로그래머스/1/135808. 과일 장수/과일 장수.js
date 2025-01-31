function solution(k, m, score) {
    // js 2차원 배열 만드는 방법!!
    let sum = 0;
    let arr = []; // 빈 배열로 초기화
    
    // 내림차순으로 정렬
    let sortedArr = score.sort((a, b) => b - a);
    
    for (let i = 0; i < Math.floor(score.length / m); i++) { // 그룹을 만들 개수만큼 반복
        arr[i] = []; // 먼저 i번째에 빈 배열을 할당

        for (let j = 0; j < m; j++) {
            arr[i].push(sortedArr[i * m + j]); // 그룹에 요소 추가
        }

        sum += Math.min(...arr[i]) * m; // 해당 그룹의 최솟값 × m을 합산
    }
    
    return sum;
}

// 내림차순 정렬해서 m개씩 slice -> 2차원 배열을 생성
// 이중 for문 사용해서 각 배열에서 min * m 해서 sum에 저장
// 배열 길이만큼 반복하면서 sum 누적해서 반환
