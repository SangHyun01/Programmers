function solution(numbers, hand) {
    // 키패드 2차원 배열x -> map으로 저장
    let keypads = {
        1: [0,0], 2:[0,1], 3:[0,2],
        4: [1,0], 5:[1,1], 6:[1,2],
        7: [2,0], 8:[2,1], 9:[2,2],
        '*':[3,0], 0:[3,1], '#':[3,2]
    };
    
    // 왼쪽 가능한 숫자
    let moveLeft = [1,4,7];
    
    // 오른쪽 가능한 숫자
    let moveRight = [3,6,9];
    
    let result = '';
    
    // 처음 왼쪽,오른쪽 엄지 위치
    let thumbLeft = keypads['*'];
    let thumbRight = keypads['#'];
    
    for(const number of numbers) {     
        // 만약 왼쪽 가능한 숫자에 포함되어 있으면 result에 L 추가, 왼쪽 엄지 위치 갱신
        if(moveLeft.includes(number)) {
            result += 'L';
            thumbLeft = keypads[number];
        } else if(moveRight.includes(number)) { // 오른쪽에 가능한 숫자에 포함되면 result에 R추가 오른쪽 엄지 위치 갱신
            result += 'R';
            thumbRight = keypads[number];
        } else { // 둘 다 포함안되어 있으면 2,5,8,0
            const targetCoords = keypads[number];
            const leftDist = getDis(thumbLeft, targetCoords); // 왼쪽 거리
            const rightDist = getDis(thumbRight, targetCoords); // 오른쪽 거리
            
            if(leftDist < rightDist) { // 왼쪽이 더 가까우면
                result += 'L';
                thumbLeft = targetCoords;
            } else if(leftDist > rightDist) { // 오른쪽이 더 가까우면
                result += 'R';
                thumbRight = targetCoords;
            } else { // 거리 같으면
                if(hand === 'left') { // 왼손잡이
                    result += 'L';
                    thumbLeft = targetCoords;
                } else {
                    result += 'R';
                    thumbRight = targetCoords;
                }
            }
        }
    }
    return result;
}
        
function getDis(posA, posB) {
    let distance = Math.abs(posA[0] - posB[0]) + Math.abs(posA[1] - posB[1]);
    
    return distance;
}

// 1,4,7 왼손 3,6,9 오른손

// 왼손 오른손 위치는 이전에 누른 숫자의 위치

// 매순간마다 누른 손의 위치 result에 추가

// 거리를 알려면 2차원 배열에 숫자 저장해야하나

// [[1,2,3],[4,5,6],[7,8,9].[*,0,#]]

// 4,3 크기 이차원 배열

// [0,1] [2,1] 두개의 숫자 배열이 있을때 거리 구하는 함수


