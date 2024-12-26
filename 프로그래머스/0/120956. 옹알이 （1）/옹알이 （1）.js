function solution(babbling) {
    var answer = 0;
    
    const possibleWord = ["aya","ye","woo","ma"];
    
    babbling.forEach(word => {
        let wordLength = word.length
        
        for(let i=0; i<possibleWord.length; i++){
            if(word.includes(possibleWord[i])){
                wordLength = wordLength - possibleWord[i].length
            }
            if(!wordLength){
                answer++
                break
            }
        }
    })
    
    return answer;
}