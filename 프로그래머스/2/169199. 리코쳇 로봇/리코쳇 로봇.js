function solution(board) {
    // 보드 가로 길이
    const w = board[0].length;
    // 보드 세로 길이
    const h = board.length;
    
    let posR, posG; // R과 G의 위치
    
    for(let i=0; i<h; i++) {
        for(let j=0; j<w; j++) {
            if(board[i][j] === 'R') {
                posR = [i,j];
            }
        }
    }
    
    const [startX, startY] = posR;
    
    let queue = [[startX, startY, 0]];
    
    const visited = Array.from({length:h}, () => Array(w).fill(false));
    
    // 시작 위치는 방문 처리
    visited[startX][startY] = true;
    
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    while(queue.length > 0) {
        const [curX, curY, count] = queue.shift();
        
        // 꺼낸 위치가 도착점이면?
        if(board[curX][curY] === 'G') {
            return count;
        }
        for(let i=0; i<4; i++) {
            let nx = curX;
            let ny = curY;
            
            while(
                nx + dx[i] >= 0 && nx + dx[i] < h && ny + dy[i] >= 0 && ny + dy[i] < w && board[nx+dx[i]][ny + dy[i]] !== 'D'
            ) {
                nx+=dx[i];
                ny+=dy[i];
            }
            if(!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx,ny,count+1]);
            }
        }
    }
    return -1;
}