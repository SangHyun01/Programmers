function solution(order) {
    let answer = 0
    // 보조 컨베이어
    let extra = []
    let mainBoxNum = 1; // 메인 컨베이어에서 나올 상자 번호
    let orderIndex = 0; // 실어야 할 순서
    
    // 컨베이어
    // let main = [...order].sort()
    // 트럭
    // let truck = []
    while(orderIndex < order.length) {
        // 현재 실어야할 목표 상자
        const targetBox = order[orderIndex]
        
        if(extra.length > 0 && extra[extra.length - 1] === targetBox) {
            extra.pop();
            answer++;
            orderIndex++;
        }
        else if(mainBoxNum <= order.length) {
            if(mainBoxNum === targetBox) {
                answer++;
                orderIndex++;
                mainBoxNum++;
            }
            else {
                extra.push(mainBoxNum);
                mainBoxNum++;
            }
        } else {
            break;
        }
    }
    return answer; 
}
// 54321

// 보조 [12345]
// 컨베이어 []
// 트럭 []