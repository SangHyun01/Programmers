function solution(participant, completion) {
    
    let countMap = {};
    
    for(let i=0; i<participant.length; i++){
        countMap[participant[i]] = (countMap[participant[i]] || 0) + 1;
    }
    
    for(let i=0; i<completion.length; i++){
        countMap[completion[i]] -= 1;
    }
    
    for(let name in countMap){
        if(countMap[name] > 0){
            return name;
        }
    }
    
    
    // participant.sort();
    // completion.sort();
    // for(let i=0; i<participant.length; i++){
    //     if(participant[i] !== completion[i]){
    //         return participant[i];
    //     }
    // }
}