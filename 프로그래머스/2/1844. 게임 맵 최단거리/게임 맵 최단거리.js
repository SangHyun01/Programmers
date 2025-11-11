function solution(maps) {
    
    // 최단 거리 구하는 문제 -> BFS
    const n = maps.length; // 맵 세로 길이
    const m = maps[0].length; // 맵 가로 길이
    
    // 맵과 동일한 크기로 visited 배열 만들고 초기화
    const visited = Array.from({length: n}, () => new Array(m).fill(false));
    
    // 큐에 [x,y,거리] 저장
    const queue = [];
    
    // 상,하,좌,우 방향 나타나는 배열
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    
    // 탐색 시작점
    queue.push([0,0,1]);
    visited[0][0] = true;
    
    // BFS 루프 시작
    while(queue.length > 0) {
        const [x,y,dist] = queue.shift();
        
        // 목적지에 도착했는지 확인
        if(x === n-1 && y === m-1) {
            return dist;
        }
        
        for(let i=0; i<4; i++) {
            const nextX = x + dx[i];
            const nextY = y + dy[i];
            
            // 다음 위치가 유효한지 확인
            if(nextX >= 0 && nextX < n && nextY >= 0 && nextY < m) {
                if(maps[nextX][nextY] === 1 && !visited[nextX][nextY]) {
                    visited[nextX][nextY] = true;
                    queue.push([nextX, nextY, dist + 1]);
                }
            }
        }
    }
    
    return -1;
}


// 1이고 맵을 벗어나지 않으면 이동 가능, 카운트 증가

// start === target 이면 종료





















