function solution(board, moves) {
    let answer = 0;
    let basket = []; // 인형을 담을 바구니 (스택)

    // 1. moves 배열을 순회 (크레인 작동)
    for (let i = 0; i < moves.length; i++) {
        
        // 2. move는 1부터 시작하는 "열" (col)
        const move = moves[i];
        const colIndex = move - 1; // 0-based 인덱스로 변경

        // 3. board의 "행"을 0(위)부터 H(아래)까지 순회
        for (let j = 0; j < board.length; j++) {
            
            // 4. [수정] j번째 행, (move-1)번째 열을 확인
            const doll = board[j][colIndex];

            // 5. 인형이 0이 아니면 (인형을 찾으면)
            if (doll !== 0) {
                
                // 6. 인형을 뽑음 (그 자리를 0으로 만듦)
                board[j][colIndex] = 0;
                
                // 7. [수정] 스택 로직: 바구니 맨 위와 비교
                if (basket.length > 0 && basket[basket.length - 1] === doll) {
                    // 7-1. 같으면? 터뜨림 (pop)
                    basket.pop();
                    answer += 2;
                } else {
                    // 7-2. 다르면? 바구니에 쌓음 (push)
                    basket.push(doll);
                }
                
                // 8. (중요!) 인형 하나 뽑았으니 이 열(j)의 탐색 중단
                break;
            }
            // (doll === 0 이면? -> 아무것도 안 하고 다음 행(j+1)으로 감)
        }
    }
    
    return answer;
}


// 12345

// 00000
// 00103
// 02501
// 42442
// 35131

// moves[i] 가 1이면



// stack = [424]

// count = 4
// 빼서 스택에 넣을때 같으면 stack.pop() count+=2

// board에서 moves에 해당하는 걸 뺄때 가장 위에 있는 숫자가 뭔지

