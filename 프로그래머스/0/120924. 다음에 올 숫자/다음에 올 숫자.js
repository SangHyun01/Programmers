function solution(common) {
    
    let answer;
    
    const div1 = common[1]/common[0];
    const div2 = common[2]/common[1];

    if(div1 == div2){
        answer = common[(common.length-1)]*div1
    }else {
        answer = common[(common.length-1)]+(common[1]-common[0])
    }
    return answer;
}