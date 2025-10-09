function solution(keymap, targets) {
    let result = []
    let minPressMap = {}
    
    for(const keys of keymap) {
        for(let i=0; i<keys.length; i++){
            const char = keys[i];
            const presses = i + 1;
            
            // 아직 저장된적이 없거나, 기존 값보다 작으면 갱신
            if(!minPressMap[char] || presses < minPressMap[char]) {
                minPressMap[char] = presses;
            }
        }
    }
    
    for(const target of targets) {
        let count = 0;
        let isPossible = true;
        
        for(const char of target) {
            if(!minPressMap[char]) {
                isPossible = false;
                break;
            }
            count += minPressMap[char];
        }
        result.push(isPossible ? count : -1);
    }
    return result;
    
}

//둘다 target 에 있으면 인덱스 비교해서 더 작은 인덱스 사용

// keymap[i]에 target[i] 번째 단어가 없으면 return -1

