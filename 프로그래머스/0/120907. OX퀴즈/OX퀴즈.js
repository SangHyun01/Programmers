function solution(quiz) {
    let answer = [];
    quiz.forEach((item) => {
        const Calnum = item.split(" ");
        
        const X = Number(Calnum[0]);
        const Y = Number(Calnum[2]);
        
        let calc = 0;
        if(Calnum[1] === "+"){
            calc = X + Y;
        }
        if(Calnum[1] === "-"){
            calc = X - Y;
        }
        
        const result = Number(Calnum[4]);
        if(calc === result){
            answer.push("O");
        }
        if(calc !== result){
            answer.push("X");
        }
    })
    return answer;
}