function solution(weights) {
    // 짝꿍 개수
    let answer = 0;
    
    // 맵 생성 {몸무게: 사람수}
    const weightMap = new Map();
    
    // weight 배열 오름차순 정렬
    weights.sort((a,b) => a - b);
    
    for(const w of weights) {
        // w와 짝꿍이 될 파트너가 맵에 있는지 확인
        
        // 1:1 비율
        if(weightMap.has(w)) {
            answer += weightMap.get(w); 
        }
        // 2:3 비율
        if(w%3 === 0 && weightMap.has((w*2)/3)) {
            answer += weightMap.get(w*2/3);
        }
        // 1:2 비율
        if(w%2 === 0 && weightMap.has(w/2)) {
            answer += weightMap.get(w/2);
        }
        // 3:4 비율
        if(w%4 === 0 && weightMap.has((w*3)/4)) {
            answer += weightMap.get(w*3/4);
        }
        
        weightMap.set(w, (weightMap.get(w) || 0) + 1);
    }
    return answer;
}



// 몸무게1*거리1 === 몸무게2*거리2 인게 몇개인지 찾아라

// if 몸무게가 같으면 거리는 상관없음
// answer++

// 몸무게 두 개 선택해서 곱해가면서 같아지는지 비교
// 같으면 answer++

     
// 100 골랐을때 경우의 수[200,300,400]
// 180 [360,540,720]
// 360 [720,1080,1440]
// 270 [540,810,1080]
    
// 1:1
// 2:3
