function solution(n) {
    let triangle = Array.from({length:n}, (_,i) => Array(i+1).fill(0));
    
    let y = -1;
    let x = 0;
    let num = 1;
    
    let direction = 0; // 0: 아래, 1: 오른쪽, 2:대각선
    
    for(let i=n; i>0; i--) {
        for(let j=0; j<i; j++) {
            if(direction === 0) {
                y++;
            } else if(direction === 1) {
                x++;
            } else if(direction === 2) {
                y--;
                x--;
            }
            triangle[y][x] = num++;
        }
        direction = (direction + 1) % 3;
    }
    return triangle.flat();
}

// 1
// 2 9
// 3 10 8
// 4 5 6 7

// nxn 2차원 배열
// let arr = Array.from({length: n}, (_,i) => Array(i+1).fill(0))

