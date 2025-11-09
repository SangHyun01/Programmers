function solution(wallpaper) {
    
    let minRow = Infinity; // 가장 위쪽
    let minCol = Infinity; // 가장 왼쪽
    let maxRow = 0; // 가장 아래쪽
    let maxCol = 0; // 가장 오른쪽
    
    for(let i=0; i<wallpaper.length; i++) {
        for(let j=0; j<wallpaper[0].length; j++) {
            // 파일을 만나면
            if(wallpaper[i][j] === "#") {
                minRow = Math.min(minRow, i);
                minCol = Math.min(minCol, j);
                maxRow = Math.max(maxRow, i);
                maxCol = Math.max(maxCol, j);
            }
        }
    }
    return [minRow, minCol, maxRow+1, maxCol + 1];
}

// 파일 선택하기 위한 최소한의 이동 좌표 리턴

// 순회하면서 가장 위에 오는 파일의 행 위치, 가장 왼쪽에 있는 파일의 열 위치 가 시작 위치

// 가장 아래  파일의 행 위치, 가장 오른쪽 파일들의 열 위치가 끝 위치


// 시작점 = [파일 중 가장 작은 행, 파일 중 가장 작은 열]
// 끝점 = [파일 중 가장 큰 행, 파일 중 가장 큰 열]

// 바탕화면 순회하면서 파일들 위치 저장
// 처음 발견한 파일의 위치를 가장 작은 값들이라고 가정. 다음 파일 만나면 비교해서 