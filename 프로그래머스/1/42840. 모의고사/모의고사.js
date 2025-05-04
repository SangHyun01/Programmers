function solution(answers) {
    let p1 = [1,2,3,4,5]
    let p2 = [2,1,2,3,2,4,2,5]
    let p3 = [3,3,1,1,2,2,4,4,5,5]
    
    let scores = [0,0,0]
    
    answers.forEach((answer,i) => {
        if(answer === p1[i%p1.length]) scores[0]++;
        if(answer === p2[i%p2.length]) scores[1]++;
        if(answer === p3[i%p3.length]) scores[2]++;
    });
    
    const maxScore = Math.max(...scores);
    
    return scores.map((score,idx) => 
        (score === maxScore ? idx + 1 : null)).filter(v => v !== null);
}