function solution(data, col, row_begin, row_end) {
    let result = 0;
    
    // 정렬
    // let sortedData = data.sort((a,b) => a[1] !== b[1] ? a[1] - b[1] : b[0] - a[0]);
    
    data.sort((a,b) => {
        const colIndex = col - 1;
        if(a[colIndex] !== b[colIndex]) {
            return a[colIndex] - b[colIndex];
        } else {
            return b[0] - a[0];
        }
    });
    
    for(let i=row_begin-1; i<=row_end - 1; i++) {
        const rowNum = i + 1;
        
        const tuple = data[i];
        
        let S_i = 0;
        for(let j=0; j<tuple.length; j++) {
            S_i += (tuple[j] % rowNum);
        }
        result = result ^ S_i;
    }
   
    
    return result;
    
}

// 2 2 6
// 1 5 10
// 4 2 9
// 3 8 3

// 4 2 9
// 2 2 6    S_2 = 0+0+0 = 0
// 1 5 10   S_3 = 1+2+1 = 4
// 3 8 3

// result = S_2 | S_4

// // col 번째 값을 기준으로 오름차순 정렬

// col 번째 값이 같으면 첫번째 값으 기준으로 내림차순 정렬


// col = i+1