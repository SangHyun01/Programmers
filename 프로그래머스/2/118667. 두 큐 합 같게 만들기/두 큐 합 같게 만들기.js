function solution(queue1, queue2) {
    let result = 0;
    let count = 0;
    
    let sumOne = queue1.reduce((acc,cur) => acc+cur,0);
    let sumTwo = queue2.reduce((acc,cur) => acc+cur,0);
    
    // 만들어야하는 합
    const targetNum =  Math.floor((sumOne + sumTwo)/2);
    
    // shift는 성능적으로 느리기 때문에 포인터를 사용하는 것이 좋음
    const q = [...queue1, ...queue2];
    let q1Idx = 0;
    let q2Idx = queue1.length;
    
    const maxLimit = queue1.length * 3;
    
    for(let count=0; count<maxLimit; count++) {
        if(sumOne === targetNum) {
            return count;
        }
        // sumOne이 더 크면 q1 앞부분을 빼서 q2로 보냄
        if(sumOne > targetNum) {
            sumOne -= q[q1Idx];
            q1Idx++;
        }
        // sumOne이 작으면 q2의 앞부분 가져옴
        else {
            sumOne += q[q2Idx];
            q2Idx++;
        }
    }
    return -1;
}
// 앞에서부터 차례대로만 뺄 수 있음

// [3,2,7,2] = 14 -> 15가 되기 위해 +1 필요
// [4,6,5,1] = 16 -> 15가 되기 위해 -1 필요

// [3,2,7,2,4] = 18
// [6,5,1] = 12 count++

// [2,7,2,4] = 15
// [6,5,1,3] = 15 count++

// 방법은 두번째에서 1만 빼던가, 1차이 나는걸 바꾸던가걸 바꾸던가

// 두 큐의 합 = 30 한 큐당 15로 맞춰야함

// 원소에 targetNum 보다 큰 수가 있으면 만들 수가 없음

// [1,2,1,2] = 6 -> 10되기 위해 +4 필요
// [1,10,1,2] = 14 -> 10되기 위해 -4필요

// [10,1,2] 14-1=13, count++ 아직 10보다 큼
// [1,2] 14-1-10=3, count++ 10보다 작음 [1,2,1,2,1,10]=17 10보다 큼
// [2,1,2,1,10] [1,2,1] 17-1=16 count++ 10보다 큼
// [1,2,1,10] 14>10 [1,2,1,2] count++
// [2,1,10] 13>10 [1,2,1,2,1] count++
// [1,10] 11>10 [1,2,1,2,1,2] count++
// [10] 10=10 [1,2,1,2,1,2,1] count++ 
// return count

// 하나당 10 

// [1,1] = 2 -> 4되기 위해 +2 필요
// [1,5] = 6 -> 4되기 위해 -2 필요, -2만 뺄수 없음 애초에 5>4 라서 만들 수가 없음

// sumOne > targetNum 이면 앞에서부터 빼야함
// sumTwo > targetnum queue2 앞에서부터 뺌


// 두 개 배열 길이는 무조건 같음.
// 합이 큰 쪽에서 작은 쪽으로 보내줘야 함.