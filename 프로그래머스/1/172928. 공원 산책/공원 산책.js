function solution(park, routes) {

    // 시작점 위치 찾기
    let H = park.length; // 세로 길이
    let W = park[0].length; // 가로 길이
    
    let startX = -1;
    let startY = -1;
    
    for(let i=0; i<H; i++) {
        for(let j=0; j<W; j++) {
            if(park[i][j] === 'S') {
                startX = j;
                startY = i;
                break;
            }
        }
        if(startY !== -1) break; // S찾았으면 startY가 -1이 아니므로 for문 종료
    }
    
    // 방향 정의
    const directions = {
        'E' : [0,1],
        'W' : [0,-1],
        'S' : [1,0],
        'N' : [-1,0]
    };
    
    for(const route of routes) {
        const [dir,distStr] = route.split(" ");
        const distance = Number(distStr);
        
        // 이동할 방향
        const [dy,dx] = directions[dir];
        
        // 가기전 확인
        let canMove = true;
        let tempX = startX;
        let tempY = startY;
        
        for(let i=0; i<distance; i++) {
            tempY += dy;
            tempX += dx;
            
            // 맵을 벗어나는지 확인
            if(tempY < 0 || tempY >= H || tempX < 0 || tempX >=W) {
                canMove = false;
                break;
            }
            // 장애물 만나면
            if(park[tempY][tempX] === 'X') {
                canMove = false;
                break;
            }
        }
        
        if(canMove) {
            startX = tempX;
            startY = tempY;
        }
    }
    return [startY, startX]
    
    
    
    
}

// OSO
// OOO
// OXO
// OOO

// routes 명령대로 하는데 가다가 X가 있으면 취소
// park를 넘어가도 취소

// 그럼 일단 park에 있는걸로 2차원 배열을 만들어야 할듯

// 시작 위치(S)를 찾는 것이 중요한데...
