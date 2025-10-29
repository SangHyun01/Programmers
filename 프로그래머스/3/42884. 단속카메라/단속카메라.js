function solution(routes) {
    let answer = 0;
    
    // 진출을 기준으로 오름차순 정렬
    routes.sort((a,b) => a[1] - b[1]);
    
    answer = 1;
    
    let lastCamera = routes[0][1]; // 첫번째 카메라 위치
    
    // 두번쨰 차량부터 순회
    for(let i=1; i<routes.length; i++) {
        const carIn = routes[i][0];
        
        // 현재 차량 진입이 마지막 카메라보다 뒤에 있으면
        if(carIn > lastCamera) {
            answer++;
            
            // 새 카메라 위치는 현재 차량의 진출 시점으로 업데이트
            lastCamera = routes[i][1];
        }
    }
    return answer;
}

// -20   -15
// -18       -13
//          -14      -5
//                   -5   -3

// -15 -13 -5 -3

// 최대한 많이 겹치는 곳에 설치

// -18~-15 설치 가능
// -14~-13
// -5