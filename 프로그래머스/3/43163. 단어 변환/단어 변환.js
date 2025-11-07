function solution(begin, target, words) {
    // target이 words에 없으면 0
    if(!words.includes(target)) return 0;
    
    // 현재 단어, 변환 횟수
    let queue = [];
    // 방문 횟수
    let visited = new Set();
    
    queue.push([begin,0]);
    visited.add(begin);
    
    while(queue.length > 0) {
        const [currentWord, count] = queue.shift();
        
        if(currentWord === target) {
            return count;
        }
        
        for(const word of words) {
            if(!visited.has(word) && isOne(currentWord, word)) {
                visited.add(word);
                queue.push([word, count + 1]);
            }
        }
    }
}


// 두 단어가 하나의 글자만 다른지 확인 함수
function isOne(strA, strB) {
    let count = 0;
    
    for(let i=0; i<strA.length; i++) {
        if(strA[i] !== strB[i]) {
            count++;
        }
    }
    return count === 1;
}