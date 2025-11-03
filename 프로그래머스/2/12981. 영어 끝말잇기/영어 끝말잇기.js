function solution(n, words) {
    
    let result = [];
    
    // 이전에 나온 단어 담는 배열
    let usedWords = new Set();
    
    for(let i=0; i<words.length; i++) {
        if(i === 0) {
            usedWords.add(words[i]);
            continue;
        }
        
        // 이전 단어, 현재 단어
        const lastWord = words[i-1];
        const currentWord = words[i];
        
        // 이전 단어의 마지막 글자
        const lastChar = lastWord[lastWord.length - 1];
        
        // 현재 단어의 첫 글자
        const firstChar = currentWord[0];
        
        // 이미 있거나, 끝 처음 글자가 다르면
        if(usedWords.has(currentWord) || lastChar !== firstChar) {
            // 탈락
            const person = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [person, turn];
        }
        usedWords.add(currentWord);
    }
    // 다 정상이면
    return [0,0];
    
}



