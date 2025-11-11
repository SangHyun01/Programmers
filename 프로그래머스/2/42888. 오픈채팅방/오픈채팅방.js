function solution(record) {
    let answer = [];
    
    const userMap = new Map();
    
    for(const rec of record) {
        const [action, uid, nickname] = rec.split(" "); // 띄어쓰기로 구조분해 할당
        
        // Enter나 Change 일때만 닉네임 변경
        if(action === "Enter" || action === "Change") {
            userMap.set(uid, nickname);
        }
    }
    
    for(const rec of record) {
        const [action, uid, nickname] = rec.split(' ');
        
        const finalNickname = userMap.get(uid);
        
        if(action === "Enter") {
            answer.push(`${finalNickname}님이 들어왔습니다.`);
        } else if(action === "Leave") {
            answer.push(`${finalNickname}님이 나갔습니다.`);
        }
    }
    return answer;
}

// enter muzi
// enter prodo
// leave muzi
// endter

// 만약 같은 uuid이면 기존의 이름도 변경

// uid 값이랑 닉네임을 키값으로 저장

// {"uid1234" -> Muzi, "uid4567" -> Prodo}

