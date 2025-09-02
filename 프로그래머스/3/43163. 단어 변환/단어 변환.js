function solution(begin, target, words) {
    // 1. 타겟 단어가 없으면 0 리턴
   if(!words.includes(target)) return 0;
    
    // 2. 큐 생성
    const queue = [];
    queue.push([begin,0]);
    
    // 3. words 단어들을 이미 방문했는지 확인위한 배열
    const visited = new Array(words.length).fill(false);
    
    // 4. 큐가 빌때까지 반복
    while(queue.length > 0){
        // 큐의 가장 앞에 있는 원소 꺼냄
        let [currentWord, count] = queue.shift();
        
        // 꺼낸 단어가 target과 같으면 반환
        if(currentWord === target) {
            return count;
        }
        
        // words 배열의 모든 단어를 순회하며 다음으로 변환할 단어 찾음
        words.forEach((word, index) => {
            if(!visited[index] && canConvert(currentWord, word)) {
                visited[index] = true;
                
                queue.push([word, count + 1]);
            }
        });
    }
    return 0;             
}
                      
function canConvert(word1, word2) {
    let diffCount = 0;
    
    for(let i=0; i<word1.length; i++){
        if(word1[i] !== word2[i]) {
            diffCount++;
        }
    }
    return diffCount === 1;
}