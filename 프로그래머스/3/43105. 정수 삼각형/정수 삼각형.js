function solution(triangle) {
    for(let i=1; i<triangle.length; i++) {
        for(let j=0; j<triangle[i].length; j++) {
            // 현재 칸이 맨 왼쪽인 경우
            if(j === 0) {
                triangle[i][j] += triangle[i-1][j];
            }
            // 현재 칸이 맨 오르쪽인경우
            else if(j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i-1][j-1];
            }
            // 현재 칸이 중간에 있는 경우
            else {
                triangle[i][j] += Math.max(triangle[i-1][j-1], triangle[i-1][j]);
            }
        }
    }
    return Math.max(...triangle[triangle.length - 1]);
    
}


