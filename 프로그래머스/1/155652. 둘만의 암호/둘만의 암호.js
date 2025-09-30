function solution(s, skip, index) {
    let answer = '';
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    for(const char of s) {
        let currentIndex = alphabet.indexOf(char);
        let count = 0;
        
        while(count < index) {
            currentIndex++;
            
            currentIndex = currentIndex % 26;
            
            if(!skip.includes(alphabet[currentIndex])) {
                count++;
            }
        }
        answer += alphabet[currentIndex];
    }
    return answer;
}